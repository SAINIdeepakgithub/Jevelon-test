import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech, driving innovation and growth.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e2?w=400&h=400&fit=crop&crop=face",
      skills: ["Leadership", "Strategy", "Business Development"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Technical architect specializing in scalable systems and cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["Cloud Architecture", "DevOps", "System Design"],
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative director passionate about user-centered design and digital experiences.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["UI/UX Design", "Design Systems", "User Research"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack engineer with expertise in modern web technologies and frameworks.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript"],
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      bio: "Agile expert ensuring smooth project delivery and client satisfaction.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      skills: ["Project Management", "Agile", "Client Relations"],
      social: { linkedin: "#" }
    },
    {
      name: "James Wilson",
      role: "Mobile Developer",
      bio: "iOS and Android specialist creating exceptional mobile experiences.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      skills: ["React Native", "iOS", "Android"],
      social: { linkedin: "#", github: "#" }
    }
  ];

  return (
    <div className="pt-16 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-blue-400">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The talented individuals behind Jevelon Technologies, passionate about creating innovative solutions and delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-muted-foreground hover:text-blue-400 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-muted-foreground hover:text-blue-400 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-muted-foreground hover:text-blue-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}