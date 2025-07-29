import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using Jevelon Technologies services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Services Description",
      content: "Jevelon Technologies provides software development, web development, mobile app development, cloud services, and related technology consulting services. We reserve the right to modify or discontinue services at any time."
    },
    {
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
    },
    {
      title: "Intellectual Property",
      content: "All content, features, and functionality of our services are owned by Jevelon Technologies and are protected by copyright, trademark, and other intellectual property laws. Custom work developed for clients becomes the property of the client upon full payment."
    },
    {
      title: "Payment Terms",
      content: "Payment terms are specified in individual project agreements. Late payments may be subject to interest charges. We reserve the right to suspend services for non-payment."
    },
    {
      title: "Limitation of Liability",
      content: "Jevelon Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, incurred by you or any third party."
    },
    {
      title: "Termination",
      content: "Either party may terminate services with written notice. Upon termination, you remain liable for any outstanding payments, and we will provide final deliverables as agreed upon."
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
            Terms of <span className="text-blue-400">Service</span>
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
                These Terms of Service govern your use of Jevelon Technologies services. Please read these terms carefully before using our services.
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