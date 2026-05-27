'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, BarChart3 } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';
import TiltedCard from '@/components/TiltedCard';

const cardMeta = [
  {
    accent: '#DD78A1',
    bg: 'https://picsum.photos/seed/hubspot-cert/600/400',
    icon: <Award className="h-8 w-8" />,
  },
  {
    accent: '#78A1DD',
    bg: 'https://picsum.photos/seed/performance-mkt/600/400',
    icon: <Award className="h-8 w-8" />,
  },
  {
    accent: '#5ECFA8',
    bg: 'https://picsum.photos/seed/creative-pub/600/400',
    icon: <BookOpen className="h-8 w-8" />,
  },
  {
    accent: '#E0B96A',
    bg: 'https://picsum.photos/seed/ai-research/600/400',
    icon: <BarChart3 className="h-8 w-8" />,
  },
];

export function Achievements() {
  const { achievements } = portfolio;

  return (
    <section id="achievements" className="relative py-10 sm:py-14">
      <LineWavesBackground section="achievements" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 dark:from-primary/10 dark:via-transparent dark:to-background/80 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Achievements & Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {achievements.map((achievement, index) => {
            const meta = cardMeta[index % cardMeta.length];
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
              >
                <TiltedCard
                  imageSrc={meta.bg}
                  altText={achievement.title}
                  captionText={achievement.title}
                  containerHeight="260px"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  scaleOnHover={1.06}
                  rotateAmplitude={10}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem',
                        gap: '10px',
                        background: 'rgba(10, 8, 20, 0.68)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        border: `1px solid ${meta.accent}25`,
                      }}
                    >
                      {/* Icon ring */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '52px',
                          height: '52px',
                          borderRadius: '50%',
                          background: `${meta.accent}18`,
                          border: `1.5px solid ${meta.accent}45`,
                          color: meta.accent,
                          flexShrink: 0,
                        }}
                      >
                        {meta.icon}
                      </div>

                      {/* Type badge */}
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: meta.accent,
                          opacity: 0.85,
                        }}
                      >
                        {achievement.type}
                      </span>

                      {/* Title */}
                      <p
                        style={{
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '14px',
                          textAlign: 'center',
                          lineHeight: 1.35,
                        }}
                      >
                        {achievement.title}
                      </p>

                      {/* Bottom accent line */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: '15%',
                          right: '15%',
                          height: '2px',
                          borderRadius: '1px',
                          background: `linear-gradient(90deg, transparent, ${meta.accent}, transparent)`,
                        }}
                      />
                    </div>
                  }
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
