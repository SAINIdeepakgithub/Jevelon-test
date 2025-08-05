import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  source: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  variants?: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
}

export default function BlogCard({ post, variants }: BlogCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              {post.category}
            </Badge>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground mb-2">
            Source: {post.source}
          </div>
          <CardTitle className="text-lg group-hover:text-blue-400 transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground mb-4 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-blue-400 hover:text-blue-300 group"
              onClick={() => window.open(post.url, '_blank')}
            >
              Read More
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}