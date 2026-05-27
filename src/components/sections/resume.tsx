'use client';

'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LineWavesBackground } from '@/components/effects/LineWavesBackground';
import GradualBlur from '@/components/effects/GradualBlur';

export function Resume() {
  return (
    <section
      id="resume"
      className="relative py-20 sm:py-28"
    >
      {/* Dynamic Background */}
      <LineWavesBackground section="resume" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 dark:from-primary/10 dark:via-transparent dark:to-background/80 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Resume</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-8 sm:p-12 max-w-4xl space-y-8"
        >
          {/* Resume Preview */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Comprehensive Resume</h3>
            <p className="text-muted-foreground">
              View my detailed resume with complete professional history, skills breakdown, education, and certifications. Download the PDF version for offline reference.
            </p>
          </div>

          {/* Placeholder for Resume Preview */}
          <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5 rounded-xl flex items-center justify-center border border-white/10 dark:border-slate-700/30">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">Resume Preview</p>
              <p className="text-xs text-muted-foreground">
                Click download to view full PDF
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10 dark:border-slate-700/30">
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Megha R K resume_260519_191147.pdf';
                link.download = 'Megha-RK-Resume.pdf';
                link.click();
              }}
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>

            <Button
              onClick={() => {
                window.open('/Megha R K resume_260519_191147.pdf', '_blank');
              }}
              variant="outline"
              className="gap-2 flex-1"
            >
              <ExternalLink className="h-4 w-4" />
              View Full Resume
            </Button>
          </div>
        </motion.div>

        {/* Scroll blur effect */}
        <GradualBlur
          position="bottom"
          height="5rem"
          strength={2}
          divCount={5}
          curve="bezier"
          opacity={0.8}
        />
      </div>
    </section>
  );
}