import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      plugins: [vue()],
      base: '/auth0-vue-test/',
      build: {
        outDir: 'docs'
      }
    }
  } else {
      return {
        plugins: [vue()],
        base: '/',
        server: {
          port: 3000,
        }
      }
    }
  }
);
  

// // // https://vitejs.dev/config/
// export default defineConfig(({ command }) => {
//   if (command === 'serve') {
//     return {
//       plugins: [vue()],
//       server: {
//         port: 3000,
//       },
//       base: '/'
//     }
//   } else {
//     // command === 'build'
//     return {
//       server: {
//         port: 3000,
//       },
//       base: '/auth-vue-app/',
//       build: {
//         outDir: 'docs'
//       }
//     }
//   }
// });