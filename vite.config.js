import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to the GitHub repo name for GitHub Pages deployment.
// If deploying to a custom domain (e.g. www.denesconstruction.com),
// change base to '/' and add a public/CNAME file with the domain name.
export default defineConfig({
  plugins: [react()],
  base: '/denes-construction/',
})
