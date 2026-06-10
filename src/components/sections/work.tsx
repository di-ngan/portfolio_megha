'use client';

import { motion } from 'framer-motion';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';
import CircularGallery from './CircularGallery';

const workItems = [
  { image: '/images/Mudra%20malar%20dance%20school/1.png', text: 'Mudramalar 1' },
  { image: '/images/Mudra%20malar%20dance%20school/2.png', text: 'Mudramalar 2' },
  { image: '/images/Mudra%20malar%20dance%20school/3.png', text: 'Mudramalar 3' },
  { image: '/images/Mudra%20malar%20dance%20school/4.png', text: 'Mudramalar 4' },
  { image: '/images/Mudra%20malar%20dance%20school/5.png', text: 'Mudramalar 5' },
  { image: '/images/amrita%20alumni%20relations/1.png', text: 'Amrita Alumni 1' },
  { image: '/images/amrita%20alumni%20relations/2.png', text: 'Amrita Alumni 2' },
  { image: '/images/amrita%20alumni%20relations/3.png', text: 'Amrita Alumni 3' },
  { image: '/images/aura%20flyer/1.png', text: 'Aura Flyer 1' },
  { image: '/images/aura%20flyer/2.png', text: 'Aura Flyer 2' },
  { image: '/images/aura%20flyer/3.png', text: 'Aura Flyer 3' },
  { image: '/images/aura%20flyer/4.png', text: 'Aura Flyer 4' },
  { image: '/images/aura%20flyer/5.png', text: 'Aura Flyer 5' },
  { image: '/images/aura%20flyer/6.png', text: 'Aura Flyer 6' },
  { image: '/images/labour%20day/labour%20day%20flyer.jpeg', text: 'Labour Day' },
  { image: '/images/MERMAN%20FLYER%20002/1.png', text: 'Merman Flyer 1' },
  { image: '/images/MERMAN%20FLYER%20002/2.png', text: 'Merman Flyer 2' },
  { image: '/images/MERMAN%20FLYER%20002/3.png', text: 'Merman Flyer 3' },
  { image: '/images/MERMAN%20FLYER%20002/4.png', text: 'Merman Flyer 4' },
  { image: '/images/MERMAN%20FLYER%20002/5.png', text: 'Merman Flyer 5' },
  { image: '/images/MERMAN%20FLYER%20002/6.png', text: 'Merman Flyer 6' },
  { image: '/images/MERMAN%20FLYER%20002/7.png', text: 'Merman Flyer 7' },
  { image: '/images/samudhra%20flyer/1.png', text: 'Samudhra Flyer 1' },
  { image: '/images/samudhra%20flyer/2.png', text: 'Samudhra Flyer 2' },
  { image: '/images/samudhra%20flyer/3.png', text: 'Samudhra Flyer 3' },
  { image: '/images/samudhra%20flyer/4.png', text: 'Samudhra Flyer 4' },
  { image: '/images/samudhra%20flyer/5.png', text: 'Samudhra Flyer 5' },
  { image: '/images/samudhra%20flyer/6.png', text: 'Samudhra Flyer 6' },
  { image: '/images/samudhra%20flyer/7.png', text: 'Samudhra Flyer 7' },
  { image: '/images/samudhra%20flyer/8.png', text: 'Samudhra Flyer 8' },
  { image: '/images/samudhra%20flyer/9.png', text: 'Samudhra Flyer 9' },
  { image: '/images/scoutt/1.png', text: 'Scoutt 1' },
  { image: '/images/scoutt/2.png', text: 'Scoutt 2' },
  { image: '/images/scoutt/3.png', text: 'Scoutt 3' },
];

export function Work() {
  return (
    <section
      id="work"
      className="relative py-20 sm:py-28"
    >
      <LineWavesBackground section="work" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 dark:from-primary/10 dark:via-transparent dark:to-background/80 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Work & Campaigns</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-muted-foreground text-lg">
            Selected campaigns and projects showcasing my expertise in digital marketing and brand communication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ height: '600px', position: 'relative' }}
        >
          <CircularGallery
            items={workItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </motion.div>
      </div>
    </section>
  );
}