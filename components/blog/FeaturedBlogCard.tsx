import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export default function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <Card className="overflow-hidden bg-gradient-to-r from-blue-950/20 to-purple-950/20 border-blue-500/20">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-auto">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600 text-white">Featured</Badge>
          </div>
        </div>
        <CardContent className="p-8 flex flex-col justify-center">
          <Badge variant="outline" className="w-fit mb-4 text-blue-400 border-blue-400">
            {post.category}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {post.title}
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-500 text-white group">
              Read More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}