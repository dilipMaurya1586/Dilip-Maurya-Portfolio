import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
      // Add other aliases as needed
      // '@components': path.resolve(__dirname, './src/components'),
      // '@sections': path.resolve(__dirname, './src/sections'),
    },
  },
});


// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@constants': path.resolve(__dirname, './src/constants'),
//     },
//   },
// });


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path';

// // https://vite.dev/config/
// export default defineConfig({
//     plugins: [
//     react(),
//     tailwindcss(),
//   ],
// })
