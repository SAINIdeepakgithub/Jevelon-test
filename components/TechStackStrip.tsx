import { motion } from "framer-motion";

const techLogos = [
  { name: "React", src: "/assets/logos/react.svg" },
  { name: "Next.js", src: "/assets/logos/Next.js.svg" },
  { name: "TypeScript", src: "/assets/logos/typescript.svg" },
  { name: "Node.js", src: "/assets/logos/node.js.svg" },
  { name: "Python", src: "/assets/logos/python.svg" },
  { name: "Django", src: "/assets/logos/django.svg" },
  { name: "Express.js", src: "/assets/logos/express.js.svg" },
  { name: "MongoDB", src: "/assets/logos/mongodb.svg" },
  { name: "PostgreSQL", src: "/assets/logos/postgress.svg" },
  { name: "Redis", src: "/assets/logos/redis.svg" },
  { name: "AWS", src: "/assets/logos/amazon-web-services-2.svg" },
  { name: "Firebase", src: "/assets/logos/firebase-1.svg" },
  { name: "Flutter", src: "/assets/logos/flutter.svg" },
  { name: "React Native", src: "/assets/logos/expo-1.svg" },
  { name: "Swift", src: "/assets/logos/swift-15.svg" },
  { name: "Kotlin", src: "/assets/logos/kotlin-1.svg" },
  { name: "Java", src: "/assets/logos/java.svg" },
  { name: "Angular", src: "/assets/logos/angular.svg" },
  { name: "Vue.js", src: "/assets/logos/vuejs.svg" },
  { name: "Tailwind CSS", src: "/assets/logos/tailwind-css.svg" },
  { name: "Framer Motion", src: "/assets/logos/framer motion.svg" },
  { name: "Vercel", src: "/assets/logos/vercel.svg" },
  { name: "Expo", src: "/assets/logos/expo-1.svg" },
];

export default function TechStackStrip() {
  return (
    <section className="py-12 bg-muted/20 border-y border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/5 via-purple-950/5 to-blue-950/5"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-2"
          >
            Technologies We Master
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We work with cutting-edge technologies to deliver exceptional digital solutions
          </motion.p>
        </div>

                                                                                                                                                                               {/* Continuous Scrolling Strip */}
              <div className="relative overflow-hidden h-40 md:h-44 lg:h-48">
                {/* First strip */}
                <motion.div 
                  className="flex items-center space-x-32 md:space-x-36 lg:space-x-40 absolute top-1/2 transform -translate-y-1/2"
                  animate={{ x: [0, -6000] }}
                  transition={{ 
                    duration: 120, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {techLogos.map((tech, index) => (
                                     <motion.div
                       key={`${tech.name}-1-${index}`}
                       className="flex flex-col items-center justify-center space-y-3 w-28 md:w-32 lg:w-36 flex-shrink-0"
                       whileHover={{ scale: 1.1, y: -5 }}
                       transition={{ duration: 0.3 }}
                     >
                       <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-background rounded-lg p-2 flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow">
                         <img 
                           src={tech.src} 
                           alt={tech.name}
                           className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                         />
                       </div>
                       <span className="text-xs md:text-sm text-muted-foreground font-medium text-center whitespace-nowrap leading-tight">
                         {tech.name}
                       </span>
                     </motion.div>
                  ))}
                </motion.div>

                {/* Second strip (duplicate for seamless loop) */}
                <motion.div 
                  className="flex items-center space-x-32 md:space-x-36 lg:space-x-40 absolute top-1/2 transform -translate-y-1/2"
                  animate={{ x: [6000, 0] }}
                  transition={{ 
                    duration: 120, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {techLogos.map((tech, index) => (
                                     <motion.div
                       key={`${tech.name}-2-${index}`}
                       className="flex flex-col items-center justify-center space-y-3 w-28 md:w-32 lg:w-36 flex-shrink-0"
                       whileHover={{ scale: 1.1, y: -5 }}
                       transition={{ duration: 0.3 }}
                     >
                       <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-background rounded-lg p-2 flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-shadow">
                         <img 
                           src={tech.src} 
                           alt={tech.name}
                           className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                         />
                       </div>
                       <span className="text-xs md:text-sm text-muted-foreground font-medium text-center whitespace-nowrap leading-tight">
                         {tech.name}
                       </span>
                     </motion.div>
                  ))}
                </motion.div>
              </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/20 to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/20 to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  );
} 