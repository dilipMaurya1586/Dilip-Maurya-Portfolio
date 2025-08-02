import { motion } from 'framer-motion'
import SocialIcons from '../components/SocialIcons'

const Contact = ({ selectedColor, isDarkMode }) => {
  return (
    <section id='contact' className="py-16 px-5 md:px-10 flex items-center justify-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Get In <span style={{ color: selectedColor.value }}>Touch</span>
          </h2>
          
          <div className="flex flex-col items-center">
            {/* Horizontal Contact Information */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl p-8 rounded-xl shadow-lg"
              style={{ 
                backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                border: `1px solid ${selectedColor.value}20`
              }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: selectedColor.value }}>
                Contact Information
              </h3>
              
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                {/* Email */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-4 rounded-lg transition-all"
                  style={{ 
                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : 'rgba(249, 250, 251, 0.7)',
                    border: `1px solid ${selectedColor.value}30`
                  }}
                >
                  <div 
                    className="p-3 rounded-full mb-3"
                    style={{ backgroundColor: selectedColor.value }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    dm143dilip@gemail.com
                  </p>
                </motion.div>
                
                {/* Phone */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-4 rounded-lg transition-all"
                  style={{ 
                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : 'rgba(249, 250, 251, 0.7)',
                    border: `1px solid ${selectedColor.value}30`
                  }}
                >
                  <div 
                    className="p-3 rounded-full mb-3"
                    style={{ backgroundColor: selectedColor.value }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    +91 7350541586
                  </p>
                </motion.div>
                
                {/* Location */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-4 rounded-lg transition-all"
                  style={{ 
                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : 'rgba(249, 250, 251, 0.7)',
                    border: `1px solid ${selectedColor.value}30`
                  }}
                >
                  <div 
                    className="p-3 rounded-full mb-3"
                    style={{ backgroundColor: selectedColor.value }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Pune Maharashtra, India
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-12 text-center"
              >
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <SocialIcons selectedColor={selectedColor} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact



