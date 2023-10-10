import { defineConfig } from 'vite'
import { preact } from '@preact/preset-vite'
import { config } from 'dotenv'

config()

export default defineConfig({
    plugins: [preact()],
    define: { global: {}, 'process.env': process.env },
    esbuild: { logOverride: { 'this-is-undefined-in-esm': 'silent' } },
    resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } } // <-- AWS Amplify & Auth
})