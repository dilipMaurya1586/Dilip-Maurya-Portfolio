import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, toggleSidebar, selectedColor, isDarkMode }) => {
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    closed: {
      x: '-100%',
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300 }
    },
    closed: {
      opacity: 0,
      x: -20
    }
  };

  const sections = [
    { id: 'home', path: '/', name: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
    { id: 'about', path: '/about', name: 'About', icon: <UserIcon className="h-5 w-5" /> },
    { id: 'education', path: '/education', name: 'Education', icon: <AcademicCapIcon className="h-5 w-5" /> },
    { id: 'experience', path: '/experience', name: 'Experience', icon: <BriefcaseIcon className="h-5 w-5" /> },
    { id: 'projects', path: '/projects', name: 'Projects', icon: <CodeBracketIcon className="h-5 w-5" /> },
    { id: 'skills', path: '/skills', name: 'Skills', icon: <CpuChipIcon className="h-5 w-5" /> },
    { id: 'contact', path: '/contact', name: 'Contact', icon: <EnvelopeIcon className="h-5 w-5" /> }
  ];

  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={`fixed top-0 left-0 h-full w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-40`}
      >
        <div className=" h-full flex flex-col mt-8">
          <motion.div
            variants={itemVariants}
            className="flex-1"
          >
            <h1
              className="m-5 p-7 tracking-widest ">
              <span style={{ color: selectedColor.value }} className='text-5xl font-bold ml-8 underline'>D</span>
              <span className='text-5xl font-bold underline'>ilip</span>
            </h1>

            <nav className="space-y-1.5 m-1 p-1 ml-14 ">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ScrollLink
                    to={section.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active-section"
                    className={`h-14 w-40 py-3 px-4 rounded-md duration-200 cursor-pointer flex items-center gap-3 
                      ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                      }`}
                    style={{
                      color: isDarkMode ? 'white' : 'black'
                    }}
                  >
                    <span style={{ color: selectedColor.value }}>
                      {section.icon}
                    </span>
                    <RouterLink
                      to={section.path}
                      className="block w-full"
                      style={{
                        color: 'inherit',
                        textDecoration: 'none'
                      }}
                    >
                      {section.name}
                    </RouterLink>
                  </ScrollLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>
      </motion.div>

      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md"
        style={{ backgroundColor: selectedColor.value }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
};

// Icon components
const HomeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const AcademicCapIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const BriefcaseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CodeBracketIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const CpuChipIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9V5m0 4H4m4 0l-4-4m8 0V5m0 4h4m-4 0l4-4m0 8v4m0-4h4m-4 0l4 4m-8 0v4m0-4H8m4 0l-4 4" />
  </svg>
);

const EnvelopeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default Sidebar;
