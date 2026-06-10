'use client';

import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';
import MagicBento, { BentoCardProps } from '@/components/MagicBento';
import ProfileCard from '@/components/ProfileCard';

export function About() {
  const { hero, about } = portfolio;

  const bentoCards: BentoCardProps[] = [
    {
      color: '#120F17',
      label: 'What I Do',
      title: 'Creative & Digital',
      description: 'Digital Marketing · Content Writing · Graphic Design · Social Media Strategy',
      descriptionLines: 3,
    },
    {
      color: '#120F17',
      label: 'Experience',
      title: hero.stats[0].value,
      description: 'Hands-on across diverse creative and marketing projects',
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
      label: hero.stats[3].label,
      title: hero.stats[3].value,
      description: 'Professional certifications in digital marketing tools',
      descriptionLines: 2,
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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

        {/* Two-column layout: ProfileCard left, MagicBento right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">

          {/* Left: ProfileCard */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mx-auto lg:mx-0 flex-shrink-0"
          >
            <ProfileCard
              name="Megha R K"
              title="Marketing Communication"
              handle="meghark"
              status="Open to work"
              contactText="Contact Me"
              avatarUrl="/images/profile1.jpeg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={scrollToContact}
              innerGradient="linear-gradient(145deg,#DD78A130 0%,#78A1DD20 100%)"
              behindGlowEnabled
              behindGlowColor="rgba(221, 120, 161, 0.5)"
              behindGlowSize="50%"
            />
          </motion.div>

          {/* Right: MagicBento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            <MagicBento
              cards={bentoCards}
              textAutoHide={false}
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
      </div>
    </section>
  );
}
