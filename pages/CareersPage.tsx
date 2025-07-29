import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Heart, Trophy, Coffee, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision insurance" },
    { icon: Clock, title: "Flexible Hours", description: "Work-life balance with flexible scheduling" },
    { icon: Coffee, title: "Remote Work", description: "Hybrid and remote work opportunities" },
    { icon: Trophy, title: "Growth", description: "Professional development and learning budget" },
    { icon: Users, title: "Team Culture", description: "Collaborative and inclusive work environment" },
    { icon: Zap, title: "Innovation", description: "Work with cutting-edge technologies" }
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Join our core development team building next-generation web applications.",
      requirements: ["5+ years React/Node.js", "TypeScript", "Cloud platforms", "Agile experience"],
      posted: "2 days ago"
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$100k - $140k",
      description: "Create amazing mobile experiences for iOS and Android platforms.",
      requirements: ["React Native", "Native development", "Mobile UI/UX", "App Store deployment"],
      posted: "1 week ago"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $150k",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Infrastructure as Code"],
      posted: "3 days ago"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Design beautiful and intuitive user experiences for our clients.",
      requirements: ["Figma/Sketch", "Design systems", "User research", "Prototyping"],
      posted: "5 days ago"
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description: "Lead client projects from conception to delivery.",
      requirements: ["PMP/Agile certification", "Client management", "Technical background", "5+ years PM experience"],
      posted: "1 week ago"
    }
  ];

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
            Join Our <span className="text-blue-400">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                          <Badge variant="outline" className="text-blue-400 border-blue-400">
                            {job.department}
                          </Badge>
                          <Badge variant="outline" className="text-green-400 border-green-400">
                            {job.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Posted {job.posted}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req) => (
                            <Badge key={req} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-950/20 to-purple-950/20 rounded-2xl border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't See the Right Role?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and tell us how you'd like to contribute to our team.
          </p>
          <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-background">
            Send Us Your Resume
          </Button>
        </motion.div>
      </div>
    </div>
  );
}