
import { motion } from 'framer-motion'
const SkillCard = ({skill, name, level, selectedColor, delay, icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            className="w-full"
        >
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                    {skill.icon && <div className="mr-2">{skill.icon}</div>}
                    <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: delay + 0.2, duration: 0.8 }}
                    className={`h-2.5 rounded-full`}
                    style={{ backgroundColor: selectedColor.value }}
                />
            </div>
        </motion.div>
    )
}

export default SkillCard








//import { motion } from 'framer-motion'
// const SkillCard = ({ skill, selectedColor, isDarkMode }) => {
//   return (
//     <motion.div  
//       whileHover={{ y: -5 }}
//       className={`p-3 rounded-lg flex items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
//     >
//       <div
//         className="p-2 rounded-md mr-3"
//         style={{ backgroundColor: selectedColor.value, opacity: 0.8 }}
//       >
//         <skill.icon className="h-5 w-5 text-white" />
//       </div>
//       <div className="flex-1">
//         <h4 className="font-medium">{skill.name}</h4>
//         <div className={`w-full h-2 mt-1 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
//           <div
//             className="h-full rounded-full"
//             style={{
//               width: `${skill.level}%`,  
//               backgroundColor: selectedColor.value
//             }}
//           ></div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default SkillCard
















