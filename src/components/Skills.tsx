import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 80 }, // Adjusted based on projects
      { name: 'JavaScript', level: 75 }, // Fundamental for React
      { name: 'HTML/CSS', level: 90 }, // Foundational web skills
      { name: 'Tailwind CSS', level: 85 }, // Used in PureCart
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 70 }, // Used in both projects
      { name: 'Express', level: 65 }, // Part of MERN stack
      { name: 'MongoDB', level: 60 }, // Part of MERN stack
      // Removed SQL and GraphQL for now, add if relevant
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 80 }, // Essential for version control
      // Removed Docker and AWS for now, add if you have experience
      { name: 'Testing (Basics)', level: 50 }, // Basic understanding
      { name: 'Agile (Understanding)', level: 60 }, // Awareness of methodologies
      { name: 'Socket.io', level: 75 }, // Used in Instagram Clone
      { name: 'Stripe', level: 65 }, // Used in PureCart
      { name: 'Cloudinary', level: 60 }, // Used in PureCart
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-medium text-sm mb-4"
          >
            My Skills
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              An overview of my technical skills, reflecting my journey in web development and the technologies I've gained experience in.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (categoryIndex * 0.1) }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {category.name}
                </h3>
              </div>
              <div className="p-6 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Other Technologies & Concepts</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'REST APIs',
              'Responsive Design',
              'Performance Optimization',
              'Problem Solving',
              'Communication',
              'Teamwork',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.05) }}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}