import React from 'react'
import SkillCard from '../components/SkillCard'
import { motion } from 'framer-motion'
import { technicalSkills, tools, professionalSkills } from '../constants/skills.jsx'

const Skills = ({ delay, id, selectedColor, isDarkMode }) => {

  return (
    <motion.div id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto">

      <h1 className="text-3xl md:text-4xl font-bold text-center py-11" >
        My <span style={{ color: selectedColor.value }}>Skills</span>
      </h1>

      {/* Technical Skills - compact 2-column grid */}
      <div className="ml-10 mr-10 mb-12">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                selectedColor={selectedColor}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Professional Skills */}
      <div className="ml-10 mr-10 mb-12 max-w-xl">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Professional Skills</h2>
          <div className="space-y-6">
            {professionalSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                selectedColor={selectedColor}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tools & Technologies */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 ml-10 mr-10">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
            {tools.map((tool, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay }}
                whileHover={{ y: -5 }}
                key={index}
                className={`p-2 m-2 rounded-lg flex flex-col items-center 
                                  ${isDarkMode ? "bg-gray-800" : "bg-gray-200" } bg-opacity-10 dark:bg-opacity-20 `} >
                <span className="text-3xl mb-2">{tool.icon}</span>
                <span className="text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>

    </motion.div>
  )
}

export default Skills