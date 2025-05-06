import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Award, Code, GraduationCap, MapPin } from 'lucide-react'; // Changed icons

const learning = [
  {
    id: 1,
    type: 'Education',
    institution: 'Acropolis Institute of Technology and Research',
    location: 'Indore, India',
    period: '2020 - 2024',
    degree: 'B.Tech in Information Technology - 81.1%',
    icon: <GraduationCap className="h-5 w-5 mr-1" />,
  },
  {
    id: 2,
    type: 'Project',
    title: 'PureCart - Online Grocery Platform',
    tech: 'MERN, Tailwind CSS, Stripe, Cloudinary',
    period: '2025', // Approximate timeframe
    description: 'Developed a full-featured grocery e-commerce app with seller dashboard, product management, and cart functionality. Integrated secure payments via Stripe and cloud-based image storage with Cloudinary.',
    icon: <Code className="h-5 w-5 mr-1" />,
  },
  {
    id: 3,
    type: 'Project',
    title: 'Instagram Clone - Real-Time Social App',
    tech: 'MERN, Socket.io',
    period: '2024-2025', // Approximate timeframe
    description: 'Developed a real-time social networking app with posts, likes, comments, and instant messaging using Socket.io for real-time chat and REST APIs for a scalable backend.',
    icon: <Code className="h-5 w-5 mr-1" />,
  },
  {
    id: 4,
    type: 'Certification',
    title: 'Python 3.4.3 Training',
    institution: 'IIT Bombay',
    period: '2023', // Approximate timeframe
    icon: <Award className="h-5 w-5 mr-1" />,
  },
  {
    id: 5,
    type: 'Certification',
    title: 'SQL Intermediate',
    institution: 'HackerRank',
    period: '2024', // Approximate timeframe
    icon: <Award className="h-5 w-5 mr-1" />,
  },
  {
    id: 6,
    type: 'Certification',
    title: 'Core Java Intermediate',
    institution: 'HackerRank',
    period: '2025', // Approximate timeframe
    icon: <Award className="h-5 w-5 mr-1" />,
  },
  {
    id: 7,
    type: 'Achievement',
    title: 'Participated in State Level Hackathon Codictive 3.0 – Idea Hackathon',
    period: '2025 April', // Approximate timeframe
    icon: <Award className="h-5 w-5 mr-1" />,
  },
];

export default function LearningJourney() { // Changed component name
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="learning" className="py-20 bg-gray-50 dark:bg-gray-800"> {/* Changed ID */}
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-medium text-sm mb-4"
          >
            Learning & Achievements
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            My Journey of Growth
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A timeline highlighting my education, key projects, certifications, and achievements that have shaped my development as a full-stack engineer.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-teal-300 dark:border-teal-700 space-y-12">
            {learning.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[25px] h-12 w-12 rounded-full bg-white dark:bg-gray-900 border-4 border-teal-400 dark:border-teal-700 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-teal-500"></div>
                </div>

                <div className="ml-8 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-3"> {/* Reduced margin */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {item.degree || item.title} {/* Display degree for education, title for others */}
                      </h3>
                      <p className="text-lg font-medium text-teal-600 dark:text-teal-400">
                        {item.institution || item.tech} {/* Display institution or tech stack */}
                      </p>
                    </div>
                    <div className="flex flex-col items-end mt-2 sm:mt-0">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {item.description}
                    </p>
                  )}

                  {item.type === 'Education' && item.degree && (
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.degree}
                    </p>
                  )}

                  {item.type === 'Project' && item.tech && (
                    <div className="mt-2">
                      <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-1">Technologies:</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.tech}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
         <a
  href="https://drive.google.com/file/d/1d0YSlyB09-TkEMLQRVzhuRw7owks75Ao/view?usp=drive_link" // Replace with your actual resume link
  className="inline-flex items-center px-8 py-4 border-2 border-teal-500 dark:border-teal-500 rounded-full font-bold text-teal-700 dark:text-teal-300 bg-white dark:bg-gray-800 shadow-md hover:bg-teal-500 dark:hover:bg-teal-700 hover:text-white dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
  target="_blank"
  rel="noopener noreferrer"
  style={{ letterSpacing: '0.05em' }}
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
  <span className="text-xl">Get My Resume</span>
</a>
        </motion.div>
      </div>
    </section>
  );
}