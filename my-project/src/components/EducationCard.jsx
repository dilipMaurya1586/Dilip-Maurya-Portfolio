import { motion } from 'framer-motion';

const EducationCard = ({
    education,
    index,
    selectedColor,
    isDarkMode,
    variants,
    whileHover
}) => {
    const isOdd = index % 2 === 0;

    return (
        <motion.div
            className={`relative flex ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            variants={variants}
        >
            {/* Content */}
            <motion.div
                whileHover={whileHover}
                className={`w-full   p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}
                style={{
                    marginLeft: isOdd ? '0' : 'auto',
                    marginRight: isOdd ? 'auto' : '0'
                }}
            >
                <div className="flex items-start gap-4 mb-4">
                    <div
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{
                            backgroundColor: `${selectedColor.value}20`,
                            color: selectedColor.value
                        }}
                    >
                        {education.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{education.degree}</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                            {education.institution}
                        </p>
                    </div>
                </div>
                <div className={`px-3 py-1 rounded-md inline-block text-xs font-medium mb-3 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {education.year}
                </div>
                <p className={`text-justify ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {education.description}
                </p>
            </motion.div>

            {/* Timeline Dot */}
            {/* <div
                className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full z-10 border-2 border-white dark:border-gray-900"
                style={{
                    backgroundColor: selectedColor.value,
                    boxShadow: `0 0 0 4px ${selectedColor.value}20`
                }}
            /> */}
        </motion.div>
    );
};

export default EducationCard;