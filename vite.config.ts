import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), tsconfigPaths(), eslint()],
    server: {
      port: 3000,
    },
  }
})
