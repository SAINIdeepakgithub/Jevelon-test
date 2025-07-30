export const caseStudies = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    client: "Fashion Designer",
    category: "Web Development",
    industry: "E-commerce",
    description: "Developed a complete e-commerce solution with modern UI/UX, secure payment integration, and mobile-responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    results: [
      { metric: "Conversion Rate", increase: "180%" },
      { metric: "Page Load Speed", increase: "65%" },
      { metric: "Mobile Sales", increase: "120%" }
    ],
    technologies: ["React", "django", "PostgreSQL", "Stripe"],
    featured: true
  },
  {
    id: 2,
    title: "Online Store & Inventory System",
    client: "Clothing Store",
    category: "Web Development",
    industry: "E-commerce",
    description: "Built a comprehensive online store with inventory management, order tracking, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    results: [
      { metric: "Sales Growth", increase: "200%" },
      { metric: "Order Processing", increase: "80%" },
      { metric: "Customer Satisfaction", increase: "4.7/5" }
    ],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "PayPal", "django"]
  },
  {
    id: 3,
    title: "Ride-Hailing Application",
    client: "Transport Startup",
    category: "Mobile Development",
    industry: "Transportation",
    description: "Created a full-featured ride-hailing app with real-time tracking, payment integration, and driver management.",
    image: "/assets/photos/zets.png",
    results: [
      { metric: "Active Users", increase: "500+" },
      { metric: "App Rating", increase: "4.5/5" },
      { metric: "Trip Completion", increase: "95%" }
    ],
    technologies: ["React Native", "Firebase", "Node.js", "Google Maps"]
  },
  {
    id: 4,
    title: "Professional Portfolio Website",
    client: "Software Engineer",
    category: "Web Development",
    industry: "Creative Services",
    description: "Designed and developed a modern, responsive portfolio website with smooth animations and optimal performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
    results: [
      { metric: "Page Load Speed", increase: "85%" },
      { metric: "Mobile Performance", increase: "95%" },
      { metric: "SEO Ranking", increase: "Top 10" }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  }
];

export const caseStudyStats = [
  { label: "Successful Projects", value: "50+", icon: "Award" },
  { label: "Happy Clients", value: "20+", icon: "Users" },
  { label: "Average ROI Increase", value: "150%", icon: "TrendingUp" }
];