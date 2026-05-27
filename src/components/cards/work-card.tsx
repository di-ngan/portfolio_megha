'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  goal: string;
  role: string;
  actions: string[];
  outcome: string;
  image: string;
}

interface WorkCardProps {
  project: Project;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function WorkCard({ project }: WorkCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group cursor-pointer"
    >
      <div className="glass rounded-2xl overflow-hidden flex flex-col h-full hover:glass-hover transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent dark:from-slate-950/40 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col space-y-4">
          {/* Title & Role */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-secondary font-medium">{project.role}</p>
          </div>

          {/* Goal */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              Goal
            </p>
            <p className="text-sm text-muted-foreground">{project.goal}</p>
          </div>

          {/* Actions */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Actions
            </p>
            <div className="flex flex-wrap gap-2">
              {project.actions.map((action, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                >
                  {action}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="pt-4 border-t border-white/10 dark:border-slate-700/30">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              Outcome
            </p>
            <p className="text-sm text-foreground font-medium flex items-start gap-2">
              <ChevronRight className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
              {project.outcome}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
