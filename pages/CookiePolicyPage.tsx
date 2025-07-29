import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "What Are Cookies",
      content: "Cookies are small text files that are stored on your computer or mobile device when you visit our website. They allow us to recognize your device and store some information about your preferences or past actions."
    },
    {
      title: "Types of Cookies We Use",
      content: "We use essential cookies for website functionality, analytics cookies to understand how you use our site, and preference cookies to remember your settings. We do not use advertising cookies."
    },
    {
      title: "Essential Cookies",
      content: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies."
    },
    {
      title: "Analytics Cookies",
      content: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and user experience."
    },
    {
      title: "Managing Cookies",
      content: "You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible."
    },
    {
      title: "Third-Party Cookies",
      content: "We may use third-party services like Google Analytics that place cookies on your device. These services have their own privacy policies and cookie practices that govern their use."
    }
  ];

  return (
    <div className="pt-16 pb-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cookie <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 24, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                This Cookie Policy explains how Jevelon Technologies uses cookies and similar technologies when you visit our website. It explains what these technologies are and why we use them.
              </p>
            </CardContent>
          </Card>

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-blue-400">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}