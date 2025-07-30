import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { caseStudies, caseStudyStats } from "../data/caseStudiesData";
import { containerVariants, itemVariants } from "../utils/animations";
import PageHeader from "../components/shared/PageHeader";
import CaseStudyCard from "../components/caseStudies/CaseStudyCard";
import { Link } from "react-router-dom";

const iconMap = {
  Award,
  Users,
  TrendingUp
};

export default function CaseStudiesPage() {
  const featuredStudy = caseStudies.find(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="pt-16 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Success"
          highlight="Stories"
          subtitle="Discover how we've helped businesses transform their operations and achieve remarkable growth through innovative technology solutions."
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {caseStudyStats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent className="h-8 w-8 text-blue-400 mr-2" />
                    <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </PageHeader>

        {/* Featured Case Study */}
        {featuredStudy && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <Card className="overflow-hidden bg-gradient-to-r from-blue-950/20 to-purple-950/20 border-blue-500/20">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={featuredStudy.image}
                    alt={featuredStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-blue-400 border-blue-400">
                      {featuredStudy.category}
                    </Badge>
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      {featuredStudy.industry}
                    </Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {featuredStudy.title}
                  </h2>
                  <p className="text-blue-400 font-medium mb-4">{featuredStudy.client}</p>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredStudy.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {featuredStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl font-bold text-green-400">{result.increase}</div>
                        <div className="text-sm text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} variants={itemVariants} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-950/20 to-purple-950/20 rounded-2xl border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}