import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 80,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
        }),
    ],
    build: {
        outDir: "dist",
        sourcemap: true,
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    "react-vendor": ["react", "react-dom", "react-router-dom"],
                    recoil: ["recoil"],
                },
            },
        },
    },
    server: {
        port: 3000,
    },
    optimizeDeps: {
        include: ["react", "react-dom", "react-router-dom", "recoil"],
    },
});
