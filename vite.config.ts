import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

export default defineConfig({
    root: 'src',
    build: {
        assetsDir: 'static',
        outDir: __dirname + '/dist',
        emptyOutDir: true,
        sourcemap: true,
        chunkSizeWarningLimit: 700,
    },
    server: {
        port: 3000,
    },
    esbuild: {
        charset: 'utf8',
        legalComments: 'none',
        target: 'safari12',
    },
    plugins: [
        vanillaExtractPlugin(),
        reactPlugin({
            babel: {
                parserOpts: {
                    plugins: ['decorators-legacy', 'classProperties'],
                },
            },
        }),
    ],
})
