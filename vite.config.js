import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import path from 'path';
import process from "react-syntax-highlighter/.eslintrc.js";
dotenv.config({ path: path.resolve(__dirname, './config.env') });

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env': { ...process.env},
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Use `@` to refer to `src/`
    },
  },
});
