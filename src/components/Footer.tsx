import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Anuj Jain's Portfolio</h3> {/* Your Name */}
            <p className="text-gray-600 dark:text-gray-300">
              Building innovative and user-friendly digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Learning', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anuj-jain-111376193' }, // Your LinkedIn URL
                { name: 'GitHub', url: 'https://github.com/Anujjain9752' }, // Your GitHub URL
                // { name: 'Twitter', url: '#' }, // Add your Twitter URL if you have one
                { name: 'Email', url: 'mailto:anujjain9752@gmail.com' }, // Your Email
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Anuj Jain. All rights reserved. {/* Your Name */}
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}