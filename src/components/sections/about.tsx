'use client';

import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';
import MagicBento, { BentoCardProps } from '@/components/MagicBento';

export function About() {
  const { hero, about } = portfolio;

  const bentoCards: BentoCardProps[] = [
    {
      color: '#120F17',
      label: 'Role',
      title: 'Marketing Communication',
      description: 'Brand Strategy · Campaign Management · Content & Communication',
      descriptionLines: 3,
    },
    {
      color: '#120F17',
      label: 'Experience',
      title: hero.stats[0].value,
      description: hero.stats[0].label + ' in digital marketing & communications',
      descriptionLines: 2,
    },
    {
      color: '#120F17',
      label: 'My Story',
      title: about.philosophy,
      description: about.summary,
      descriptionLines: 5,
    },
    {
      color: '#120F17',
      label: 'Core Strengths',
      title: 'Expertise',
      description: about.strengths.join(' · '),
      descriptionLines: 4,
    },
    {
      color: '#120F17',
      label: hero.stats[1].label,
      title: hero.stats[1].value,
      description: 'Successfully executed digital campaigns',
      descriptionLines: 2,
    },
    {
      color: '#120F17',
      label: hero.stats[3].label,
      title: hero.stats[3].value,
      description: 'Professional certifications in digital marketing tools',
      descriptionLines: 2,
    },
  ];

  return (
    <section id="about" className="relative py-10 sm:py-14">
      <LineWavesBackground section="about" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 dark:from-primary/10 dark:via-transparent dark:to-background/80 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">{about.title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <MagicBento
            cards={bentoCards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="213, 107, 150"
            spotlightRadius={300}
            particleCount={10}
          />
        </motion.div>
      </div>
    </section>
  );
}
