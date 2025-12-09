import { defineConfig } from 'vite'

// Use a relative base so built assets work when the site is served from a subpath
// and enable sourcemaps to help debug production runtime errors.
export default defineConfig({
  base: './',
  build: {
    sourcemap: true
  }
})
