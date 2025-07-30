import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, Database, Server, Shield, Zap, ArrowRight, Code, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import TechnologyLogo from "../components/ui/TechnologyLogo";

export default function BackendDevelopmentPage() {
  const features = [
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs built with modern frameworks and best practices",
      icon: Code,
      color: "text-green-400"
    },
    {
      title: "Database Design",
      description: "Optimized database architecture for performance and scalability",
      icon: Database,
      color: "text-blue-400"
    },
    {
      title: "Server Architecture",
      description: "Scalable server infrastructure designed for high availability",
      icon: Server,
      color: "text-purple-400"
    },
    {
      title: "Security Implementation",
      description: "Enterprise-grade security measures to protect your data and users",
      icon: Shield,
      color: "text-red-400"
    }
  ];

  const technologies = [
    "Node.js", "Python", "Java", "C#", "PHP", "Go",
    "Express.js", "Django", "Spring Boot", ".NET", "Laravel", "Gin",
    "PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Docker"
  ];

  const benefits = [
    "Scalable and maintainable server-side code",
    "High-performance API endpoints",
    "Secure authentication and authorization",
    "Database optimization and caching",
    "Microservices architecture support",
    "Comprehensive testing and documentation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Backend"
        subtitle="Building robust, scalable server-side solutions that power your applications"
        highlight="Development"
      />

      {/* Hero Section */}
      <section className="pt-32 py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Backend Development
                <span className="text-green-400 block">That Scales</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We specialize in building robust, scalable <Link to="/services/backend-development" className="text-green-400 hover:text-green-300 underline">backend systems</Link> that power modern applications. Our server-side solutions are designed for performance, security, and maintainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="outline" size="lg">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded"></div>
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="text-green-400">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive backend development services to power your applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We <span className="text-green-400">Use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern backend technologies and frameworks for building robust applications
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Node.js" logoPath="/assets/logos/node.js.svg" />
              </div>
              <h3 className="font-semibold">Node.js</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Python" logoPath="/assets/logos/python.svg" />
              </div>
              <h3 className="font-semibold">Python</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Java" logoPath="/assets/logos/java.svg" />
              </div>
              <h3 className="font-semibold">Java</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Express.js" logoPath="/assets/logos/express.js.svg" />
              </div>
              <h3 className="font-semibold">Express.js</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Django" logoPath="/assets/logos/django.svg" />
              </div>
              <h3 className="font-semibold">Django</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="PostgreSQL" logoPath="/assets/logos/postgress.svg" />
              </div>
              <h3 className="font-semibold">PostgreSQL</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="MongoDB" logoPath="/assets/logos/mongodb.svg" />
              </div>
              <h3 className="font-semibold">MongoDB</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Redis" logoPath="/assets/logos/redis.svg" />
              </div>
              <h3 className="font-semibold">Redis</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our <span className="text-green-400">Backend Development</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our backend development approach focuses on creating systems that are not only powerful but also maintainable, secure, and ready for scale.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">High Performance</h3>
                    <p className="text-muted-foreground">Optimized code and database queries for speed</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Lock className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Security First</h3>
                    <p className="text-muted-foreground">Enterprise-grade security and data protection</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <Server className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Scalable Architecture</h3>
                    <p className="text-muted-foreground">Built to handle growth and increased load</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Backend?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your backend requirements and create a robust foundation for your application.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}