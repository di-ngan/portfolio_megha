'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, Layers, Palette, Briefcase, Trophy, FileText, Mail
} from 'lucide-react';
import Dock, { DockItemData } from '@/components/Dock';

const navItems = [
  { icon: <Home size={18} />, label: 'Home', href: '#home' },
  { icon: <User size={18} />, label: 'About', href: '#about' },
  { icon: <Layers size={18} />, label: 'Skills', href: '#skills' },
  { icon: <Palette size={18} />, label: 'Work', href: '#work' },
  { icon: <Briefcase size={18} />, label: 'Experience', href: '#experience' },
  { icon: <Trophy size={18} />, label: 'Achievements', href: '#achievements' },
  // { icon: <FileText size={18} />, label: 'Resume', href: '#resume' },
  { icon: <Mail size={18} />, label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dockItems: DockItemData[] = navItems.map(item => ({
    icon: item.icon,
    label: item.label,
    onClick: () => {
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
    }
  }));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            pointerEvents: 'none',
            overflow: 'visible',
            height: '90px',
          }}
        >
          <Dock
            items={dockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
