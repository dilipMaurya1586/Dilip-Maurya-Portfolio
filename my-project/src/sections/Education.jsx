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
            className={`text-2xl font-bold mb-12 flex items-center justify-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
          >
            <ShieldCheckIcon
              className="h-8 w-8"
              style={{ color: selectedColor.value }}
            />

            Professional Certifications
          </motion.h3>

          {/* flex-wrap + justify-center + items-stretch: same pattern used for the
              Projects section, so cards line up consistently and center correctly
              even if the count isn't a multiple of the column count. */}
          <motion.div
            className="flex flex-wrap justify-center items-stretch gap-9 ml-10 mr-10"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
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
                className={`w-full sm:w-80 flex flex-col rounded-xl p-6 ${isDarkMode
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                  } border shadow-md`}
              >

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">

                  <div
                    className={`p-3 rounded-lg flex-shrink-0 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                      }`}
                    style={{
                      color: selectedColor.value
                    }}
                  >
                    {cert.icon}
                  </div>

                  <h4
                    className={`font-bold text-lg leading-snug ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {cert.title}
                  </h4>

                </div>

                {/* Skill tags - short chips instead of one long sentence */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${selectedColor.value}15`,
                          color: selectedColor.value,
                          border: `1px solid ${selectedColor.value}30`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Issuer / Year - pushed toward the bottom of the flex column */}
                <div className="mt-auto">
                  <p
                    className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    <span className="font-medium">Issuer:</span> {cert.issuer}
                    <span className="mx-2">•</span>
                    <span className="font-medium">Year:</span> {cert.year}
                  </p>

                  <button
                    type="button"
                    onClick={() => window.open(cert.link, "_blank")}
                    className="mt-4 w-full px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer"
                    style={{
                      backgroundColor: selectedColor.value,
                      color: "#ffffff"
                    }}
                  >
                    View Certificate
                  </button>
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
