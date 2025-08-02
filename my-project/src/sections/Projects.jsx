import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../constants/projects.jsx'

const Projects = ({ selectedColor, isDarkMode }) => {
  return (
    <section id='projects' className="min-h-screen py-8 px-4 sm:px-6 md:px-10 lg:py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            My <span style={{ color: selectedColor.value }}>Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-4 sm:mx-10">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
                selectedColor={selectedColor}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects




// import { motion } from 'framer-motion'
// import ProjectCard from '../components/ProjectCard.jsx'
// import { projects } from '../constants/projects.jsx'

// const Projects = ({ selectedColor, isDarkMode }) => {
//   return (
//     <section id='projects' className="min-h-screen py-16 px-5 md:px-10">
//       <div className="container mx-auto ">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//             My <span style={{ color: selectedColor.value }}>Projects</span>
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10">
//             {projects.map((project, index) => (
//               <ProjectCard 
//                 key={index}
//                 project={project}
//                 selectedColor={selectedColor}
//                 isDarkMode={isDarkMode}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Projects