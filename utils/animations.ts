export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

export const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string; button: string }> = {
    blue: { bg: "bg-blue-50/10", border: "border-blue-500/20", text: "text-blue-400", button: "bg-blue-600 hover:bg-blue-500" },
    green: { bg: "bg-green-50/10", border: "border-green-500/20", text: "text-green-400", button: "bg-green-600 hover:bg-green-500" },
    purple: { bg: "bg-purple-50/10", border: "border-purple-500/20", text: "text-purple-400", button: "bg-purple-600 hover:bg-purple-500" },
    orange: { bg: "bg-orange-50/10", border: "border-orange-500/20", text: "text-orange-400", button: "bg-orange-600 hover:bg-orange-500" }
  };
  return colors[color] || colors.blue;
};