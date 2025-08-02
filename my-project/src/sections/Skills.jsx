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


      <div className="grid md:grid-cols-2 gap-20 ml-10 mr-10" >

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}   >
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="space-y-6">
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





// import { motion } from 'framer-motion'
// import SkillCard from '../components/SkillCard';
// import {
//   FaJava,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaHtml5,
//   FaCss3Alt
// } from 'react-icons/fa';

// import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';
// import { DiCode } from 'react-icons/di';

// const Skills = ({ delay, id, selectedColor, isDarkMode }) => {
//   const technicalSkills = [
//     { name: 'Data Structures & Algorithms (DSA) - JAVA', level: 90, icon: <FaJava className="text-[#007396]" size={24} /> },
//     { name: 'JavaScript', level: 85, icon: <FaJs className="text-[#F7DF1E]" size={24} /> },
//     { name: 'React', level: 90, icon: <FaReact className="text-[#61DAFB]" size={24} /> },
//     { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-[#339933]" size={24} /> },
//     { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-[#47A248]" size={24} /> },
//     { name: 'MySQL', level: 50, icon: <SiMysql className="text-[#4479A1]" size={24} /> },
//     { name: 'Express', level: 70, icon: <SiExpress className="text-[#000000]" size={24} /> },
//     { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-[#38B2AC]" size={24} /> },
//     {
//       name: 'HTML/CSS', level: 95, icon: (
//         <div className="flex">
//           <FaHtml5 className="text-[#E34F26]" size={24} />
//           <FaCss3Alt className="text-[#1572B6]" size={24} />
//         </div>
//       )
//     },
//   ]
//   const tools = [
//     { name: "Visual Studio Code", icon: "💻" },
//     { name: "GitHub", icon: "🐙" },
//     { name: "Postman", icon: "📡" },
//     { name: "Hoppscotch", icon: "🚀" },
//     { name: "Versal", icon: "🎓" },
//     { name: "MongoDB", icon: "🍃" },
//     { name: "Bootstrap", icon: "🅱️" },
//     { name: "Words", icon: "📝" }
//   ];
//   const professionalSkills = [
//     { name: 'Problem Solving', level: 90, icon: <DiCode className="text-blue-500" size={24} /> },
//     { name: 'Project Management', level: 80, icon: <FaDatabase className="text-purple-500" size={24} /> },
//   ]
//   return (
//     <motion.div
//       id={id}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="max-w-5xl mx-auto"
//     >
//       <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-8" style={{ color: selectedColor.value }}>My Skills</h1>

//       <div className="grid md:grid-cols-2 gap-8">
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
//           <div className="space-y-6">
//             {technicalSkills.map((skill, index) => (
//               <SkillCard
//                 key={index}
//                 skill={skill}
//                 selectedColor={selectedColor}
//                 isDarkMode={isDarkMode}
//               />
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ x: 20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <h2 className="text-2xl font-bold mb-6">Professional Skills</h2>
//           <div className="space-y-6">
//             {professionalSkills.map((skill, index) => (
//               <SkillCard
//                 key={index}
//                 skill={skill}
//                 selectedColor={selectedColor}
//                 isDarkMode={isDarkMode}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="mt-12">
//         <div className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Tools & Technologies</h2>

//           <div
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
//             {tools.map((tool, index) => (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay }}
//                 whileHover={{ y: -5 }}
//                 key={index}
//                 className={`p-2 m-2 rounded-lg flex flex-col items-center 
//                                     ${selectedColor.bg} bg-opacity-10 dark:bg-opacity-20 bg-gray-500`} >
//                 <span className="text-3xl mb-2">{tool.icon}</span>
//                 <span className="text-center">{tool.name}</span>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }
// export default Skills


