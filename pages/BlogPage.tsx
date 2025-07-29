import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts, categories } from "../data/blogData";
import { containerVariants, itemVariants } from "../utils/animations";
import PageHeader from "../components/shared/PageHeader";
import FeaturedBlogCard from "../components/blog/FeaturedBlogCard";
import BlogCard from "../components/blog/BlogCard";

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-16 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Tech"
          highlight="Insights"
          subtitle="Stay updated with the latest trends, insights, and best practices in software development and technology."
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-muted/30 border-muted-foreground/20"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </PageHeader>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <FeaturedBlogCard post={featuredPost} />
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-background">
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </div>
  );
}