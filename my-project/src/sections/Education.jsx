import { motion } from 'framer-motion';
import { educationData, certifications } from '../constants/education';
import EducationCard from '../components/EducationCard';
import {
  AcademicCapIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Education = ({ selectedColor, isDarkMode }) => {
  // Animation variants for consistent motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const cardHover = {
    y: -5,
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <section id="education" className={`relative py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500' : 'bg-blue-200'}`}></div>
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500' : 'bg-purple-200'}`}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Education <span style={{ color: selectedColor.value }}>&</span> Credentials
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-24">
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
            className={`text-2xl font-bold mb-12 flex items-center justify-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          >
            <AcademicCapIcon className="h-8 w-8" style={{ color: selectedColor.value }} />
            Academic Background
          </motion.h3>

          <motion.div 
            className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-7 ml-10 mr-10"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {educationData.map((edu, index) => (
              <EducationCard 
                key={edu.id}
                education={edu}
                index={index}
                selectedColor={selectedColor}
                isDarkMode={isDarkMode}
                variants={itemVariants}
                whileHover={cardHover}
              />
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
            className={`text-2xl font-bold mb-12 flex items-center justify-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          >
            <ShieldCheckIcon className="h-8 w-8" style={{ color: selectedColor.value }} />
            Professional Certifications
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 ml-10 mr-10  "
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            whileHover={cardHover}
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 15px 30px -10px ${selectedColor.value}30`
                }}
                className={`rounded-xl p-6 transition-all duration-300 ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border shadow-md`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                    style={{ color: selectedColor.value }}
                  >
                    {cert.icon}
                  </div>
                  <h4 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h4>
                </div>
                <div className="space-y-3">
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="font-medium">Issuer:</span> {cert.issuer}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="font-medium">Year:</span> {cert.year}
                  </p>
                  {cert.credential && (
                    <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} font-mono`}>
                      ID: {cert.credential}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;



// import { motion } from 'framer-motion';
// import { educationData, certifications } from '../constants/education';
// import {
//   AcademicCapIcon,
//   BookOpenIcon,
//   ShieldCheckIcon,
//   BoltIcon
// } from '@heroicons/react/24/outline';


// const Education = ({ selectedColor, isDarkMode }) => {
//   // Education Data

//   return (
//     <section id="education" className={`relative py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden opacity-10">
//         <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500' : 'bg-blue-200'}`}></div>
//         <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500' : 'bg-purple-200'}`}></div>
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-6"
//         >
//           <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//             Education <span style={{ color: selectedColor.value }}>&</span> Credentials
//           </h2>
//           {/* <div className="w-20 h-1 mx-auto mb-2" style={{ backgroundColor: selectedColor.value }} /> */}
          
//         </motion.div>

//         {/* Education Timeline - Modern Cards Layout */}
//         <div className="mb-24">
//           <motion.h3 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className={`text-2xl font-bold mb-9 flex items-center justify-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
//           >
//             <AcademicCapIcon className="h-8 w-8" style={{ color: selectedColor.value }} />
//             Academic Background
//           </motion.h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
//             {educationData.map((edu, index) => (
//               <motion.div
//                 key={edu.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className={`rounded-2xl p-8 transition-all duration-300 ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border shadow-lg hover:shadow-xl`}
//               >
//                 <div className="flex items-start gap-5 mb-4">
//                   <div 
//                     className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
//                     style={{ color: selectedColor.value }}
//                   >
//                     {edu.icon}
//                   </div>
//                   <div>
//                     <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
//                     <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{edu.institution}</p>
//                   </div>
//                 </div>
//                 <div className={`px-2 py-1 rounded-md inline-block text-xs font-medium mb-4 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
//                   {edu.year}
//                 </div>
//                 <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Certifications - Minimal Grid Layout */}
//         <div>
//           <motion.h3 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className={`text-2xl font-bold mb-8 flex items-center justify-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
//           >
//             <ShieldCheckIcon className="h-8 w-8" style={{ color: selectedColor.value }} />
//             Professional Certifications
//           </motion.h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
//             {certifications.map((cert, index) => (
//               <motion.div
//                 key={cert.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ 
//                   y: -5,
//                   boxShadow: `0 10px 25px -5px ${selectedColor.value}20`
//                 }}
//                 className={`rounded-xl p-6 transition-all duration-300 ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border`}
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div 
//                     className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
//                     style={{ color: selectedColor.value }}
//                   >
//                     {cert.icon}
//                   </div>
//                   <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h4>
//                 </div>
//                 <div className="space-y-2">
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="font-medium">Issuer:</span> {cert.issuer}
//                   </p>
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="font-medium">Year:</span> {cert.year}
//                   </p>
//                   <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} font-mono`}>
//                     ID: {cert.credential}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;