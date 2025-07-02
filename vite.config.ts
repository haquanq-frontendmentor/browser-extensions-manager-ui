import path from "path";
import { UserConfig } from "vite";
import { InlineConfig } from "vitest/node";

export default {
    root: "src/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/ts"),
            "@components": path.resolve(__dirname, "./src/ts/components"),
            "@stores": path.resolve(__dirname, "./src/ts/stores"),
            "@utils": path.resolve(__dirname, "./src/ts/utils"),
            "@@types": path.resolve(__dirname, "./src/ts/types"),
        },
    },
    test: {
        root: "./",
        environment: "jsdom",
        coverage: {
            enabled: true,
            provider: "v8",
        },
        reporters: "verbose",
        css: true,
    },
} satisfies UserConfig & { test: InlineConfig };
