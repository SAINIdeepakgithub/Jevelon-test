import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  highlight?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, highlight, children }: PageHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 pt-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title} {highlight && <span className="text-blue-400">{highlight}</span>}
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {subtitle}
      </p>
      {children && <div className="mt-8">{children}</div>}
    </motion.div>
  );
}