import { motion } from 'framer-motion'

const ProjectCard = ({ project, selectedColor, isDarkMode }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      animate="animate"
      className="relative overflow-hidden rounded-xl shadow-lg w-full sm:w-80"
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

      {/* Mobile-only caption bar: always visible, no hover/tap needed.
          Hidden on sm+ since desktop uses the hover overlay below instead. */}
      <div
        className={`sm:hidden px-3 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        <h4 className={`text-sm font-medium truncate ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          {project.title}
        </h4>
        {project.tags && project.tags.length > 0 && (
          <span
            className="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded"
            style={{ backgroundColor: selectedColor.value, color: 'white' }}
          >
            {project.tags[0]}
          </span>
        )}
      </div>

      {/* Desktop hover overlay - full details on hover, hidden on mobile since
          touch devices can't hover (that's what left mobile cards blank before) */}
      <motion.div
        variants={{
          initial: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.3 }}
        className={`hidden sm:flex absolute inset-0 flex-col justify-center items-center p-4 sm:p-6 bg-gradient-to-br ${
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

      {/* Mobile-only buttons - shown below caption bar since there's no hover overlay on mobile */}
      <div className={`sm:hidden flex gap-2 px-3 pb-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-1.5 text-xs font-medium rounded-full"
            style={{
              backgroundColor: selectedColor.value,
              color: 'white',
            }}
          >
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-1.5 text-xs font-medium rounded-full"
            style={{
              backgroundColor: selectedColor.value,
              color: 'white',
            }}
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard
