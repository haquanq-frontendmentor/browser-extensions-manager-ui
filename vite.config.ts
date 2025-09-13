import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/ts"),
            "@components": path.resolve(__dirname, "./src/ts/components"),
            "@stores": path.resolve(__dirname, "./src/ts/stores"),
            "@utils": path.resolve(__dirname, "./src/ts/utils"),
            "@@types": path.resolve(__dirname, "./src/ts/types"),
        },
    },
    build: { emptyOutDir: true },
    base: "/browser-extensions-manager-ui/",
});
