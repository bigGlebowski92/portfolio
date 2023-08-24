'use client';

import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Project from './Project';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
