'use client';

import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Work } from '@/components/sections/work';
import { Experience } from '@/components/sections/experience';
import { Achievements } from '@/components/sections/achievements';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}
