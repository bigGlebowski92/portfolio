'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey in the tech world began over 5 years ago in the realm of QA
        and QA automation. While ensuring software quality, I discovered my true
        passion for coding and building user-centric interfaces.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className="font-medium">React, Typescript, Redux, Next.js</span>.
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        front-end developer.
      </p>
      <p>
        <span className="italic">Beyond the screen</span>, I'm a fitness
        enthusiast who loves hitting the gym – finding parallels between pushing
        my limits in the code and in the weight room. I enjoy playing video
        games, watching movies, and playing with my dog. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. Travel is my
        other love; exploring new cultures and landscapes feeds my creativity
        and sense of wonder.
      </p>
    </motion.section>
  );
};

export default About;
