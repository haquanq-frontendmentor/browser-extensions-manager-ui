import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./"),
            "@components": path.resolve(__dirname, "./components"),
            "@stores": path.resolve(__dirname, "./stores"),
            "@helpers": path.resolve(__dirname, "./helpers"),
            "@@types": path.resolve(__dirname, "./types"),
        },
    },
    root: "src/",
    build: { outDir: "../dist/", emptyOutDir: true },
    base: "/browser-extensions-manager-ui/",
});
