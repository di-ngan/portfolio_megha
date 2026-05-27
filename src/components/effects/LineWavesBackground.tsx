'use client';

import { ReactNode } from 'react';
import LineWaves from './LineWaves';

interface LineWavesBackgroundProps {
  section: 'home' | 'about' | 'skills' | 'work' | 'experience' | 'achievements' | 'resume' | 'contact';
  children?: ReactNode;
}

const SECTION_CONFIGS: Record<string, any> = {
  home: {
    speed: 0.25,
    innerLineCount: 32,
    outerLineCount: 36,
    warpIntensity: 1.2,
    rotation: -45,
    edgeFadeWidth: 0.1,
    colorCycleSpeed: 0.8,
    brightness: 0.15,
    color1: '#d6a4b4',
    color2: '#cd939d',
    color3: '#e8c5d1',
    enableMouseInteraction: true,
    mouseInfluence: 1.8,
  },
  about: {
    speed: 0.2,
    innerLineCount: 28,
    outerLineCount: 32,
    warpIntensity: 0.9,
    rotation: 30,
    edgeFadeWidth: 0.15,
    colorCycleSpeed: 0.6,
    brightness: 0.1,
    color1: '#e8c5d1',
    color2: '#d6a4b4',
    color3: '#c89aa3',
    enableMouseInteraction: true,
    mouseInfluence: 1.5,
  },
  skills: {
    speed: 0.3,
    innerLineCount: 36,
    outerLineCount: 40,
    warpIntensity: 1.3,
    rotation: -60,
    edgeFadeWidth: 0.08,
    colorCycleSpeed: 1.0,
    brightness: 0.12,
    color1: '#cd939d',
    color2: '#d6a4b4',
    color3: '#e8c5d1',
    enableMouseInteraction: true,
    mouseInfluence: 1.6,
  },
  work: {
    speed: 0.22,
    innerLineCount: 30,
    outerLineCount: 34,
    warpIntensity: 1.1,
    rotation: 15,
    edgeFadeWidth: 0.12,
    colorCycleSpeed: 0.7,
    brightness: 0.11,
    color1: '#d6a4b4',
    color2: '#e8c5d1',
    color3: '#cd939d',
    enableMouseInteraction: true,
    mouseInfluence: 1.7,
  },
  experience: {
    speed: 0.26,
    innerLineCount: 34,
    outerLineCount: 38,
    warpIntensity: 1.15,
    rotation: -30,
    edgeFadeWidth: 0.1,
    colorCycleSpeed: 0.85,
    brightness: 0.13,
    color1: '#e8c5d1',
    color2: '#d6a4b4',
    color3: '#cd939d',
    enableMouseInteraction: true,
    mouseInfluence: 1.6,
  },
  achievements: {
    speed: 0.28,
    innerLineCount: 32,
    outerLineCount: 36,
    warpIntensity: 1.2,
    rotation: 45,
    edgeFadeWidth: 0.09,
    colorCycleSpeed: 0.9,
    brightness: 0.14,
    color1: '#cd939d',
    color2: '#e8c5d1',
    color3: '#d6a4b4',
    enableMouseInteraction: true,
    mouseInfluence: 1.8,
  },
  resume: {
    speed: 0.24,
    innerLineCount: 30,
    outerLineCount: 35,
    warpIntensity: 1.0,
    rotation: -15,
    edgeFadeWidth: 0.11,
    colorCycleSpeed: 0.75,
    brightness: 0.12,
    color1: '#d6a4b4',
    color2: '#cd939d',
    color3: '#e8c5d1',
    enableMouseInteraction: true,
    mouseInfluence: 1.5,
  },
  contact: {
    speed: 0.27,
    innerLineCount: 33,
    outerLineCount: 37,
    warpIntensity: 1.25,
    rotation: 60,
    edgeFadeWidth: 0.1,
    colorCycleSpeed: 0.88,
    brightness: 0.15,
    color1: '#e8c5d1',
    color2: '#cd939d',
    color3: '#d6a4b4',
    enableMouseInteraction: true,
    mouseInfluence: 1.7,
  },
};

export function LineWavesBackground({ section }: LineWavesBackgroundProps) {
  const config = SECTION_CONFIGS[section];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <LineWaves
        speed={config.speed}
        innerLineCount={config.innerLineCount}
        outerLineCount={config.outerLineCount}
        warpIntensity={config.warpIntensity}
        rotation={config.rotation}
        edgeFadeWidth={config.edgeFadeWidth}
        colorCycleSpeed={config.colorCycleSpeed}
        brightness={config.brightness}
        color1={config.color1}
        color2={config.color2}
        color3={config.color3}
        enableMouseInteraction={config.enableMouseInteraction}
        mouseInfluence={config.mouseInfluence}
      />
    </div>
  );
}
