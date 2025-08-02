import { motion } from 'framer-motion';
import { BriefcaseIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const ExperienceCard = ({ experience, selectedColor, isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
                y: -8,
                boxShadow: `0 20px 25px -5px ${selectedColor.value}10, 0 8px 10px -6px ${selectedColor.value}10`
            }}
            viewport={{ once: true }}
            transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 20
            }}
            className={`p-6 rounded-2xl shadow-lg transition-all duration-300
                ${isDarkMode ? 'bg-gray-800/90 hover:bg-gray-800' : 'bg-white/95 hover:bg-white'}
                border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                backdrop-blur-sm`}
        >
            <div className="flex items-start gap-4 mb-5">
                <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className={`p-3 rounded-xl mr-2 shadow-md 
                        ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}
                    style={{ backgroundColor: `${selectedColor.value}20` }}
                >
                    <BriefcaseIcon 
                        className="h-6 w-6" 
                        style={{ color: selectedColor.value }} 
                    />
                </motion.div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold tracking-tight">{experience.position}</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {experience.company} • {experience.duration}
                            </p>
                        </div>
                        {experience.link && (
                            <a 
                                href={experience.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-1 rounded-full hover:bg-gray-200/30 dark:hover:bg-gray-700/50"
                                aria-label="Company website"
                            >
                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            
            <ul className={`space-y-3 pl-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {experience.responsibilities.map((item, index) => (
                    <motion.li 
                        key={index} 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <span
                            className="inline-block mt-2 mr-3 h-2 w-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: selectedColor.value }}
                        />
                        <span className="text-sm md:text-base leading-relaxed">{item}</span>
                    </motion.li>
                ))}
            </ul>
            
            {experience.technologies && experience.technologies.length > 0 && (
                <motion.div 
                    className="mt-6 pt-4 border-t border-dashed flex flex-wrap items-center justify-center gap-2"
                    style={{ borderColor: `${selectedColor.value}30` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {experience.technologies.map((tech, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                                backgroundColor: `${selectedColor.value}15`,
                                color: selectedColor.value,
                                border: `1px solid ${selectedColor.value}30`
                            }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default ExperienceCard;

// import { motion } from 'framer-motion';
// import { BriefcaseIcon } from '@heroicons/react/24/outline';

// const ExperienceCard = ({ experience, selectedColor, isDarkMode }) => {
//     return (
//         <motion.div
//             whileHover={{ y: -5 }}
//             className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//         >
//             <div className="flex items-start mb-4">
//                 <div
//                     className="p-3 rounded-lg mr-4"
//                     style={{ backgroundColor: selectedColor.value, opacity: 0.8 }}
//                 >
//                     <BriefcaseIcon className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-bold">{experience.position}</h3>
//                     <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                         {experience.company} • {experience.duration}
//                     </p>
//                 </div>
//             </div>
//             <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 {experience.responsibilities.map((item, index) => (
//                     <li key={index} className="flex items-start">
//                         <span
//                             className="inline-block mt-1 mr-2 h-2 w-2 rounded-full"
//                             style={{ backgroundColor: selectedColor.value }}
//                         />
//                         {item}
//                     </li>
//                 ))}
//             </ul>
//             <div className="mt-4 flex flex-wrap gap-2">
//                 {experience.technologies.map((tech, index) => (
//                     <span
//                         key={index}
//                         className="px-3 py-1 rounded-full text-sm"
//                         style={{
//                             backgroundColor: `${selectedColor.value}20`,
//                             color: selectedColor.value
//                         }}
//                     >
//                         {tech}
//                     </span>
//                 ))}
//             </div>
//         </motion.div>
//     );
// };

// export default ExperienceCard;