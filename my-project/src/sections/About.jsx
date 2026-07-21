import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  CakeIcon,
  MapPinIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  LightBulbIcon,
  UserIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom'; // Changed from next/router

const About = ({ selectedColor, isDarkMode }) => {
  const navigate = useNavigate(); // React Router's navigation hook

  const personalInfo = [
  { icon: <CakeIcon className="ml-4 h-5 w-5" />, label: 'Birthday', value: '20 Jan 2003' },

  {
    icon: <EnvelopeIcon className="ml-4 h-5 w-5" />,
    label: 'Email',
    value: (
      <a
        href="mailto:dm143dilip@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Dilip,"
        className="hover:underline break-all"
        style={{ color: selectedColor.value }}
      >
        dm143dilip@gmail.com
      </a>
    )
  },

  { icon: <DevicePhoneMobileIcon className="ml-4 h-5 w-5" />, label: 'Mobile', value: '+91 7350541586' },
  { icon: <CalendarDaysIcon className="ml-4 h-5 w-5" />, label: 'Age', value: '23 Years' },
  { icon: <AcademicCapIcon className="ml-4 h-5 w-5" />, label: 'Degree', value: 'Bachelor of Engineering (B.E.) in Computer Engineering' },
  { icon: <MapPinIcon className="ml-4 h-5 w-5" />, label: 'City', value: 'Pune, Maharashtra, India' }
];

  // Navigation functions for React Router
  const navigateToProjects = () => {
    navigate('/projects'); // Update this to your projects route
  };

  const navigateToContact = () => {
    navigate('/contact'); // Update this to your contact route
  };

  return (
    <section id='about' className="w-full py-24 px-5 sm:px-8 lg:px-12 relative">
      {/* Upper Section - Core Information */}
      <div className="mb-20 lg:ml-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: selectedColor.value }}>About</span> Me
          </h2>
        </motion.div>

        {/* Profile Summary */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className={`text-lg leading-relaxed mb-8 text-justify text-center lg:text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="lg:indent-8">
                <span style={{ color: selectedColor.value }}> <b>I'm a Java Full Stack Developer</b> </span>
                passionate about building scalable
                backend systems using Spring Boot, Microservices, and REST APIs, while
                bridging them with clean, functional frontends using React and Tailwind
                CSS. My code prioritizes performance, maintainability, and scalability —
                whether designing microservices architecture or crafting RESTful APIs.
                I also carry hands-on MERN Stack experience, which strengthens my
                full-stack versatility.

              </p> <br />
              <p className="lg:indent-8">
                Beyond development, I've solved 150+ problems on LeetCode, and I enjoy
                tackling algorithmic challenges alongside real-world backend engineering.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {personalInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 2, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm min-w-0`}
                >
                  <div className="flex items-start gap-3 sm:gap-6 min-w-0">
                    <span style={{ color: selectedColor.value }} className="shrink-0">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.label}
                      </p>
                      <p className={`font-medium break-words ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Updated buttons using React Router */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">

        <motion.button
          onClick={navigateToProjects}
          whileHover={{
            y: -3,
            backgroundColor: `${selectedColor.value}10`
          }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
          style={{ color: selectedColor.value }} >
          VIEW - PROJECT
          <ArrowRightIcon className="h-4 w-4" />
        </motion.button>

        <motion.button
          onClick={navigateToContact}
          whileHover={{
            y: -3,
            boxShadow: `0 5px 15px -3px ${selectedColor.value}30`
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium"
          style={{
            backgroundColor: selectedColor.value,
            color: 'white'
          }}>
          HIRE ME
          <ArrowRightIcon className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  )
}

export default About;