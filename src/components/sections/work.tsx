'use client';

import { motion } from 'framer-motion';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';
import CircularGallery from './CircularGallery';

const workItems = [
  { image: '/items/1.png', text: 'Brand Campaign' },
  { image: '/items/3.png', text: 'Social Media' },
  { image: '/items/4.png', text: 'Digital Ad' },
  { image: '/items/5.png', text: 'Content Design' },
  { image: '/items/flyer1 mudramalar.png', text: 'Mudramalar' },
  { image: '/items/mudhra flyer 2.png', text: 'Mudhra' },
  { image: '/items/labour day flyer.jpeg', text: 'Labour Day' },
  { image: '/items/Blue And Black Classy Perfume Sale Instagram Post.png', text: 'Perfume Campaign' },
  { image: '/items/Brown and Cream Modern Vanilla Perfume Instagram Post.png', text: 'Vanilla Perfume' },
  { image: '/items/Pink Elegant Special Sale Perfume Instagram Post.png', text: 'Perfume Sale' },
  { image: '/items/Colorful Planner Mobile App Promotion Instagram Post.png', text: 'App Promotion' },
  { image: '/items/Sage Green Minimalist Natural Download App Facebook Post.png', text: 'App Download' },
  { image: '/items/Pink and White Playful International Youth Day Instagram Post.png', text: 'Youth Day' },
  { image: '/items/WhatsApp Image 2026-05-27 at 14.30.15.jpeg', text: 'Recent Work' },
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