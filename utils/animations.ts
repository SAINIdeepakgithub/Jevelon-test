import { prefersReducedMotion } from './performance';
import { easeOut } from 'framer-motion';

// Optimized animation variants with reduced motion support
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion() ? 0 : 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0.1 : 0.4,
      ease: easeOut
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: prefersReducedMotion() ? 0.1 : 0.3,
      ease: easeOut
    }
  }
};

export const scaleIn = {
  hidden: { 
    scale: prefersReducedMotion() ? 1 : 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: prefersReducedMotion() ? 0.1 : 0.3,
      ease: easeOut
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: prefersReducedMotion() ? 0 : 0.1,
      staggerChildren: prefersReducedMotion() ? 0 : 0.1
    }
  }
};

// Legacy exports for backward compatibility
export const containerVariants = staggerContainer;

export const itemVariants = {
  hidden: { y: prefersReducedMotion() ? 0 : 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: prefersReducedMotion() ? 0.1 : 0.4,
      ease: easeOut
    }
  }
};

export const slideInLeft = {
  hidden: { 
    x: prefersReducedMotion() ? 0 : -50, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: prefersReducedMotion() ? 0.1 : 0.4,
      ease: easeOut
    }
  }
};

export const slideInRight = {
  hidden: { 
    x: prefersReducedMotion() ? 0 : 50, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: prefersReducedMotion() ? 0.1 : 0.4,
      ease: easeOut
    }
  }
};

// Hover animations (disabled for reduced motion)
export const hoverScale = prefersReducedMotion() 
  ? {} 
  : { scale: 1.02 };

export const hoverLift = prefersReducedMotion() 
  ? {} 
  : { y: -2 };

export const hoverRotate = prefersReducedMotion() 
  ? {} 
  : { rotate: 5 };

export const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    teal: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  };
  return colorMap[color] || colorMap.blue;
};