'use client';

import { motion } from 'framer-motion';

interface StatsCardProps {
  label: string;
  value: string;
  delay?: number;
}

export function StatsCard({ label, value, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6 sm:p-8 text-center group hover:glass-hover"
    >
      <motion.p
        className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
      >
        {value}
      </motion.p>
      <p className="text-xs sm:text-sm text-muted-foreground mt-2">{label}</p>
    </motion.div>
  );
}
