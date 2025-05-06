import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react'; // Changed icons for better relevance

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12"> {/* Reduced margin for a tighter feel */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-medium text-sm mb-4"
          >
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            My Journey into Full-Stack Development
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto" // Slightly reduced max width
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              As a passionate fresher full-stack developer, I'm eager to apply my hands-on experience in building scalable MERN applications and real-time features. My focus is on creating performant and well-structured applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dwlsmj5se/image/upload/fl_preserve_transparency/v1746532992/WhatsApp_Image_2025-05-06_at_15.47.09_cdb09da3_caa73w.jpg?_s=public-apps" // Keep your image
                alt="Professional Portrait"
                className="w-full h-auto object-cover" // Added object-cover for better image fitting
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Anuj Jain</h3> {/* Your Name */}
                  <p className="text-gray-200">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-1 lg:col-span-3 space-y-4" // Reduced spacing slightly
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                More About Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Driven by a passion for technology, my journey into full-stack development has been fueled by hands-on projects and a desire to build impactful solutions. My experience with the MERN stack allows me to contribute to both the frontend and backend of applications, ensuring a cohesive and efficient development process.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm particularly interested in creating scalable and performant applications with clean API architectures. My projects like PureCart and the Instagram Clone demonstrate my ability to integrate features like real-time communication, secure payments (Stripe), and cloud storage (Cloudinary).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3"> {/* Reduced gap slightly */}
              {[
                {
                  icon: <Code className="h-8 w-8 text-teal-500" />,
                  title: 'Full-Stack Expertise',
                  description: 'MERN Stack Development'
                },
                {
                  icon: <Rocket className="h-8 w-8 text-yellow-500" />, // Changed to Rocket for "Impactful"
                  title: 'Impactful Solutions',
                  description: 'Focus on User Experience'
                },
                {
                  icon: <Users className="h-8 w-8 text-blue-500" />,
                  title: 'Team Collaboration',
                  description: 'Effective Communication'
                },
                {
                  icon: <Lightbulb className="h-8 w-8 text-purple-500" />, // Changed to Lightbulb for "Innovation"
                  title: 'Continuous Learning',
                  description: 'Exploring New Technologies'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow duration-300" // Reduced padding
                >
                  <div className="mb-2">{item.icon}</div> {/* Reduced margin */}
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}