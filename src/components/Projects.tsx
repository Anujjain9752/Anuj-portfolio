
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'PureCart - Online Grocery Platform',
    description: 'A full-featured grocery e-commerce app with seller dashboard, product management, and cart functionality. Integrated secure payments via Stripe and cloud-based image storage with Cloudinary. Implemented mobile-first design and optimized UX.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    technologies: ['MERN', 'Tailwind CSS', 'Stripe', 'Cloudinary'],
    liveUrl: 'https://pure-cart-f.vercel.app', // Add your live URL if deployed
    githubUrl: 'https://github.com/Anujjain9752/PureCart', // Your GitHub URL
    featured: true, // You can mark some as featured if you like
  },
  {
    id: 2,
    title: 'Instagram Clone - Real-Time Social App',
    description: 'Developed a real-time social networking app with posts, likes, comments, and instant messaging using Socket.io for real-time chat and REST APIs for a scalable backend.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    technologies: ['MERN', 'Socket.io'],
    liveUrl: '#', // Add your live URL if deployed
    githubUrl: 'https://github.com/Anujjain9752/Social-Media-App', // Your GitHub URL
    featured: true,
  },
  // You can add more personal projects here following the same structure
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-medium text-sm mb-4"
          >
            My Projects
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Personal Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A showcase of my personal projects, highlighting my skills and passion for building innovative web applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition-colors duration-200"
                        aria-label="View live site"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition-colors duration-200"
                        aria-label="View source code on GitHub"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl || project.githubUrl || '#'} // Fallback to '#' if both URLs are missing
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-200"
                  target={project.liveUrl || project.githubUrl ? "_blank" : "_self"}
                  rel={project.liveUrl || project.githubUrl ? "noopener noreferrer" : ""}
                >
                  <span>View Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Removed the "View All Projects" button for now */}
      </div>
    </section>
  );
}