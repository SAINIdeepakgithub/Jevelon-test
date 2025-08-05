import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { 
  Phone, 
  Mail, 
  Clock, 
  Zap, 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { supportService, SupportTicket } from "../utils/supportService";

export default function SupportPage() {
  const [formData, setFormData] = useState<SupportTicket>({
    name: "",
    email: "",
    priority: "medium",
    category: "other",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const supportPlans = [
    {
      name: "Basic Support",
      price: "₹5000/month",
      description: "Essential support for small projects",
      features: [
        "Email support",
        "48-hour response time",
        "Bug fixes",
        "Basic documentation",
        "All Basic Query Sollution"
      ],
      color: "blue",
      popular: false
    },
    {
      name: "Professional Support",
      price: "₹12000/month",
      description: "Comprehensive support for growing businesses",
      features: [
        "Priority email & phone support",
        "24-hour response time",
        "Bug fixes & updates",
        "Performance monitoring",
        "15 hours/month included",
        "Emergency hotline"
      ],
      color: "green",
      popular: true
    },
    {
      name: "Enterprise Support",
      price: "Custom",
      description: "Dedicated support for large organizations",
      features: [
        "24/7 dedicated support",
        "1-hour response time",
        "Proactive monitoring",
        "Custom SLA",
        "Unlimited hours",
        "On-site support available",
        "Dedicated account manager"
      ],
      color: "purple",
      popular: false
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri 9AM-6PM IST",
      responseTime: "Immediate",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed technical questions",
      availability: "24/7",
      responseTime: "< 24 hours",
      color: "purple"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const response = await supportService.submitSupportTicket(formData);
      
      if (response.success) {
        setSubmitMessage({
          type: 'success',
          message: `Support ticket submitted successfully! Ticket ID: ${response.ticket_id}. We'll get back to you soon.`
        });
        setFormData({
          name: "",
          email: "",
          priority: "medium",
          category: "other",
          subject: "",
          message: ""
        });
      } else {
        setSubmitMessage({
          type: 'error',
          message: response.error || 'Failed to submit support ticket. Please try again.'
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        message: 'An error occurred while submitting the ticket. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; button: string }> = {
      blue: { bg: "bg-blue-50/10", border: "border-blue-500/20", text: "text-blue-400", button: "bg-blue-600 hover:bg-blue-500" },
      green: { bg: "bg-green-50/10", border: "border-green-500/20", text: "text-green-400", button: "bg-green-600 hover:bg-green-500" },
      purple: { bg: "bg-purple-50/10", border: "border-purple-500/20", text: "text-purple-400", button: "bg-purple-600 hover:bg-purple-500" }
    };
    return colors[color];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="pt-16 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-blue-400">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert help when you need it. Our technical support team is here to ensure your systems run smoothly.
          </p>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {supportChannels.map((channel) => {
            const IconComponent = channel.icon;
            const colors = getColorClasses(channel.color);
            
            return (
              <motion.div key={channel.title} variants={itemVariants}>
                <Card className={`h-full ${colors.bg} ${colors.border} hover:border-opacity-40 transition-all duration-300 group cursor-pointer`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-background/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <CardTitle className="mb-2">{channel.title}</CardTitle>
                    <p className="text-muted-foreground">{channel.description}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Zap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Response: {channel.responseTime}</span>
                    </div>
                    {channel.title === "Phone Support" ? (
                      <a href="tel:+911413143238">
                        <Button className={`w-full mt-4 ${colors.button} text-white`}>
                          Call: +91 1413143238
                        </Button>
                      </a>
                    ) : (
                      <a href="mailto:hello@jevelon.com">
                        <Button className={`w-full mt-4 ${colors.button} text-white`}>
                          Email: hello@jevelon.com
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Support Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Support Plans
            </h2>
            <p className="text-muted-foreground">
              Choose the level of support that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => {
              const colors = getColorClasses(plan.color);
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <Card className={`h-full ${plan.popular ? 'ring-2 ring-green-500/20 ' : ''} ${colors.bg} ${colors.border}`}>
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold text-foreground mb-2">{plan.price}</div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 flex-shrink-0`} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.price === "Custom" ? (
                        <a href="mailto:support@jevelon.com">
                          <Button className={`w-full ${colors.button} text-white`}>
                            Contact Sales
                          </Button>
                        </a>
                      ) : (
                        <a href="mailto:support@jevelon.com">
                          <Button className={`w-full ${colors.button} text-white`}>
                            Get Started
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Support Ticket Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-center">Submit a Support Ticket</CardTitle>
              <p className="text-center text-muted-foreground">
                Describe your issue and we'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-foreground font-medium">Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your Name"
                      className="text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground font-medium">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="text-black"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-foreground font-medium">Priority</label>
                    <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                      <SelectTrigger className="text-black">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Low
                          </div>
                        </SelectItem>
                        <SelectItem value="medium">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            Medium
                          </div>
                        </SelectItem>
                        <SelectItem value="high">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                            High
                          </div>
                        </SelectItem>
                        <SelectItem value="critical">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                            Critical
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground font-medium">Category</label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="text-black">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="performance">Performance Issue</SelectItem>
                        <SelectItem value="security">Security Concern</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-foreground font-medium">Subject *</label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Brief description of the issue"
                    className="text-black"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-foreground font-medium">Description *</label>
                  <Textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and any relevant context..."
                    className="text-black"
                  />
                </div>

                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-100 border border-green-400 text-green-700' 
                      : 'bg-red-100 border border-red-400 text-red-700'
                  }`}>
                    {submitMessage.message}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Ticket
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>


      </div>
    </div>
  );
}