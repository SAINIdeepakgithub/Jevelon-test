import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

export default function DisclaimerPage() {
  const sections = [
    {
      title: "General Information",
      content: "The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, Jevelon Technologies excludes all representations, warranties, and conditions relating to our website and the use of this website."
    },
    {
      title: "Professional Advice",
      content: "The content on our website is for general information purposes only and should not be relied upon as professional advice. You should seek appropriate professional advice before acting on any information contained on our website."
    },
    {
      title: "Accuracy of Information",
      content: "While we strive to ensure that the information on our website is accurate and up-to-date, we cannot guarantee its completeness or accuracy. Information may be changed or updated without notice."
    },
    {
      title: "Third-Party Content",
      content: "Our website may contain links to third-party websites or services. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services."
    },
    {
      title: "Service Availability",
      content: "We do not guarantee that our services will be available at all times or that they will be error-free. We reserve the right to suspend or discontinue services for maintenance or other reasons."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall Jevelon Technologies be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort."
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
            <span className="text-blue-400">Disclaimer</span>
          </h1>
          <p className="text-muted-foreground">
            Last updated: August 01, 2025
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
                This disclaimer governs your use of Jevelon Technologies website and services. By using our website, you accept this disclaimer in full.
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