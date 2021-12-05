import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './config/theme.less'), 'utf8'))

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@src':path.resolve(__dirname, './src/'),
      pages:path.resolve(__dirname, './src/pages'),
      components:path.resolve(__dirname, './src/components')
    }
  },
  plugins: [react()],
  css:{
    preprocessorOptions:{
      less:{
        modifyVars:themeVariables,
        javascriptEnabled:true
      }
    }
  }
})
