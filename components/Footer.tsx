import { Separator } from "./ui/separator";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollToTop } from "../utils/useScrollToTop";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  useScrollToTop();

  const footerLinks = {
    Services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Frontend Development", href: "/services/frontend-development" },
      { name: "Backend Development", href: "/services/backend-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" }
    ],
    Company: [
      { name: "About Us", href: "/#about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/#contact" }
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Disclaimer", href: "/disclaimer" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Email", icon: Mail, href: "mailto:hello@jevelon.com" }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      // Handle anchor links (same page navigation)
      setTimeout(() => {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Handle page navigation - scroll to top after navigation
      navigate(href);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Jevelon <span className="text-blue-400">Technologies</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with innovative technology solutions. 
              From web development to cloud services, we're your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="p-2 bg-background rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors border border-border"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (categoryIndex + 1) * 0.1, duration: 0.6 }}
            >
              <h4 className="font-medium text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex + 1) * 0.1 + linkIndex * 0.05, duration: 0.4 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-8" />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Jevelon Technologies. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with ❤️ for growing businesses
          </p>
        </motion.div>
      </div>
    </footer>
  );
}