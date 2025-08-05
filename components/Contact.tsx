import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { DatePicker } from "./ui/date-picker";
import { Mail, Phone, MapPin, Clock, Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { ConsultationService, ConsultationRequest } from "../utils/consultationService";

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const [consultationData, setConsultationData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    preferredDate: undefined as Date | undefined,
    preferredTime: "",
    additionalNotes: ""
  });

  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConsultationSubmitting, setIsConsultationSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [consultationErrors, setConsultationErrors] = useState<FormErrors>({});

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^\+?\d{1,3}\s?\d{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.service.trim()) {
      errors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateConsultationForm = (): boolean => {
    const errors: FormErrors = {};

    if (!consultationData.name.trim()) {
      errors.name = "Name is required";
    } else if (consultationData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!consultationData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(consultationData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (consultationData.phone && !validatePhone(consultationData.phone)) {
      errors.phone = "Please enter a valid phone number with country code (e.g., +91 1234567890)";
    }

    if (!consultationData.projectType.trim()) {
      errors.projectType = "Please select a project type";
    }

    if (!consultationData.preferredDate) {
      errors.preferredDate = "Please select a preferred date";
    }

    if (!consultationData.preferredTime.trim()) {
      errors.preferredTime = "Please select a preferred time";
    }

    setConsultationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const apiUrl = (import.meta as { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/contact/submit/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you for your message! We'll get back to you soon.");
        // Reset form
        setFormData({ name: "", email: "", service: "", message: "" });
        setFormErrors({});
      } else {
        alert(`Error: ${result.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateConsultationForm()) {
      return;
    }

    setIsConsultationSubmitting(true);

    try {
      // Create consultation service instance
      const consultationService = new ConsultationService();
      
      // Prepare consultation request
      const consultationRequest: ConsultationRequest = {
        name: consultationData.name,
        email: consultationData.email,
        phone: consultationData.phone,
        company: consultationData.company,
        projectType: consultationData.projectType,
        preferredDate: consultationData.preferredDate!,
        preferredTime: consultationData.preferredTime,
        additionalNotes: consultationData.additionalNotes
      };

      // Schedule consultation
      const result = await consultationService.scheduleConsultation(consultationRequest);

      if (result.success) {
        alert("Consultation scheduled successfully! We'll send you a confirmation email with meeting details.");
        
        // Reset form
        setConsultationData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          preferredDate: undefined,
          preferredTime: "",
          additionalNotes: ""
        });
        setConsultationErrors({});
        setIsConsultationModalOpen(false);
      } else {
        alert(`Error: ${result.error || 'Failed to schedule consultation'}`);
      }
    } catch (error) {
      console.error("Error scheduling consultation:", error);
      alert("An error occurred while scheduling your consultation. Please try again.");
    } finally {
      setIsConsultationSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleConsultationInputChange = (field: string, value: string | Date | undefined) => {
    setConsultationData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (consultationErrors[field as keyof FormErrors]) {
      setConsultationErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@jevelon.com",
      href: "mailto:hello@jevelon.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-141-13143238",
      href: "tel:+9114113143238"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Jaipur,Rajasthan,India",
      href: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri: 9AM-6PM IST",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation 
            and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name *</label>
                                          <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your Name"
                        className={`text-black ${formErrors.name ? 'border-red-500' : ''}`}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email *</label>
                                          <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className={`text-black ${formErrors.email ? 'border-red-500' : ''}`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2">Service Interested In</label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend-development">Frontend Development</SelectItem>
                      <SelectItem value="backend-development">Backend Development</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                      <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Message *</label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project..."
                    className={`text-black ${formErrors.message ? 'border-red-500' : ''}`}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{info.title}</h4>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-blue-600 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Free Consultation</h3>
                <p className="text-blue-700 mb-4">
                  Schedule a free 30-minute consultation to discuss your project requirements 
                  and get expert advice on the best solutions for your business.
                </p>
                
                {/* Consultation Scheduling Modal */}
                <Dialog open={isConsultationModalOpen} onOpenChange={setIsConsultationModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Schedule Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        Schedule Free Consultation
                      </DialogTitle>
                    </DialogHeader>
                    
                    <form onSubmit={handleConsultationSubmit} className="space-y-8">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="consultation-name" className="block mb-2 font-medium">Full Name *</label>
                                                          <Input
                                id="consultation-name"
                                type="text"
                                required
                                value={consultationData.name}
                                onChange={(e) => handleConsultationInputChange("name", e.target.value)}
                                placeholder="Your full name"
                                className={`h-12 text-black ${consultationErrors.name ? 'border-red-500' : ''}`}
                              />
                              {consultationErrors.name && (
                                <p className="text-red-500 text-sm mt-1">{consultationErrors.name}</p>
                              )}
                          </div>
                          <div>
                            <label htmlFor="consultation-email" className="block mb-2 font-medium">Email *</label>
                                                         <Input
                               id="consultation-email"
                               type="email"
                               required
                               value={consultationData.email}
                               onChange={(e) => handleConsultationInputChange("email", e.target.value)}
                               placeholder="your@email.com"
                               className={`h-12 text-black ${consultationErrors.email ? 'border-red-500' : ''}`}
                             />
                             {consultationErrors.email && (
                               <p className="text-red-500 text-sm mt-1">{consultationErrors.email}</p>
                             )}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="consultation-phone" className="block mb-2 font-medium">Phone Number</label>
                                                         <Input
                               id="consultation-phone"
                               type="tel"
                               value={consultationData.phone}
                               onChange={(e) => {
                                 const value = e.target.value;
                                 // Only allow numbers, spaces, and + symbol
                                 const filteredValue = value.replace(/[^\d\s+]/g, '');
                                 // Limit to 15 characters (country code + 10 digits + spaces)
                                 if (filteredValue.length <= 15) {
                                   handleConsultationInputChange("phone", filteredValue);
                                 }
                               }}
                               placeholder="+91 1234567890"
                               className={`h-12 text-black ${consultationErrors.phone ? 'border-red-500' : ''}`}
                               maxLength={15}
                             />
                             {consultationErrors.phone && (
                               <p className="text-red-500 text-sm mt-1">{consultationErrors.phone}</p>
                             )}
                          </div>
                          <div>
                            <label htmlFor="consultation-company" className="block mb-2 font-medium">Company</label>
                            <Input
                              id="consultation-company"
                              type="text"
                              value={consultationData.company}
                              onChange={(e) => handleConsultationInputChange("company", e.target.value)}
                              placeholder="Your company name"
                              className="h-12 text-black"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="consultation-project-type" className="block mb-2 font-medium">Project Type *</label>
                        <Select 
                          value={consultationData.projectType} 
                          onValueChange={(value) => handleConsultationInputChange("projectType", value)}
                        >
                          <SelectTrigger className="h-12 text-black">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                            <SelectItem value="ecommerce">E-commerce Solution</SelectItem>
                            <SelectItem value="saas-platform">SaaS Platform</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="consulting">IT Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                                            <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div>
                            <label className="block mb-3 font-medium text-lg">Preferred Date *</label>
                                                         <DatePicker
                               date={consultationData.preferredDate}
                               onDateChange={(date) => handleConsultationInputChange("preferredDate", date)}
                               placeholder="Select consultation date"
                               className="w-full"
                             />
                             {consultationErrors.preferredDate && (
                               <p className="text-red-500 text-sm mt-1">{consultationErrors.preferredDate}</p>
                             )}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="consultation-time" className="block mb-3 font-medium text-lg">Preferred Time *</label>
                            <Select 
                              value={consultationData.preferredTime} 
                              onValueChange={(value) => handleConsultationInputChange("preferredTime", value)}
                            >
                              <SelectTrigger className="h-12 text-black">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time} IST
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          {consultationData.preferredDate && (
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Selected:</strong> {format(consultationData.preferredDate, 'EEEE, MMMM do, yyyy')}
                                {consultationData.preferredTime && ` at ${consultationData.preferredTime} IST`}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="consultation-notes" className="block mb-2 font-medium">Additional Notes</label>
                        <Textarea
                          id="consultation-notes"
                          rows={3}
                          value={consultationData.additionalNotes}
                          onChange={(e) => handleConsultationInputChange("additionalNotes", e.target.value)}
                          placeholder="Tell us about your project requirements, budget, timeline, or any specific questions..."
                          className="text-black"
                        />
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setIsConsultationModalOpen(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                          disabled={isConsultationSubmitting}
                        >
                          {isConsultationSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Scheduling...
                            </>
                          ) : (
                            "Schedule Consultation"
                          )}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}