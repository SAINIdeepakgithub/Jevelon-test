import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Palette, Smartphone, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/shared/PageHeader";
import TechnologyLogo from "@/components/ui/TechnologyLogo";
import { Link } from "react-router-dom";

export default function FrontendDevelopmentPage() {
  const features = [
    {
      title: "Portfolio Websites",
      description: "Professional portfolio websites that showcase your work and skills effectively",
      icon: Palette,
      color: "text-blue-400"
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive sales",
      icon: Zap,
      color: "text-green-400"
    },
    {
      title: "Business Frontends",
      description: "Custom business websites that reflect your brand and engage customers",
      icon: Code,
      color: "text-purple-400"
    },
    {
      title: "Responsive Design",
      description: "Mobile-first designs that work perfectly on all devices and screen sizes",
      icon: Smartphone,
      color: "text-orange-400"
    }
  ];

  const benefits = [
    "Fast loading times and optimized performance",
    "SEO-friendly code structure",
    "Cross-browser compatibility",
    "Accessibility compliance (WCAG)",
    "Modern UI/UX design principles",
    "Scalable and maintainable code"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Frontend"
        subtitle="Creating stunning, responsive user interfaces that captivate and convert"
        highlight="Development"
      />

      {/* Hero Section */}
      <section className="pt-32 py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frontend Development
                <span className="text-blue-400 block">That Converts</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We specialize in creating beautiful, responsive <Link to="/services/frontend-development" className="text-blue-400 hover:text-blue-300 underline">frontend experiences</Link> that engage your audience and drive business growth. Our designs are not just visually appealing but also optimized for performance and conversion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
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
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
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
              What We <span className="text-blue-400">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive frontend development services tailored to your specific needs
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
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center`}>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We <span className="text-blue-400">Use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern, cutting-edge technologies to build fast, scalable, and maintainable frontend applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo
                  name="React"
                  logoPath="/assets/logos/react.svg"
                  fallbackIcon={
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  }
                />
              </div>
              <h3 className="font-semibold">React</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo
                  name="Vue.js"
                  logoPath="/assets/logos/vuejs.svg"
                  fallbackIcon={
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  }
                />
              </div>
              <h3 className="font-semibold">Vue.js</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo
                  name="Angular"
                  logoPath="/assets/logos/angular.svg"
                  fallbackIcon={
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  }
                />
              </div>
              <h3 className="font-semibold">Angular</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo
                  name="TypeScript"
                  logoPath="/assets/logos/typescript.svg"
                  fallbackIcon={
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  }
                />
              </div>
              <h3 className="font-semibold">TypeScript</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo
                  name="Tailwind CSS"
                  logoPath="/assets/logos/tailwind-css.svg"
                  fallbackIcon={
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  }
                />
              </div>
              <h3 className="font-semibold">Tailwind CSS</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo
                  name="Sass"
                  logoPath="/assets/logos/saas.png"
                  fallbackIcon={
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  }
                />
              </div>
              <h3 className="font-semibold">Sass</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo
                  name="Next.js"
                  logoPath="/assets/logos/Next.js.svg"
                  fallbackIcon={
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  }
                />
              </div>
              <h3 className="font-semibold">Next.js</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo
                  name="Framer Motion"
                  logoPath="/assets/logos/framer motion.svg"
                  fallbackIcon={
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  }
                />
              </div>
              <h3 className="font-semibold">Framer Motion</h3>
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
                Why Choose Our <span className="text-blue-400">Frontend Development</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just build websites; we create digital experiences that drive results. Our frontend development approach focuses on performance, user experience, and business outcomes.
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
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Quality Assurance</h3>
                    <p className="text-muted-foreground">Rigorous testing across all devices and browsers</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Performance Optimized</h3>
                    <p className="text-muted-foreground">Lightning-fast loading times and smooth interactions</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mobile First</h3>
                    <p className="text-muted-foreground">Responsive design that works perfectly on all devices</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Perfect Frontend?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a stunning frontend that drives results for your business.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
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