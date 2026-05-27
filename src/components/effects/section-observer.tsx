'use client';

import { useEffect } from 'react';
import { useSectionContext, type SectionType } from '@/context/section-context';

const SECTION_IDS: SectionType[] = ['home', 'about', 'skills', 'work', 'experience', 'achievements', 'resume', 'contact'];

export function SectionObserver() {
  const { setCurrentSection } = useSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is in view
      const sections = SECTION_IDS.map(id => {
        const element = document.getElementById(id);
        return { id, element };
      }).filter(s => s.element !== null);

      let currentVisible: SectionType = 'home';
      let closestDistance = Infinity;

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            currentVisible = id;
          }
        }
      });

      setCurrentSection(currentVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setCurrentSection]);

  return null;
}
