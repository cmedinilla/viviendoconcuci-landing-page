// eslint-disable-next-line no-undef
const URL_BASE = process.env.URL_BASE || '/viviendoconcuci-landing-page/';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: URL_BASE,
})
