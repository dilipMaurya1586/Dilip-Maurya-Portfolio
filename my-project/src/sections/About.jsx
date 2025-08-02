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
    { icon: <EnvelopeIcon className=" ml-4 h-5 w-5" />, label: 'Email', value: 'dm143dilip@gmail.com' },
    { icon: <DevicePhoneMobileIcon className=" ml-4 h-5 w-5" />, label: 'Mobile', value: '+91 7350541586' },
    { icon: <CalendarDaysIcon className=" ml-4 h-5 w-5" />, label: 'Age', value: '22 Years' },
    { icon: <AcademicCapIcon className=" ml-4 h-5 w-5" />, label: 'Degree', value: 'B.E Computer Enginner' },
    { icon: <MapPinIcon className=" ml-4 h-5 w-5" />, label: 'City', value: 'Pune, India' }
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
      {/* Rest of your component remains the same */}
      {/* ... */}
      {/* Upper Section - Core Information */}
      <div className="mb-20 ml-10">
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
          {/* <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: selectedColor.value }} /> */}

        </motion.div>

        {/* Profile Summary */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >


            <div className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                <span style={{ color: selectedColor.value }}> <b>I’m a MERN stack developer</b> </span>
                passionate about bridging frontend elegance (React, Tailwind CSS) with backend
                efficiency
                (Node.js, MongoDB). My code prioritizes performance, maintainability, and scalability—whether refining UI
                interactions or designing RESTful APIs.
              </p> <br />
              <p>
                Beyond development, I tackle 300+ algorithmic problems, specializing in Tree traversals, dynamic programming.
                and optimization
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
                  className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
                >
                  <div className="flex items-center gap-6">
                    <span style={{ color: selectedColor.value }}>
                      {item.icon}
                    </span>
                    <div>
                      <p className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.label}
                      </p>
                      <p className={`font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
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
      <div className="flex items-center justify-center space-x-10">

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

      {/* Rest of your component */}
      {/* ... */}
    </section>
  )
}

export default About;
