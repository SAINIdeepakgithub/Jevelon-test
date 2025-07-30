import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, MessageCircle, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqCategories } from "../data/faqData";
import { itemVariants } from "../utils/animations";
import PageHeader from "../components/shared/PageHeader";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-16 pb-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Find answers to common questions about our services, process, and policies."
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search FAQs..." 
              className="pl-10 bg-muted/30 border-muted-foreground/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </PageHeader>

        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div 
              key={category.category} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem 
                        key={questionIndex} 
                        value={`${categoryIndex}-${questionIndex}`}
                        className="border border-border/30 rounded-lg px-4 bg-background/30"
                      >
                        <AccordionTrigger className="text-left hover:text-blue-400 transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {searchTerm && filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground mb-4">
              No FAQs found matching your search.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm("")}
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-background"
            >
              Clear Search
            </Button>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-950/20 to-purple-950/20 border-blue-500/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a href="tel:+911413143238">
                  <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-background w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                </a>
                <a href="mailto:hello@jevelon.com">
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-background w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}