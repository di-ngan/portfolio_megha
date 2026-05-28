'use client';

import { motion } from 'framer-motion';
import BlurText from '@/components/BlurText';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <LineWavesBackground section="home" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 dark:from-primary/10 dark:via-transparent dark:to-background/80 pointer-events-none" />

      <div className="relative z-10 w-full text-center px-6 sm:px-8 max-w-4xl mx-auto">
        <BlurText
          text="Hi, My name is Megha R K"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
        />
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex flex-col items-center gap-2 text-muted-foreground cursor-pointer px-4"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs sm:text-sm opacity-70 tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 sm:w-6 sm:h-6 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
