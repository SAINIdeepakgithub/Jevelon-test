import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                Jevelon <span className="text-blue-400">Technologies</span>
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {item.href.startsWith("#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground hover:text-blue-400 transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-lg text-foreground hover:text-blue-400 transition-colors duration-200 relative group ${
                      location.pathname === item.href ? 'text-blue-400' : ''
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full ${
                      location.pathname === item.href ? 'w-full' : 'w-0'
                    }`}></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:flex"
          >
            <Link to="/#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white relative overflow-hidden group px-6 py-3">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="px-4 py-4 space-y-2 bg-background/95 backdrop-blur-sm">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href.startsWith("#") ? (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full px-3 py-3 text-left text-foreground hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="block w-full px-3 py-3 text-left text-foreground hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-2"
                >
                  <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}