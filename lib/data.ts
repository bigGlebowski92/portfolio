import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import sharePrompts from '@/public/share_prompts.png';
import threejs from '@/public/threejs.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'QA Engineer and QA Automation Engineer (python)',
    company: 'Bluegrove',
    location: 'Remote',
    description:
      'I worked as a QA Engineer/QA Automation Engineer (python). During the time in QA, I implemented test suites for various projects using Selenium, Python, and CI integration, helping to ensure high-quality and reliable software',
    icon: React.createElement(AiFillBug),
    date: '2018 - 2020',
  },
  {
    title: 'Frontend developer (React)',
    company: 'Bluegrove',
    location: 'Remote',
    description:
      "I'm now a Frontend developer. My stack includes React, Redux, Redux-toolkit, styled-components, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2020 - 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Share Prompts',
    description: 'Create your own cool Prompts and share it with everyone',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind'],
    imageUrl: sharePrompts,
  },
  {
    title: 'T-shirt customizer',
    description:
      'Customize your new T-shirt in 3D T-shirt customizer, with the power of artificial intelligence! ',
    tags: [
      'React',
      'TypeScript',
      'ThreeJS',
      'Tailwind',
      'React Three Fiber',
      'Framer Motion ',
    ],
    imageUrl: threejs,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Redux',
  'Redux-toolkit',
  'Styled-components',
  'Jest',
  'React Testing Library',
  'Vitest',
  'Ant Design',
  'Mantine',
  'Git',
  'Tailwind',
  'Storybook',
  'Framer Motion',
] as const;
