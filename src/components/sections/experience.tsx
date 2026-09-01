'use client';

import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';

const cardColors = [
  { accent: '#DD78A1', glow: 'rgba(221,120,161,0.18)' },
  { accent: '#78A1DD', glow: 'rgba(120,161,221,0.18)' },
  { accent: '#5ECFA8', glow: 'rgba(94,207,168,0.18)' },
  { accent: '#E0B96A', glow: 'rgba(224,185,106,0.18)' },
];

export function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="relative py-10 sm:py-14">
      <LineWavesBackground section="experience" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 dark:from-primary/10 dark:via-transparent dark:to-background/80 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl mb-2"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* useWindowScroll syncs with the page scroll — no sub-container, no scrollbar */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={50}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="22%"
          scaleEndPosition="10%"
          baseScale={0.88}
          blurAmount={6}
        >
          {experience.map((exp, index) => {
            const c = cardColors[index % cardColors.length];
            const num = String(index + 1).padStart(2, '0');
            return (
              <ScrollStackItem key={index}>
                {/* Glass background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'rgba(12, 9, 18, 0.94)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderRadius: '28px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px ${c.glow}`,
                  }}
                />
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full"
                  style={{ background: `linear-gradient(180deg, ${c.accent} 0%, transparent 100%)` }}
                />
                {/* Soft left glow wash */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-20 rounded-l-[28px]"
                  style={{ background: `linear-gradient(90deg, ${c.glow} 0%, transparent 100%)` }}
                />
                {/* Large decorative number */}
                <div
                  className="absolute right-5 bottom-3 font-black leading-none select-none pointer-events-none"
                  style={{
                    fontSize: 'clamp(4.5rem, 9vw, 7rem)',
                    color: c.accent,
                    opacity: 0.07,
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {num}
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between gap-4">
                  {/* Company + period */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase"
                      style={{
                        background: `${c.accent}18`,
                        color: c.accent,
                        border: `1px solid ${c.accent}28`,
                      }}
                    >
                      {exp.company}
                    </span>
                    <span className="text-xs font-medium tabular-nums" style={{ color: c.accent, opacity: 0.65 }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Role */}
                  <h3
                    className="text-xl sm:text-2xl font-bold leading-snug text-white"
                    style={{ textShadow: `0 0 40px ${c.accent}40` }}
                  >
                    {exp.role}
                  </h3>

                  {/* Description + progress */}
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-2">
                      {experience.map((_, i) => (
                        <div
                          key={i}
                          className="h-[3px] rounded-full transition-all duration-300"
                          style={{
                            width: i === index ? '2.5rem' : '0.45rem',
                            background: i === index ? c.accent : `${c.accent}30`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 space-y-4"
        >
          <h3 className="text-2xl sm:text-3xl font-bold">Education</h3>
          <div className="h-1 w-14 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                degree: 'BA Journalism & Mass Communication',
                institution: 'Calicut University',
                period: 'Nov 2021 – Mar 2024',
                accent: '#DD78A1',
                glow: 'rgba(221,120,161,0.15)',
              },
              {
                degree: 'MA Communication',
                specialisation: 'Integrated Marketing Communication',
                institution: 'Amrita Vishwa Vidhyapeetham Coimbatore, Amrita University',
                period: 'Jun 2024 – May 2026',
                accent: '#78A1DD',
                glow: 'rgba(120,161,221,0.15)',
              },
            ].map((edu, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-5 overflow-hidden"
                style={{
                  background: 'rgba(18, 14, 26, 0.42)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: `0 4px 24px rgba(0,0,0,0.3), 0 0 40px ${edu.glow}`,
                }}
              >
                <div
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
                  style={{ background: `linear-gradient(180deg, ${edu.accent} 0%, transparent 100%)` }}
                />
                <div
                  className="absolute left-0 top-0 bottom-0 w-16 rounded-l-2xl"
                  style={{ background: `linear-gradient(90deg, ${edu.glow} 0%, transparent 100%)` }}
                />
                <div className="relative pl-3 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: edu.accent }}>
                    {edu.period}
                  </p>
                  <h4 className="text-base font-bold text-white leading-snug">{edu.degree}</h4>
                  {'specialisation' in edu && (
                    <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.72)' }}>
                      {edu.specialisation}
                    </p>
                  )}
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
