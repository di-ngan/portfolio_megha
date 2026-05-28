'use client';

import { motion } from 'framer-motion';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';
import CircularGallery from './CircularGallery';

const workItems = [
  { image: '/items/Scoutt.png', text: 'Scoutt Campaign' },
  { image: '/items/Scoutt_2.png', text: 'Scoutt Social' },
  { image: '/items/Scoutt_3.png', text: 'Scoutt Design' },
  { image: '/items/p%26i_logistics.png', text: 'P&I Logistics' },
  { image: '/items/p%26i_logistics_2.png', text: 'P&I Campaign' },
  { image: '/items/p%26i_logistics_3.png', text: 'P&I Design' },
  { image: '/items/p%26i_logistics_4.png', text: 'P&I Social' },
  { image: '/items/Perfume.png', text: 'Perfume Campaign' },
  { image: '/items/Perfume_2.png', text: 'Perfume Ad' },
  { image: '/items/Perfume_3.png', text: 'Perfume Design' },
  { image: '/items/mudra_1.png', text: 'Mudramalar' },
  { image: '/items/mudra_2.png', text: 'Mudra Design' },
  { image: '/items/Samudhra_Labour_Day.jpeg', text: 'Labour Day' },
  { image: '/items/Samudhra_W_D.png', text: 'World Day' },
  { image: '/items/Samudhra_Water_Day.png', text: 'Water Day' },
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