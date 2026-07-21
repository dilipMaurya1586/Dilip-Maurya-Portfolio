import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../constants/projects.jsx'

const Projects = ({ selectedColor, isDarkMode }) => {

  const javaProjects = projects.filter((project) => project.category === 'java')
  const mernProjects = projects.filter((project) => project.category === 'mern')

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

          {javaProjects.length > 0 && (
            <div className="mb-12 sm:mb-16">
              <h3
                className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 mx-4 sm:mx-10 border-l-4 pl-3"
                style={{ borderColor: selectedColor.value }}
              >
                Java Full Stack Projects
              </h3>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mx-4 sm:mx-10">
                {javaProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    selectedColor={selectedColor}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>
          )}

          {mernProjects.length > 0 && (
            <div>
              <h3
                className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 mx-4 sm:mx-10 border-l-4 pl-3"
                style={{ borderColor: selectedColor.value }}
              >
                MERN Stack Projects
              </h3>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mx-4 sm:mx-10">
                {mernProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    selectedColor={selectedColor}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  )
}

export default Projects