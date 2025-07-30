import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, TrendingUp, Search, Share2, BarChart3, ArrowRight, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import TechnologyLogo from "../components/ui/TechnologyLogo";

export default function DigitalMarketingPage() {
  const features = [
    {
      title: "SEO Optimization",
      description: "Search engine optimization to improve your website's visibility and rankings",
      icon: Search,
      color: "text-pink-400"
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to engage and grow your audience",
      icon: Share2,
      color: "text-blue-400"
    },
    {
      title: "Content Strategy",
      description: "Compelling content creation and distribution strategies",
      icon: Target,
      color: "text-green-400"
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights and comprehensive performance reporting",
      icon: BarChart3,
      color: "text-purple-400"
    }
  ];

  const services = [
    "Search Engine Optimization (SEO)", "Pay-Per-Click (PPC)", "Social Media Management",
    "Content Marketing", "Email Marketing", "Influencer Marketing",
    "Google Ads", "Facebook Ads", "LinkedIn Ads", "Analytics & Tracking",
    "Conversion Rate Optimization", "Local SEO"
  ];

  const benefits = [
    "Increased online visibility and brand awareness",
    "Higher search engine rankings and organic traffic",
    "Engaged social media following and community",
    "Data-driven marketing decisions and optimization",
    "Improved conversion rates and ROI",
    "Comprehensive reporting and performance tracking"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Digital"
        subtitle="Strategic digital marketing solutions that grow your business"
        highlight="Marketing"
      />

      {/* Hero Section */}
      <section className="pt-32 py-20 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Digital Marketing
                <span className="text-pink-400 block">That Converts</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We develop data-driven <Link to="/services/digital-marketing" className="text-pink-400 hover:text-pink-300 underline">digital marketing strategies</Link> that increase your online visibility, engage your audience, and drive measurable business results. Our comprehensive approach ensures your marketing efforts deliver ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact">
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
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
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
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
              What We <span className="text-pink-400">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing services to grow your online presence
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
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-pink-500/10 flex items-center justify-center`}>
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

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We <span className="text-pink-400">Use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing tools and platforms to grow your business
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Mailchimp" logoPath="/assets/logos/mailchimp-freddie-icon.svg" />
              </div>
              <h3 className="font-semibold">Mailchimp</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="HubSpot" logoPath="/assets/logos/hubspot-1.svg" />
              </div>
              <h3 className="font-semibold">HubSpot</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Canva" logoPath="/assets/logos/canva.svg" />
              </div>
              <h3 className="font-semibold">Canva</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Apple App Store" logoPath="/assets/logos/apple-app-store.svg" />
              </div>
              <h3 className="font-semibold">Apple App Store</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Google Play" logoPath="/assets/logos/google-play-5.svg" />
              </div>
              <h3 className="font-semibold">Google Play</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Facebook" logoPath="/assets/logos/facebook.svg" />
              </div>
              <h3 className="font-semibold">Facebook</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                <TechnologyLogo name="Instagram" logoPath="/assets/logos/instagram.svg" />
              </div>
              <h3 className="font-semibold">Instagram</h3>
            </div>
            {/* Add more logos as you upload them, or use fallback icons for missing ones */}
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
                Why Choose Our <span className="text-pink-400">Digital Marketing</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our digital marketing approach is data-driven, results-focused, and designed to deliver measurable ROI for your business.
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
                    <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
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
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Data-Driven Results</h3>
                    <p className="text-muted-foreground">Measurable outcomes and performance tracking</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Audience Engagement</h3>
                    <p className="text-muted-foreground">Build meaningful connections with your audience</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">ROI Focused</h3>
                    <p className="text-muted-foreground">Strategies designed to maximize your return on investment</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your digital marketing needs and create a strategy that drives results for your business.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
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