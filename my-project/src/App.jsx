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
  // Initialize directly from window width instead of always starting true —
  // this was the cause of the sidebar showing open on first mobile load.
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  );
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Auto-hide top controls (hamburger, color picker, dark mode toggle) while
  // scrolling down, and bring them back while scrolling up.
  const scrollContainerRef = useRef(null);
  const [showTopControls, setShowTopControls] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;
      const diff = currentScrollY - lastScrollY.current;

      // Always show near the very top of the page, ignore tiny scroll jitters
      if (currentScrollY < 50) {
        setShowTopControls(true);
      } else if (diff > 5) {
        setShowTopControls(false); // scrolling down
      } else if (diff < -5) {
        setShowTopControls(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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
            showTopControls={showTopControls}
          />

          {/* Main content area */}
          <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:pl-64' : 'pl-0'}`}>
            {/* Top-right controls - auto-hide on scroll down, reappear on scroll up */}
            <div
              className={`fixed top-4 right-4 z-50 flex space-x-2 transition-all duration-300 ${
                showTopControls ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
              }`}
            >
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
            <div
              ref={scrollContainerRef}
              className="overflow-y-auto h-screen scroll-smooth pr-2 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600"
            >
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
                <Route path="/about" element={<div className="pt-20 sm:pt-0"><About fullPage id="about" selectedColor={selectedColor} isDarkMode={isDarkMode} /></div>} />
                <Route path="/education" element={<div className="pt-20 sm:pt-0"><Education fullPage id="education" selectedColor={selectedColor} isDarkMode={isDarkMode} /></div>} />
                <Route path="/experience" element={<div className="pt-20 sm:pt-0"><Experience fullPage id="experience" selectedColor={selectedColor} isDarkMode={isDarkMode} /></div>} />
                <Route path="/projects" element={<div className="pt-20 sm:pt-0"><Projects fullPage id="projects" selectedColor={selectedColor} isDarkMode={isDarkMode} /></div>} />
                <Route path="/skills" element={<div className="pt-20 sm:pt-0"><Skills fullPage id="skills" selectedColor={selectedColor} isDarkMode={isDarkMode} /></div>} />
                <Route path="/contact" element={<div className="pt-20 sm:pt-0"><Contact fullPage id="contact" selectedColor={selectedColor} isDarkMode={isDarkMode} /></div>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;