import { motion } from 'framer-motion';
import SocialIcons from '../components/SocialIcons';

const Home = ({ selectedColor, isDarkMode }) => {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/cvPdf/Dilip_Resume';
    link.download = '/assets/cvPdf/Dilip_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                  whileHover={{ scale: 1.2 }}>M</motion.span>
                <motion.span
                  style={{ color: materialTheme.express }}
                  whileHover={{ scale: 1.2 }}>E</motion.span>
                <motion.span
                  style={{ color: materialTheme.react }}
                  whileHover={{ scale: 1.2 }}>R</motion.span>
                <motion.span
                  style={{ color: materialTheme.node }}
                  whileHover={{ scale: 1.2 }}>N</motion.span>
                Stack <span style={{ color: selectedColor.value }}> Developer</span>
              </motion.div>
            </h2>

            <div className={`text-base sm:text-lg mb-6 md:mb-8 space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                <span style={{ color: selectedColor.value }} className='underline'> <b>I am MERN Stack Developer</b> </span>and
                <span style={{ color: selectedColor.value }} className='underline'> <b> Java Algorithm Specialist </b> </span>
                who builds fast, scalable web apps.
                I work with React, Node.js, Express, MongoDB, and Tailwind CSS to create full-stack solutions that are
                clean, efficient, and user-friendly.
              </p>
              <p>
                With 200+ solved problems on LeetCode (specializing in Trees, Graphs, and DP), I combine development
                skills with sharp problem-solving. At Elite Software, I boosted API efficiency by 40% and cut frontend load
                times by 30% Git.
              </p>
            </div>

            <div className="flex items-center justify-center flex-row sm:flex-row gap-9">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className=" h-10 px-4 py- mx-6 my-6 rounded-full"
                style={{ backgroundColor: selectedColor.value, color: 'white' }}
              >
                Download Resume
              </motion.button>

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
