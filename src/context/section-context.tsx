'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type SectionType = 'home' | 'about' | 'skills' | 'work' | 'experience' | 'achievements' | 'resume' | 'contact';

interface SectionContextType {
  currentSection: SectionType;
  setCurrentSection: (section: SectionType) => void;
  sectionIndex: number;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState<SectionType>('home');
  
  const sectionOrder: SectionType[] = ['home', 'about', 'skills', 'work', 'experience', 'achievements', 'resume', 'contact'];
  const sectionIndex = sectionOrder.indexOf(currentSection);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection, sectionIndex }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within SectionProvider');
  }
  return context;
}
