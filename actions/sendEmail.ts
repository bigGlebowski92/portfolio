'use server';

import React from 'react';
import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/email/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message)) {
    return {
      error: 'Invalid message ',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'icelik666@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
