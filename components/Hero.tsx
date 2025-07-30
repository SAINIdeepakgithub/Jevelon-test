import { Button } from "./ui/button";
import { ArrowRight, Code, Smartphone, Database, Palette, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-blue-950/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-relaxed overflow-visible pb-8"
            >
              Empowering Your Business with 
              <motion.span 
                className="text-blue-400 inline-block align-baseline pb-2"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  background: "linear-gradient(-45deg, #3b82f6, #60a5fa, #93c5fd, #3b82f6)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  overflow: 'visible',
                  display: 'inline-block',
                  verticalAlign: 'baseline',
                  lineHeight: '1.2',
                  paddingBottom: '0.5rem'
                }}
              > Cutting-Edge Technology</motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              At Jevelon Technologies, we deliver innovative software solutions that drive growth. 
              From web development to cloud services, we're your trusted partner in digital transformation.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-background"
                  onClick={() => {
                    const servicesSection = document.querySelector('#services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Our Services
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Service Icons */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Palette, label: "Frontend Development", color: "blue", path: "/services/frontend-development" },
              { icon: Database, label: "Backend Development", color: "green", path: "/services/backend-development" },
              { icon: Code, label: "Web Development", color: "purple", path: "/services/web-development" },
              { icon: Smartphone, label: "Mobile App Development", color: "orange", path: "/services/mobile-app-development" },
              { icon: Megaphone, label: "Digital Marketing", color: "pink", path: "/services/digital-marketing" }
            ].map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.label} to={service.path}>
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="flex flex-col items-center space-y-2 group cursor-pointer"
                  >
                    <div className={`p-3 bg-${service.color}-500/20 rounded-full group-hover:bg-${service.color}-500/30 transition-colors backdrop-blur-sm border border-${service.color}-500/30`}>
                      <IconComponent className={`h-8 w-8 text-${service.color}-400`} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{service.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}