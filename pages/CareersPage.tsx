import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { MapPin, Clock, Users, Heart, Trophy, Coffee, Zap, Search, Filter, Upload, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [resumeFormData, setResumeFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resumeFile: null as File | null
  });

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
      title: "Full-Stack Developer",
      department: "Engineering",
      location: "Jaipur / Remote",
      type: "Full-time",
      description: "Join our core development team building next-generation web applications using modern technologies like React, Node.js, Django, Python, and cloud platforms.",
      requirements: ["React/Node.js", "Django/Python", "TypeScript", "Cloud platforms (AWS/Azure)", "Database design", "API development", "Agile experience"],
      posted: "2 days ago",
      experience: "3+ years"
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Jaipur / Remote",
      type: "Full-time",
      description: "Create beautiful and responsive user interfaces that provide exceptional user experiences across all devices and platforms.",
      requirements: ["React/Vue.js", "TypeScript", "CSS/SCSS", "Responsive design", "Performance optimization", "UI/UX principles"],
      posted: "1 week ago",
      experience: "1-3 years"
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Jaipur / Remote",
      type: "Full-time",
      description: "Build robust and scalable backend systems that power our applications and handle complex business logic.",
      requirements: ["Node.js/Python", "Django", "Database design", "API development", "Microservices", "Security best practices"],
      posted: "3 days ago",
      experience: "1-3 years"
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Jaipur / Remote",
      type: "Full-time",
      description: "Develop native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      requirements: ["React Native/Flutter", "Native development", "Mobile UI/UX", "App Store deployment", "Performance optimization", "Mobile testing"],
      posted: "5 days ago",
      experience: "2-3 years"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Jaipur / Remote",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure, deployment pipelines, and ensure high availability of our systems.",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
      posted: "1 week ago",
      experience: "1-3 years"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Jaipur / Remote",
      type: "Full-time",
      description: "Design beautiful and intuitive user experiences that delight our users and drive business success.",
      requirements: ["Figma/Sketch", "Design systems", "User research", "Prototyping", "Design thinking", "Collaboration"],
      posted: "4 days ago",
      experience: "1-2 years"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Jaipur / Remote",
      type: "Full-time",
      description: "Develop and execute digital marketing strategies to grow our brand presence and drive customer acquisition.",
      requirements: ["SEO/SEM", "Social media marketing", "Content marketing", "Analytics", "Campaign management", "Creative thinking"],
      posted: "6 days ago",
      experience: "1-2 years"
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Jaipur / Remote",
      type: "Full-time",
      description: "Lead client projects from conception to delivery, ensuring timely completion and client satisfaction.",
      requirements: ["PMP/Agile certification", "Client management", "Technical background", "Risk management", "Team leadership", "Communication"],
      posted: "1 week ago",
      experience: "2-3 years"
    }
  ];

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return openPositions.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === "All" || job.location.includes(selectedLocation);
      
      return matchesSearch && matchesDepartment && matchesLocation;
    });
  }, [searchTerm, selectedDepartment, selectedLocation]);

  const departments = ["All", "Engineering", "Design", "Marketing", "Infrastructure", "Operations"];
  const locations = ["All", "Jaipur", "Remote"];

  const handleResumeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resumeFormData.name || !resumeFormData.email || !resumeFormData.position) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission
      console.log("Resume submission:", { ...resumeFormData, appliedFor: selectedJob });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Thank you for your application! We'll review your resume and get back to you soon.");
      
      // Reset form and close modal
      setResumeFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
        resumeFile: null
      });
      setSelectedJob(null);
      setIsResumeModalOpen(false);
    } catch (error) {
      console.error("Error submitting resume:", error);
      alert("An error occurred while submitting your application. Please try again.");
    }
  };

  const handleApplyNow = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setResumeFormData(prev => ({ ...prev, position: jobTitle }));
    setIsResumeModalOpen(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setResumeFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFormData(prev => ({ ...prev, resumeFile: file }));
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
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 p-6 bg-card/30 rounded-lg border border-border/50">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-10 text-black"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="text-black">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="text-black">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {(searchTerm || selectedDepartment !== "All" || selectedLocation !== "All") && (
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredJobs.length} of {openPositions.length} positions
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDepartment("All");
                    setSelectedLocation("All");
                  }}
                  className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-background"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
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
                            <Users className="h-4 w-4 mr-1" />
                            {job.experience} experience
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
                        <Button 
                          className="bg-blue-600 hover:bg-blue-500 text-white"
                          onClick={() => handleApplyNow(job.title)}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground mb-4">
                  No positions found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDepartment("All");
                    setSelectedLocation("All");
                  }}
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-background"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
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
          
          <Dialog open={isResumeModalOpen} onOpenChange={setIsResumeModalOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-background">
                Send Us Your Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  {selectedJob ? `Apply for ${selectedJob}` : "Submit Your Application"}
                </DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleResumeSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="resume-name" className="block mb-2 font-medium">Full Name *</label>
                    <Input
                      id="resume-name"
                      type="text"
                      required
                      value={resumeFormData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="h-12 text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="resume-email" className="block mb-2 font-medium">Email *</label>
                    <Input
                      id="resume-email"
                      type="email"
                      required
                      value={resumeFormData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="h-12 text-black"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="resume-phone" className="block mb-2 font-medium">Phone Number</label>
                    <Input
                      id="resume-phone"
                      type="tel"
                      value={resumeFormData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 1234567890"
                      className="h-12 text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="resume-position" className="block mb-2 font-medium">Position of Interest *</label>
                    <Input
                      id="resume-position"
                      type="text"
                      required
                      value={resumeFormData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      placeholder="e.g., Frontend Developer"
                      className="h-12 text-black"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="resume-experience" className="block mb-2 font-medium">Years of Experience</label>
                  <Select 
                    value={resumeFormData.experience} 
                    onValueChange={(value) => handleInputChange("experience", value)}
                  >
                    <SelectTrigger className="h-12 text-black">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-8">5-8 years</SelectItem>
                      <SelectItem value="8+">8+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="resume-file" className="block mb-2 font-medium">Resume/CV *</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <input
                      id="resume-file"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <label htmlFor="resume-file" className="cursor-pointer">
                      <span className="text-blue-400 hover:text-blue-300">Click to upload</span> or drag and drop
                    </label>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC, or DOCX (max 5MB)
                    </p>
                    {resumeFormData.resumeFile && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {resumeFormData.resumeFile.name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="resume-message" className="block mb-2 font-medium">Cover Letter/Message</label>
                  <Textarea
                    id="resume-message"
                    rows={4}
                    value={resumeFormData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about yourself, your experience, and why you'd like to join our team..."
                    className="text-black"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsResumeModalOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white"
                    disabled={!resumeFormData.name || !resumeFormData.email || !resumeFormData.position}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
}