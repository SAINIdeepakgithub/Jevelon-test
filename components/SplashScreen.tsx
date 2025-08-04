import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Company Logo - Reduced size for better performance */}
        <motion.img
          src="/assets/logos/JT.svg"
          alt="JT Logo"
          width="200"
          height="200"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-48 h-48"
          loading="eager"
        />
        <motion.div
          className="mt-4 text-xl font-bold text-blue-500 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Jevelon Technologies
        </motion.div>
      </motion.div>
    </div>
  );
}