import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, Globe, ShoppingCart, Database, Zap, ArrowRight, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import TechnologyLogo from "../components/ui/TechnologyLogo";

export default function WebDevelopmentPage() {
  const features = [
    {
      title: "Full-Stack Solutions",
      description: "Complete web applications with frontend and backend development",
      icon: Code,
      color: "text-purple-400"
    },
    {
      title: "E-commerce Platforms",
      description: "Custom online stores with payment processing and inventory management",
      icon: ShoppingCart,
      color: "text-green-400"
    },
    {
      title: "CMS Development",
      description: "Content management systems for easy website updates and maintenance",
      icon: Database,
      color: "text-blue-400"
    },
    {
      title: "Web Applications",
      description: "Custom web applications tailored to your business needs",
      icon: Globe,
      color: "text-orange-400"
    }
  ];



  const benefits = [
    "End-to-end web development solutions",
    "Scalable and maintainable codebase",
    "Modern UI/UX design principles",
    "Performance optimization and SEO",
    "Security best practices implementation",
    "Ongoing support and maintenance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Web"
        subtitle="Complete web solutions from concept to deployment"
        highlight="Development"
      />

      {/* Hero Section */}
      <section className="pt-32 py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Web Development
                <span className="text-purple-400 block">That Works</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We create complete web solutions that combine beautiful design with powerful functionality. Our <Link to="/services/frontend-development" className="text-purple-400 hover:text-purple-300 underline">frontend</Link> and <Link to="/services/backend-development" className="text-purple-400 hover:text-purple-300 underline">backend</Link> development approach ensures your web application is built to perform and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
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
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white">
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
                    <div className="h-4 bg-white/20 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="text-purple-400">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development services to bring your ideas to life
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
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center`}>
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
              Technologies We <span className="text-purple-400">Use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern web technologies and frameworks for building powerful applications
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="React" logoPath="/assets/logos/react.svg" />
              </div>
              <h3 className="font-semibold">React</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Node.js" logoPath="/assets/logos/node.js.svg" />
              </div>
              <h3 className="font-semibold">Node.js</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Next.js" logoPath="/assets/logos/Next.js.svg" />
              </div>
              <h3 className="font-semibold">Next.js</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="TypeScript" logoPath="/assets/logos/typescript.svg" />
              </div>
              <h3 className="font-semibold">TypeScript</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Tailwind CSS" logoPath="/assets/logos/tailwind-css.svg" />
              </div>
              <h3 className="font-semibold">Tailwind CSS</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="PostgreSQL" logoPath="/assets/logos/postgress.svg" />
              </div>
              <h3 className="font-semibold">PostgreSQL</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Vercel" logoPath="/assets/logos/vercel.svg" />
              </div>
              <h3 className="font-semibold">Vercel</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="AWS" logoPath="/assets/logos/amazon-web-services-2.svg" />
              </div>
              <h3 className="font-semibold">AWS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our <span className="text-purple-400">Web Development</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our web development approach focuses on creating solutions that are not only visually appealing but also functional, scalable, and optimized for success.
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
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
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
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Full-Stack Expertise</h3>
                    <p className="text-muted-foreground">Complete development from frontend to backend</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">User-Centric Design</h3>
                    <p className="text-muted-foreground">Intuitive interfaces that users love</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Scalable Solutions</h3>
                    <p className="text-muted-foreground">Built to grow with your business</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-600">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your web development needs and create a solution that drives results for your business.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
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