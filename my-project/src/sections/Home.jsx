import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialIcons from '../components/SocialIcons';

const Home = ({ selectedColor, isDarkMode }) => {

  const [showResumeOptions, setShowResumeOptions] = useState(false);

  const resumeOptions = [
    { label: 'Full Stack Resume', file: '/assets/cvPdf/Dilip_Maurya_Resume_Java_FullStack.pdf' },
    { label: 'Backend Resume', file: '/assets/cvPdf/Dilip_Maurya_Resume_Backend.pdf' },
    { label: 'Software Developer Resume', file: '/assets/cvPdf/Dilip_Maurya_Resume_SDE.pdf' },
  ];

  const downloadResume = (filePath) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeOptions(false);
  };

  const materialTheme = {
    primary: '#1976D2',
    secondary: '#FF5722',
    react: '#00ACC1',
    node: '#4CAF50',
    express: '#795548',
    mongodb: '#43A047'
  }

  return (
    <section id='home' className="min-h-screen w-full flex items-center justify-center mt-5 px-5 sm:px-7 lg:px-10 py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto lg:ml-10 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Text Content (60-70% width on larger screens) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 xl:w-3/5 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
              Hi, I'm{" "}
              <motion.span
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 12,
                }}
                style={{
                  color: selectedColor.value,
                  display: "inline-block",
                  transformOrigin: "center",
                }}
                className="cursor-pointer"
              >
                Dilip Maurya.
              </motion.span>
            </h1>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
  <motion.div
    className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 sm:gap-x-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 2 }}
    transition={{ staggerChildren: 0.1 }}>
    <motion.span
      style={{ color: selectedColor.value }}
      whileHover={{ scale: 1.2 }}>JAVA</motion.span>

    <span>Full Stack Developer</span>
  </motion.div>
</h2>

            <div className={`text-base sm:text-lg mb-6 md:mb-8 space-y-4 text-justify ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="indent-6 sm:indent-8">
                <span style={{ color: selectedColor.value }} className='underline'> <b>I am a Java Full Stack Developer</b> </span>
                skilled in Spring Boot, Spring Cloud,
                Microservices, and REST APIs, along with React.js for building complete
                end-to-end solutions. I also bring hands-on MERN Stack experience
                (React, Node.js, Express, MongoDB), giving me flexibility across the
                full stack.

              </p>
              <p className="indent-6 sm:indent-8">
                I've built OrderFlowX, a microservices e-commerce platform with Kafka
                and Razorpay integration, and solved 150+ problems on LeetCode. During
                my internship at Elite Softwares, I built and deployed 10+ REST APIs
                for a production hotel booking application.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-9">
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowResumeOptions(!showResumeOptions)}
                  className="h-10 px-4 whitespace-nowrap rounded-full"
                  style={{ backgroundColor: selectedColor.value, color: 'white' }}
                >
                  Download Resume
                </motion.button>

                <AnimatePresence>
                  {showResumeOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-1 w-64 rounded-xl shadow-2xl border z-50 overflow-hidden text-left ${
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      {resumeOptions.map((resume, index) => (
                        <button
                          key={index}
                          onClick={() => downloadResume(resume.file)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm transition-colors border-b last:border-b-0 ${
                            isDarkMode
                              ? 'text-gray-200 border-gray-700 hover:bg-gray-700'
                              : 'text-gray-700 border-gray-100 hover:bg-gray-100'
                          }`}
                        >
                          <span>{resume.label}</span>
                          <span
                            className="text-xs font-semibold"
                            style={{ color: selectedColor.value }}
                          >
                            Download
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="px-2 py-2">
                <SocialIcons selectedColor={selectedColor} />
              </div>
            </div>


          </motion.div>

          {/* Right Side - Image (30-40% width on larger screens) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 xl:w-2/5 flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96">
              <div
                className="absolute -inset-2 rounded-2xl h-full w-full"
                style={{ backgroundColor: selectedColor.value, opacity: 0.3 }}
              ></div>
              <img
                src="/assets/images/profileImage/dilipMauryaProfileImage_3.jpeg"
                alt="Profile"
                className="relative rounded-2xl h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Home;