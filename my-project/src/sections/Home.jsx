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
      <div className="w-full max-w-7xl mx-auto ml-10 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Text Content (60-70% width on larger screens) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 xl:w-3/5"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
              Hi, I'm <span style={{ color: selectedColor.value }}>Dilip Maurya.⁣</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
              <motion.div
                className="flex items-center gap-1 text-3xl font-bold w-auto gap-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                transition={{ staggerChildren: 0.1 }}>
                <motion.span
                  style={{ color: materialTheme.mongodb }}
                  whileHover={{ scale: 1.2 }}>J</motion.span>
                <motion.span
                  style={{ color: materialTheme.express }}
                  whileHover={{ scale: 1.2 }}>A</motion.span>
                <motion.span
                  style={{ color: materialTheme.react }}
                  whileHover={{ scale: 1.2 }}>V</motion.span>
                <motion.span
                  style={{ color: materialTheme.node }}
                  whileHover={{ scale: 1.2 }}>A</motion.span>
                Full <span style={{ color: selectedColor.value }}> Stack Developer</span>
              </motion.div>
            </h2>

            <div className={`text-base sm:text-lg mb-6 md:mb-8 space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                <span style={{ color: selectedColor.value }} className='underline'> <b>I am a Java Full Stack Developer</b> </span>
                {/* <span style={{ color: selectedColor.value }} className='underline'> <b> Java Algorithm Specialist </b> </span> */}
                skilled in Spring Boot, Spring Cloud,
                Microservices, and REST APIs, along with React.js for building complete
                end-to-end solutions. I also bring hands-on MERN Stack experience
                (React, Node.js, Express, MongoDB), giving me flexibility across the
                full stack.

              </p>
              <p>
                I've built OrderFlowX, a microservices e-commerce platform with Kafka
                and Razorpay integration, and solved 150+ problems on LeetCode. During
                my internship at Elite Softwares, I built and deployed 10+ REST APIs
                for a production hotel booking application.
              </p>
            </div>

            <div className="flex items-center justify-center flex-row sm:flex-row gap-9">
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowResumeOptions(!showResumeOptions)}
                  className=" h-10 px-4 py- mx-6 my-6 rounded-full"
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
                      className={`absolute top-full left-6 mt-1 w-64 rounded-xl shadow-2xl border z-50 overflow-hidden ${
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

              <div className=" px-2 py-2 mx-6 my-6 ">
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
                src="/assets/images/profileImage/IMG_20250802_123139.png"
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

// import { motion } from 'framer-motion';
// import SocialIcons from '../components/SocialIcons';

// const Home = ({ selectedColor, isDarkMode }) => {

//   const downloadResume = () => {
//     const link = document.createElement('a');
//     link.href = '/assets/cvPdf/Dilip_Resume-1.pdf';
//     link.download = '/assets/cvPdf/Dilip_Resume-1.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
  

//   const materialTheme = {
//     primary: '#1976D2',
//     secondary: '#FF5722',
//     react: '#00ACC1',
//     node: '#4CAF50',
//     express: '#795548',
//     mongodb: '#43A047'
//   }

//   return (
//     <section id='home' className="min-h-screen w-full flex items-center justify-center mt-5 px-5 sm:px-7 lg:px-10 py-16 md:py-24">
//       <div className="w-full max-w-7xl mx-auto ml-10 ">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
//           {/* Left Side - Text Content (60-70% width on larger screens) */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-2/3 xl:w-3/5"
//           >
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
//               Hi, I'm <span style={{ color: selectedColor.value }}>Dilip Maurya.⁣</span>
//             </h1>

//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
//               <motion.div
//                 className="flex items-center gap-1 text-3xl font-bold w-auto gap-x-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 2 }}
//                 transition={{ staggerChildren: 0.1 }}>
//                 <motion.span
//                   style={{ color: materialTheme.mongodb }}
//                   whileHover={{ scale: 1.2 }}>J</motion.span>
//                 <motion.span
//                   style={{ color: materialTheme.express }}
//                   whileHover={{ scale: 1.2 }}>A</motion.span>
//                 <motion.span
//                   style={{ color: materialTheme.react }}
//                   whileHover={{ scale: 1.2 }}>V</motion.span>
//                 <motion.span
//                   style={{ color: materialTheme.node }}
//                   whileHover={{ scale: 1.2 }}>A</motion.span>
//                 Full <span style={{ color: selectedColor.value }}> Stack Developer</span>
//               </motion.div>
//             </h2>

//             <div className={`text-base sm:text-lg mb-6 md:mb-8 space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//               <p>
//                 <span style={{ color: selectedColor.value }} className='underline'> <b>I am a Java Full Stack Developer</b> </span>
//                 {/* <span style={{ color: selectedColor.value }} className='underline'> <b> Java Algorithm Specialist </b> </span> */}
//                   skilled in Spring Boot, Spring Cloud,
//                 Microservices, and REST APIs, along with React.js for building complete
//                 end-to-end solutions. I also bring hands-on MERN Stack experience
//                 (React, Node.js, Express, MongoDB), giving me flexibility across the
//                 full stack.

//               </p>
//               <p>
//                 I've built OrderFlowX, a microservices e-commerce platform with Kafka
//                 and Razorpay integration, and solved 150+ problems on LeetCode. During
//                 my internship at Elite Softwares, I built and deployed 10+ REST APIs
//                 for a production hotel booking application.
//               </p>
//             </div>

//             <div className="flex items-center justify-center flex-row sm:flex-row gap-9">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={downloadResume}
//                 className=" h-10 px-4 py- mx-6 my-6 rounded-full"
//                 style={{ backgroundColor: selectedColor.value, color: 'white' }}
//               >
//                 Download Resume
//               </motion.button>

//               <div className=" px-2 py-2 mx-6 my-6 ">
//                 <SocialIcons selectedColor={selectedColor} />
//               </div>
//             </div>


//           </motion.div>

//           {/* Right Side - Image (30-40% width on larger screens) */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-1/3 xl:w-2/5 flex justify-center mt-8 lg:mt-0"
//           >
//             <div className="relative w-64 h-80 sm:w-72 sm:h-96">
//               <div
//                 className="absolute -inset-2 rounded-2xl h-full w-full"
//                 style={{ backgroundColor: selectedColor.value, opacity: 0.3 }}
//               ></div>
//               <img
//                 src="/assets/images/profileImage/IMG_20250802_123139.png"
//                 alt="Profile"
//                 className="relative rounded-2xl h-full w-full object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
