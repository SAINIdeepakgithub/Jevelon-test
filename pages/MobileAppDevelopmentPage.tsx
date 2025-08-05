import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, Smartphone, Zap, Palette, Download, ArrowRight, Code, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import TechnologyLogo from "../components/ui/TechnologyLogo";

export default function MobileAppDevelopmentPage() {
  const features = [
    {
      title: "Native iOS & Android",
      description: "Platform-specific apps built with native technologies for optimal performance",
      icon: Smartphone,
      color: "text-orange-400"
    },
    {
      title: "Cross-platform Apps",
      description: "Single codebase apps that work seamlessly across multiple platforms",
      icon: Code,
      color: "text-blue-400"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces designed for mobile experiences",
      icon: Palette,
      color: "text-purple-400"
    },
    {
      title: "App Store Deployment",
      description: "Complete app store submission and deployment process management",
      icon: Download,
      color: "text-green-400"
    }
  ];



  const benefits = [
    "Native performance and user experience",
    "Cross-platform development efficiency",
    "App store optimization and ASO",
    "Real-time updates and maintenance",
    "Comprehensive testing and quality assurance",
    "Ongoing support and feature updates"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Mobile App"
        subtitle="Native and cross-platform mobile applications that users love"
        highlight="Development"
      />

      {/* Hero Section */}
      <section className="pt-32 py-20 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-950/20 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Mobile App Development
                <span className="text-orange-400 block">That Engages</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We build <Link to="/services/mobile-app-development" className="text-orange-400 hover:text-orange-300 underline">mobile applications</Link> that users love to use. Our apps combine beautiful design with powerful functionality, delivering experiences that keep users engaged and coming back for more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
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
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
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
              What We <span className="text-orange-400">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive mobile app development services for all platforms
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
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500/10 flex items-center justify-center`}>
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
              Technologies We <span className="text-orange-400">Use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern mobile development technologies and frameworks for building powerful apps
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Vercel" logoPath="/assets/logos/vercel.svg" />
              </div>
              <h3 className="font-semibold">Vercel</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="React Native" logoPath="/assets/logos/expo-1.svg" />
              </div>
              <h3 className="font-semibold">React Native</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="AWS Mobile" logoPath="/assets/logos/amazon-web-services-2.svg" />
              </div>
              <h3 className="font-semibold">AWS Mobile</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Flutter" logoPath="/assets/logos/flutter.svg" />
              </div>
              <h3 className="font-semibold">Flutter</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Swift" logoPath="/assets/logos/swift-15.svg" />
              </div>
              <h3 className="font-semibold">Swift</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Kotlin" logoPath="/assets/logos/kotlin-1.svg" />
              </div>
              <h3 className="font-semibold">Kotlin</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Firebase" logoPath="/assets/logos/firebase-1.svg" />
              </div>
              <h3 className="font-semibold">Firebase</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Apple App Store" logoPath="/assets/logos/apple-app-store.svg" />
              </div>
              <h3 className="font-semibold">App Store</h3>
            </div>
            {/* Add more logos as needed, or use fallback icons for missing ones */}
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
                Why Choose Our <span className="text-orange-400">Mobile App Development</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our mobile app development approach focuses on creating apps that not only look great but also provide exceptional user experiences and drive business results.
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
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
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
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Native Performance</h3>
                    <p className="text-muted-foreground">Optimized for each platform's capabilities</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">User-Centric Design</h3>
                    <p className="text-muted-foreground">Intuitive interfaces that users love</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Download className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">App Store Ready</h3>
                    <p className="text-muted-foreground">Complete deployment and optimization</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your mobile app requirements and create an engaging application that drives user engagement and business growth.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
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