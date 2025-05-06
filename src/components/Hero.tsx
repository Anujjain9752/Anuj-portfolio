import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  if (!isMounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 dark:from-teal-500/5 dark:to-cyan-500/5"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium text-sm mb-4"
            >
              Full Stack Developer
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl dark:text-white lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 animate-gradient">Anuj Jain</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500">Building Digital Experiences</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              A passionate fresher full-stack developer with hands-on experience in MERN stack, building scalable and user-friendly applications. Eager to contribute to impactful tech products.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-lg transition-colors duration-300 font-medium shadow-lg shadow-teal-500/20"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300 font-medium"
              >
                View My Projects
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>

              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-gray-400/10 dark:shadow-gray-900/30 border-4 border-white dark:border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dwlsmj5se/image/upload/fl_preserve_transparency/v1746534150/WhatsApp_Image_2025-05-06_at_15.47.09_cdb09da3_caa73w.jpg?_s=public-apps" // Keep your image URL
                  alt="Portrait"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-80}
          className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-teal-500 dark:text-gray-500 dark:hover:text-teal-400 transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-2">Learn More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}