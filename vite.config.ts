/** @type {import('vite').UserConfig} */
import { fileURLToPath } from "node:url";

import { globSync } from "glob";
import { extname, relative, resolve } from "path";
import { defineConfig, UserConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import litcss from "vite-plugin-lit-css";
import { viteStaticCopy } from "vite-plugin-static-copy";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  const baseUserConfig: UserConfig = {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  };

  if (command === "serve") {
    return {
      ...baseUserConfig,
      plugins: [viteTsconfigPaths()],
      server: {
        watch: {
          usePolling: true,
        },
      },
    };
  } else {
    // command === 'build'
    return {
      ...baseUserConfig,
      build: {
        sourcemap: true,
        minify: true,
        css: {
          devSourcemap: true,
        },
        lib: {
          entry: resolve(__dirname, "src/components/index.ts"),
          formats: ["es"],
        },
        rollupOptions: {
          // external: ["lit", "storybook"],
          input: Object.fromEntries(
            globSync("src/**/*.{ts,tsx}", {
              ignore: [
                "src/**/*.{stories,test,spec}.ts",
                "src/storybook/**",
                "src/assets/storybook/**",
              ],
            }).map((file) => {
              return [
                relative(
                  "src",
                  file.slice(0, file.length - extname(file).length)
                ),
                fileURLToPath(new URL(file, import.meta.url)),
              ];
            })
          ),
          output: {
            assetFileNames: "assets/[name][extname]",
            entryFileNames: "[name].js",
            manualChunks: () => "everything.js", // 모든 파일을 하나의 청크로 병합
          },
        },
        copyPublicDir: false,
      },
      plugins: [
        libInjectCss(),
        dts({
          include: ["src"],
          exclude: [
            "src/**/*.{stories,test,spec}.ts",
            "src/storybook/**",
            "src/assets/storybook/**",
          ],
        }),
        viteTsconfigPaths(),
        ...viteStaticCopy({
          targets: [
            {
              src: resolve(__dirname, "../common/assets/images/*"),
              dest: "images",
            },
            {
              src: resolve(__dirname, "../common/assets/font/*"),
              dest: "fonts",
            },
          ],
        }),
        litcss({
          include: "**/*.scss",
        }),
      ],
      publicDir: resolve(__dirname, "../design-system-common/assets"),
      resolve: {
        alias: {
          "/src": resolve(__dirname, "src"),
        },
      },
    };
  }
});
