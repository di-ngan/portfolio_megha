"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { LineWavesBackground } from "@/components/effects/LineWavesBackground";
import FlowingMenu from "@/components/FlowingMenu";

const flowingSkills = [
  {
    link: "#",
    text: "Brand Communication",
    image: "https://picsum.photos/seed/brand/600/400",
  },
  {
    link: "#",
    text: "Campaign Strategy",
    image: "https://picsum.photos/seed/campaign/600/400",
  },
  {
    link: "#",
    text: "Content Marketing",
    image: "https://picsum.photos/seed/content/600/400",
  },
  {
    link: "#",
    text: "Social Media",
    image: "https://picsum.photos/seed/social/600/400",
  },
  {
    link: "#",
    text: "Digital Marketing",
    image: "https://picsum.photos/seed/digital/600/400",
  },
];

export function Skills() {
  const { skills } = portfolio;
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="relative py-10 sm:py-14">
      <LineWavesBackground section="skills" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 dark:from-primary/10 dark:via-transparent dark:to-background/80 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">{skills.title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Primary skills — FlowingMenu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-white/10"
          style={{ height: "42vh", minHeight: "280px", maxHeight: "420px" }}
        >
          <FlowingMenu
            items={flowingSkills}
            speed={18}
            textColor="#ffffff"
            bgColor="#120F17"
            marqueeBgColor="#DD78A1"
            marqueeTextColor="#120F17"
            borderColor="rgba(255,255,255,0.1)"
          />
        </motion.div>

        {/* Additional skills — expandable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5"
        >
          <center>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>Additional Skills & Tools</span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>
          </center>

          <AnimatePresence>
            {expanded && (
              <motion.div
                key="extra-skills"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                  {skills.secondary.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="rounded-lg p-3 bg-white/5 dark:bg-slate-950/30 border border-white/10 dark:border-slate-700/30 text-center hover:bg-white/10 dark:hover:bg-slate-950/50 transition-colors cursor-pointer"
                    >
                      <p className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        {skill}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
