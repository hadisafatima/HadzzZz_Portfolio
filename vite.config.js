import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    // react()
  ],
  // this tells vite to not treat .html file as .js file by adding html assets
  assetsInclude: ['**/*.html'],

  // // these will help make a multi page site, bcuz by default it can only handle on .html file
  build: {
    rollupOptions: {
      input: {
        main: './home.html',
        about: './aboutHadzz.html',
        projects: './projects.html',
        whatIKnow: './whatIKnow.html',
        contact: './contact.html'
        // Add other HTML files here
      }
    }
  }
  // added later
})