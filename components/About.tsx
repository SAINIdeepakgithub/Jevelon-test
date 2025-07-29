import { Card, CardContent } from "./ui/card";
import { Users, Target, Lightbulb, Award, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "500+", icon: Award },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Years Experience", value: "8+", icon: Target },
    { label: "Team Members", value: "25+", icon: Lightbulb }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
      icon: Rocket
    },
    {
      title: "Quality",
      description: "Every project is crafted with attention to detail and best practices.",
      icon: Award
    },
    {
      title: "Partnership",
      description: "We work closely with clients to understand their unique needs.",
      icon: Users
    },
    {
      title: "Security",
      description: "We prioritize the security and reliability of every solution we build.",
      icon: Shield
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="about" className="py-20 bg-muted/10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-blue-400">Jevelon Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to 
            transforming businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-300">
                  <CardContent className="pt-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      className="flex items-center justify-center mb-2"
                    >
                      <IconComponent className="h-8 w-8 text-blue-400 mr-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center group"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="h-8 w-8 text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-blue-950/20 to-purple-950/20 border-blue-500/20 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <motion.h3 
                className="text-2xl font-bold text-blue-400 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Our Mission
              </motion.h3>
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                To empower businesses with innovative technology solutions that drive growth, 
                improve efficiency, and create lasting value. We believe in building long-term 
                partnerships with our clients and delivering excellence in every project.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}