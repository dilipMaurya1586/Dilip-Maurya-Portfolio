import { motion } from 'framer-motion'

const ProjectCard = ({ project, selectedColor, isDarkMode }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      animate="animate"
      className="relative overflow-hidden rounded-xl shadow-lg w-full max-w-sm"
    >
      {/* Project Image */}
      <div className="h-40 sm:h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 }
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Overlay - All contents centered */}
      <motion.div
        variants={{
          initial: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 bg-gradient-to-br ${
          isDarkMode ? 'from-gray-900' : 'from-gray-800'
        } to-transparent bg-opacity-80 text-center`}
      >
        {/* Title - Centered */}
        <h3 className="text-white text-lg sm:text-xl font-medium mb-2 sm:mb-3">
          {project.title}
        </h3>

        {/* Tags - Centered */}
        <div className="flex flex-wrap justify-center gap-2 mb-3 sm:mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2 py-1 rounded"
              style={{
                backgroundColor: selectedColor.value,
                color: 'white'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons - GitHub + Live Demo, Centered */}
        <div className="flex flex-wrap justify-center gap-3">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm sm:text-base rounded-full text-center"
              style={{
                backgroundColor: selectedColor.value,
                color: 'white',
                border: `2px solid ${selectedColor.value}`,
              }}
            >
              GitHub
            </motion.a>
          )}

          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm sm:text-base rounded-full text-center"
              style={{
                backgroundColor: selectedColor.value,
                color: 'white',
                border: `2px solid ${selectedColor.value}`,
              }}
            >
              Live Demo
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard

// import { motion } from 'framer-motion'

// const ProjectCard = ({ project, selectedColor, isDarkMode }) => {
//   return (
//     <motion.div
//       whileHover="hover"
//       initial="initial"
//       animate="animate"
//       className="relative overflow-hidden rounded-xl shadow-lg"
//     >
//       {/* Project Image */}
//       <div className="h-40 sm:h-48 overflow-hidden">
//         <motion.img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover"
//           variants={{
//             initial: { scale: 1 },
//             hover: { scale: 1.1 }
//           }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>

//       {/* Overlay - All contents centered */}
//       <motion.div
//         variants={{
//           initial: { opacity: 0, y: 20 },
//           hover: { opacity: 1, y: 0 }
//         }}
//         transition={{ duration: 0.3 }}
//         className={`absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 bg-gradient-to-br ${isDarkMode ? 'from-gray-900' : 'from-gray-800'
//           } to-transparent bg-opacity-80 text-center`}
//       >
//         {/* Title - Centered */}
//         <h3 className="text-white text-lg sm:text-xl font-medium mb-2 sm:mb-3">
//           {project.title}
//         </h3>

//         {/* Tags - Centered */}
//         <div className="flex flex-wrap justify-center gap-2 mb-3 sm:mb-4">
//           {project.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="text-xs font-medium px-2 py-1 rounded"
//               style={{
//                 backgroundColor: selectedColor.value,
//                 color: 'white'
//               }}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Buttons - GitHub + Live Demo, Centered */}
//         <div className="flex flex-wrap justify-center gap-3">
//           {project.githubLink && (
//             <motion.a
//               href={project.githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-4 py-2 text-sm sm:text-base rounded-full text-center"
//               style={{
//                 backgroundColor: selectedColor.value,
//                 color: 'white',
//                 border: `2px solid ${selectedColor.value}`,
//               }}
//             >
//               GitHub
//             </motion.a>
//           )}

//           {project.link && (
//             <motion.a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-4 py-2 text-sm sm:text-base rounded-full text-center"
//               style={{
//                 backgroundColor: selectedColor.value,
//                 color: 'white',
//                 border: `2px solid ${selectedColor.value}`,
//               }}
//             >
//               Live Demo
//             </motion.a>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default ProjectCard
