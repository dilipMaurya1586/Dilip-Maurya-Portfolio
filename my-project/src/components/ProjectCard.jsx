import { motion } from 'framer-motion'

const ProjectCard = ({ project, selectedColor, isDarkMode }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      animate="animate"
      className="relative overflow-hidden rounded-xl shadow-lg"
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

        {/* View Project Button - Centered */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-sm sm:text-base rounded-full text-center"
          style={{
            backgroundColor: isDarkMode ? 'white' : 'white',
            color: selectedColor.value,
            border: `2px solid ${selectedColor.value}`,
          }}
        >
          View Project
        </motion.a>
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

//       {/* Overlay */}
//       <motion.div
//         variants={{
//           initial: { opacity: 0, y: 20 },
//           hover: { opacity: 1, y: 0 }
//         }}
//         transition={{ duration: 0.3 }}
//         className={`absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 bg-gradient-to-t ${
//           isDarkMode ? 'from-gray-900' : 'from-gray-800'
//         } to-transparent bg-opacity-80`}
//       >
//         <h3 className="flex items-center text-white text-lg sm:text-xl font-medium mb-1 sm:mb-2">
//           {project.title}
//         </h3>

//         {/* Tags */}
//         <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
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

//         {/* View Project Button */}
//         <motion.a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block  px-4 py-2 text-sm sm:text-base rounded-full text-center max-w-xs mx-auto sm:ml-14"
//           style={{
//             backgroundColor: isDarkMode ? 'white' : 'white',
//             color: selectedColor.value,
//             border: `2px solid ${selectedColor.value}`,
//           }}
//         >
//           View Project
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default ProjectCard
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
//       <div className="h-48 overflow-hidden">
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

//       {/* Overlay */}
//       <motion.div
//         variants={{
//           initial: { opacity: 0, y: 20 },
//           hover: { opacity: 1, y: 0 }
//         }}
//         transition={{ duration: 0.3 }}
//         className={`absolute inset-0 flex flex-col justify-end p-6 bg-gray-600 
//           ${isDarkMode ? 'from-black-900 to-transparent' : 'from-black to-transparent'} bg-opacity-80`}>

//         <p className="text-gray-100 pl-10">{project.title}</p>

//         {/* //tag */}
//         <div className="flex flex-wrap gap-2 m-8 mb-4">
//           {project.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="text-xs font-medium p-1"
//               style={{
//                 // backgroundColor: selectedColor.value,
//                 color: 'white'
//               }}>
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* View Project */}
//         <motion.a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="h-15 w-40 p-2 ml-14 border-bl rounded-full text-center"
//           style={{
//             backgroundColor: `${isDarkMode ? 'white' : 'white'}`,
//             color: selectedColor.value,
//             border: `2px solid ${selectedColor.value} `,
//           }}>
//           View Project
//         </motion.a>

//       </motion.div>
//     </motion.div>
//   )
// }

// export default ProjectCard