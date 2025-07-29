import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Smartphone, Globe, Database, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "Beautiful, responsive frontend designs for portfolios, landing pages, and business websites",
      icon: Code,
      color: "blue",
      path: "/services/frontend-development",
      features: [
        "Portfolio Websites",
        "Landing Pages",
        "Business Frontends",
        "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions and API development for scalable applications",
      icon: Database,
      color: "green",
      path: "/services/backend-development",
      features: [
        "API Development",
        "Database Design",
        "Server Architecture",
        "Security Implementation"
      ]
    },
    {
      title: "Web Development",
      description: "Complete web applications with full-stack development and modern technologies",
      icon: Globe,
      color: "purple",
      path: "/services/web-development",
      features: [
        "Full-Stack Solutions",
        "E-commerce Platforms",
        "CMS Development",
        "Web Applications"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms",
      icon: Smartphone,
      color: "orange",
      path: "/services/mobile-app-development",
      features: [
        "Native iOS & Android",
        "Cross-platform Apps",
        "UI/UX Design",
        "App Store Deployment"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      icon: TrendingUp,
      color: "pink",
      path: "/services/digital-marketing",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & Reporting"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string; border: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-400", icon: "text-blue-400", border: "border-blue-500/20" },
      green: { bg: "bg-green-500/10", text: "text-green-400", icon: "text-green-400", border: "border-green-500/20" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-400", icon: "text-purple-400", border: "border-purple-500/20" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-400", icon: "text-orange-400", border: "border-orange-500/20" },
      pink: { bg: "bg-pink-500/10", text: "text-pink-400", icon: "text-pink-400", border: "border-pink-500/20" }
    };
    return colors[color];
  };

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

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs, from frontend design to full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`group hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:${colors.border} h-full`}>
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${colors.border}`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                    </motion.div>
                    <CardTitle className="mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                        >
                          <CheckCircle className={`h-4 w-4 ${colors.text} mr-2 flex-shrink-0`} />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link to={service.path}>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`${colors.text} hover:${colors.bg} group w-full`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}