import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ColorPicker = ({ colors, selectedColor, onSelectColor, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full shadow-md transition-all duration-150 ease-in-out"
        style={{ backgroundColor: selectedColor.value }}
        aria-label="Color picker"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white/90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 12, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ 
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            className={`absolute right-0 z-50 mt-2 p-3 w-48 rounded-xl shadow-2xl ${
              isDarkMode 
                ? 'bg-gray-800/95 border border-gray-700 backdrop-blur-md' 
                : 'bg-white/95 border border-gray-200 backdrop-blur-md'
            }`}
          >
            <div className="grid grid-cols-5 gap-2.5">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    onSelectColor(color);
                    setIsOpen(false);
                  }}
                  className={`h-7 w-7 rounded-full transition-all duration-200 ${
                    selectedColor.value === color.value 
                      ? 'ring-3 ring-offset-1 ring-white/90 shadow-md' 
                      : 'hover:ring-2 hover:ring-white/70'
                  }`}
                  style={{ 
                    backgroundColor: color.value,
                  }}
                  aria-label={color.name}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const ColorPicker = ({ colors, selectedColor, onSelectColor, isDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 rounded-full shadow-md"
//         style={{ backgroundColor: selectedColor.value }}
//         aria-label="Color picker"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 text-white"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
//           />
//         </svg>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//             className={`absolute right-0 left-auto m-2 p-1 w-40 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}
//           >
//             <div className="grid grid-cols-5 gap-6">
//               {colors.map((color) => (
//                 <button
//                   key={color.name}
//                   onClick={() => {
//                     onSelectColor(color);
//                     setIsOpen(false);
//                   }}
//                   className="h-7 w-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
//                   style={{ 
//                     backgroundColor: color.value,
//                     border: selectedColor.value === color.value ? '2px solid white' : 'none'
//                   }}
//                   aria-label={color.name}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ColorPicker;