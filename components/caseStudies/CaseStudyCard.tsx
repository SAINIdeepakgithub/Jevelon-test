import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  results: Array<{ metric: string; increase: string }>;
  technologies: string[];
  featured?: boolean;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  variants?: any;
}

export default function CaseStudyCard({ study, variants }: CaseStudyCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <Badge className="bg-black/50 text-white border-0">
              {study.category}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-blue-400 transition-colors">
            {study.title}
          </CardTitle>
          <p className="text-blue-400 font-medium">{study.client}</p>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground mb-4 flex-1">
            {study.description}
          </p>
          
          {/* Key Result */}
          <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <div className="text-center">
              <div className="text-lg font-bold text-green-400">
                {study.results[0].increase}
              </div>
              <div className="text-sm text-muted-foreground">
                {study.results[0].metric}
              </div>
            </div>
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {study.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {study.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{study.technologies.length - 3}
              </Badge>
            )}
          </div>
          
          <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 group w-fit">
            View Details
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}