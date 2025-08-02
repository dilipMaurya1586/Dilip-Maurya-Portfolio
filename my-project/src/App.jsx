import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Experience from './sections/Experience';
import ColorPicker from './components/ColorPicker';
import DarkModeToggle from './components/DarkModeToggle';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { colors } from './constants/colors';

const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const sectionsRef = useRef({
    '/': 'home',
    '/about': 'about',
    '/education': 'education',
    '/experience': 'experience',
    '/projects': 'projects',
    '/skills': 'skills',
    '/contact': 'contact'
  });

  useEffect(() => {
    const sectionId = sectionsRef.current[pathname];
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Router>
        <ScrollRestoration />
        <div className="flex relative">
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            selectedColor={selectedColor}
            isDarkMode={isDarkMode}
          />

          {/* Main content area */}
          <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:pl-64' : 'pl-0'}`}>
            {/* Top-right controls */}
            <div className="fixed top-4 right-4 z-50 flex space-x-2">
              <ColorPicker
                colors={colors}
                selectedColor={selectedColor}
                onSelectColor={setSelectedColor}
                isDarkMode={isDarkMode}
              />
              <DarkModeToggle
                isDarkMode={isDarkMode}
                toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
              />
            </div>

            {/* Scrollable section container */}
            <div className="overflow-y-auto h-screen scroll-smooth pr-2 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
              <Routes>
                <Route path="/" element={
                  <>
                    <Home id="home" selectedColor={selectedColor} isDarkMode={isDarkMode} />
                    <About id="about" selectedColor={selectedColor} isDarkMode={isDarkMode} />
                    <Education id="education" selectedColor={selectedColor} isDarkMode={isDarkMode} />
                    <Experience id="experience" selectedColor={selectedColor} isDarkMode={isDarkMode} />
                    <Projects id="projects" selectedColor={selectedColor} isDarkMode={isDarkMode} />
                    <Skills id="skills" selectedColor={selectedColor} isDarkMode={isDarkMode} />
                    <Contact id="contact" selectedColor={selectedColor} isDarkMode={isDarkMode} />
                  </>
                } />
                <Route path="/about" element={<About fullPage id="about" selectedColor={selectedColor} isDarkMode={isDarkMode} />} />
                <Route path="/education" element={<Education fullPage id="education" selectedColor={selectedColor} isDarkMode={isDarkMode} />} />
                <Route path="/experience" element={<Experience fullPage id="experience" selectedColor={selectedColor} isDarkMode={isDarkMode} />} />
                <Route path="/projects" element={<Projects fullPage id="projects" selectedColor={selectedColor} isDarkMode={isDarkMode} />} />
                <Route path="/skills" element={<Skills fullPage id="skills" selectedColor={selectedColor} isDarkMode={isDarkMode} />} />
                <Route path="/contact" element={<Contact fullPage id="contact" selectedColor={selectedColor} isDarkMode={isDarkMode} />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
