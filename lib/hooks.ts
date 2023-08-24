import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, timeOfLastClick]);

  return {
    ref,
  };
};
