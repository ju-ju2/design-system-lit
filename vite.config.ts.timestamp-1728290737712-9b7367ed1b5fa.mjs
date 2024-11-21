// vite.config.ts
import { fileURLToPath } from "node:url";
import { globSync } from "file:///Users/l-20230007/design-system-monorepo-sample-copy/node_modules/glob/dist/esm/index.js";
import { extname, relative, resolve } from "path";
import { defineConfig } from "file:///Users/l-20230007/design-system-monorepo-sample-copy/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/l-20230007/design-system-monorepo-sample-copy/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///Users/l-20230007/design-system-monorepo-sample-copy/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import litcss from "file:///Users/l-20230007/design-system-monorepo-sample-copy/node_modules/vite-plugin-lit-css/dist/index.mjs";
import { viteStaticCopy } from "file:///Users/l-20230007/design-system-monorepo-sample-copy/node_modules/vite-plugin-static-copy/dist/index.js";
import viteTsconfigPaths from "file:///Users/l-20230007/design-system-monorepo-sample-copy/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/l-20230007/design-system-monorepo-sample-copy/packages/design-system-lit";
var __vite_injected_original_import_meta_url = "file:///Users/l-20230007/design-system-monorepo-sample-copy/packages/design-system-lit/vite.config.ts";
var vite_config_default = defineConfig(({ command }) => {
  const baseUserConfig = {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  };
  if (command === "serve") {
    return {
      ...baseUserConfig,
      plugins: [viteTsconfigPaths()],
      server: {
        watch: {
          usePolling: true
        }
      }
    };
  } else {
    return {
      ...baseUserConfig,
      build: {
        sourcemap: true,
        minify: true,
        css: {
          devSourcemap: true
        },
        lib: {
          entry: resolve(__vite_injected_original_dirname, "src/components/index.ts"),
          formats: ["es"]
        },
        rollupOptions: {
          // external: ["lit", "storybook"],
          input: Object.fromEntries(
            globSync("src/**/*.{ts,tsx}", {
              ignore: [
                "src/**/*.{stories,test,spec}.ts",
                "src/storybook/**",
                "src/assets/storybook/**"
              ]
            }).map((file) => {
              return [
                relative(
                  "src",
                  file.slice(0, file.length - extname(file).length)
                ),
                fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
              ];
            })
          ),
          output: {
            assetFileNames: "assets/[name][extname]",
            entryFileNames: "[name].js"
          }
        },
        copyPublicDir: false
      },
      plugins: [
        libInjectCss(),
        dts({
          include: ["src"],
          exclude: [
            "src/**/*.{stories,test,spec}.ts",
            "src/storybook/**",
            "src/assets/storybook/**"
          ]
        }),
        viteTsconfigPaths(),
        ...viteStaticCopy({
          targets: [
            {
              src: resolve(__vite_injected_original_dirname, "../common/assets/images/*"),
              dest: "images"
            },
            {
              src: resolve(__vite_injected_original_dirname, "../common/assets/font/*"),
              dest: "fonts"
            }
          ]
        }),
        litcss({
          include: "**/*.scss"
        })
      ],
      publicDir: resolve(__vite_injected_original_dirname, "../design-system-common/assets"),
      resolve: {
        alias: {
          "/src": resolve(__vite_injected_original_dirname, "src")
        }
      }
    };
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbC0yMDIzMDAwNy9kZXNpZ24tc3lzdGVtLW1vbm9yZXBvLXNhbXBsZS1jb3B5L3BhY2thZ2VzL2Rlc2lnbi1zeXN0ZW0tbGl0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbC0yMDIzMDAwNy9kZXNpZ24tc3lzdGVtLW1vbm9yZXBvLXNhbXBsZS1jb3B5L3BhY2thZ2VzL2Rlc2lnbi1zeXN0ZW0tbGl0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9sLTIwMjMwMDA3L2Rlc2lnbi1zeXN0ZW0tbW9ub3JlcG8tc2FtcGxlLWNvcHkvcGFja2FnZXMvZGVzaWduLXN5c3RlbS1saXQvdml0ZS5jb25maWcudHNcIjsvKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5cbmltcG9ydCB7IGdsb2JTeW5jIH0gZnJvbSBcImdsb2JcIjtcbmltcG9ydCB7IGV4dG5hbWUsIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgVXNlckNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzc1wiO1xuaW1wb3J0IGxpdGNzcyBmcm9tIFwidml0ZS1wbHVnaW4tbGl0LWNzc1wiO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tIFwidml0ZS1wbHVnaW4tc3RhdGljLWNvcHlcIjtcbmltcG9ydCB2aXRlVHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCB9KSA9PiB7XG4gIGNvbnN0IGJhc2VVc2VyQ29uZmlnOiBVc2VyQ29uZmlnID0ge1xuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgYXBpOiBcIm1vZGVybi1jb21waWxlclwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGlmIChjb21tYW5kID09PSBcInNlcnZlXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYmFzZVVzZXJDb25maWcsXG4gICAgICBwbHVnaW5zOiBbdml0ZVRzY29uZmlnUGF0aHMoKV0sXG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICB1c2VQb2xsaW5nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGNvbW1hbmQgPT09ICdidWlsZCdcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYmFzZVVzZXJDb25maWcsXG4gICAgICBidWlsZDoge1xuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgZGV2U291cmNlbWFwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHMvaW5kZXgudHNcIiksXG4gICAgICAgICAgZm9ybWF0czogW1wiZXNcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAvLyBleHRlcm5hbDogW1wibGl0XCIsIFwic3Rvcnlib29rXCJdLFxuICAgICAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgICBnbG9iU3luYyhcInNyYy8qKi8qLnt0cyx0c3h9XCIsIHtcbiAgICAgICAgICAgICAgaWdub3JlOiBbXG4gICAgICAgICAgICAgICAgXCJzcmMvKiovKi57c3Rvcmllcyx0ZXN0LHNwZWN9LnRzXCIsXG4gICAgICAgICAgICAgICAgXCJzcmMvc3Rvcnlib29rLyoqXCIsXG4gICAgICAgICAgICAgICAgXCJzcmMvYXNzZXRzL3N0b3J5Ym9vay8qKlwiLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSkubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgcmVsYXRpdmUoXG4gICAgICAgICAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgICAgICAgICAgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIGV4dG5hbWUoZmlsZSkubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICksXG4gICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdW2V4dG5hbWVdXCIsXG4gICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIGxpYkluamVjdENzcygpLFxuICAgICAgICBkdHMoe1xuICAgICAgICAgIGluY2x1ZGU6IFtcInNyY1wiXSxcbiAgICAgICAgICBleGNsdWRlOiBbXG4gICAgICAgICAgICBcInNyYy8qKi8qLntzdG9yaWVzLHRlc3Qsc3BlY30udHNcIixcbiAgICAgICAgICAgIFwic3JjL3N0b3J5Ym9vay8qKlwiLFxuICAgICAgICAgICAgXCJzcmMvYXNzZXRzL3N0b3J5Ym9vay8qKlwiLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICB2aXRlVHNjb25maWdQYXRocygpLFxuICAgICAgICAuLi52aXRlU3RhdGljQ29weSh7XG4gICAgICAgICAgdGFyZ2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uL2NvbW1vbi9hc3NldHMvaW1hZ2VzLypcIiksXG4gICAgICAgICAgICAgIGRlc3Q6IFwiaW1hZ2VzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uL2NvbW1vbi9hc3NldHMvZm9udC8qXCIpLFxuICAgICAgICAgICAgICBkZXN0OiBcImZvbnRzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBsaXRjc3Moe1xuICAgICAgICAgIGluY2x1ZGU6IFwiKiovKi5zY3NzXCIsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHB1YmxpY0RpcjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vZGVzaWduLXN5c3RlbS1jb21tb24vYXNzZXRzXCIpLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgIFwiL3NyY1wiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMscUJBQXFCO0FBRTlCLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsU0FBUyxVQUFVLGVBQWU7QUFDM0MsU0FBUyxvQkFBZ0M7QUFDekMsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sWUFBWTtBQUNuQixTQUFTLHNCQUFzQjtBQUMvQixPQUFPLHVCQUF1QjtBQVY5QixJQUFNLG1DQUFtQztBQUE2TixJQUFNLDJDQUEyQztBQVl2VCxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUMzQyxRQUFNLGlCQUE2QjtBQUFBLElBQ2pDLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsTUFBSSxZQUFZLFNBQVM7QUFDdkIsV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsU0FBUyxDQUFDLGtCQUFrQixDQUFDO0FBQUEsTUFDN0IsUUFBUTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsT0FBTztBQUVMLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILE9BQU87QUFBQSxRQUNMLFdBQVc7QUFBQSxRQUNYLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxVQUNILGNBQWM7QUFBQSxRQUNoQjtBQUFBLFFBQ0EsS0FBSztBQUFBLFVBQ0gsT0FBTyxRQUFRLGtDQUFXLHlCQUF5QjtBQUFBLFVBQ25ELFNBQVMsQ0FBQyxJQUFJO0FBQUEsUUFDaEI7QUFBQSxRQUNBLGVBQWU7QUFBQTtBQUFBLFVBRWIsT0FBTyxPQUFPO0FBQUEsWUFDWixTQUFTLHFCQUFxQjtBQUFBLGNBQzVCLFFBQVE7QUFBQSxnQkFDTjtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFDZixxQkFBTztBQUFBLGdCQUNMO0FBQUEsa0JBQ0U7QUFBQSxrQkFDQSxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsUUFBUSxJQUFJLEVBQUUsTUFBTTtBQUFBLGdCQUNsRDtBQUFBLGdCQUNBLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLGNBQzlDO0FBQUEsWUFDRixDQUFDO0FBQUEsVUFDSDtBQUFBLFVBQ0EsUUFBUTtBQUFBLFlBQ04sZ0JBQWdCO0FBQUEsWUFDaEIsZ0JBQWdCO0FBQUEsVUFDbEI7QUFBQSxRQUNGO0FBQUEsUUFDQSxlQUFlO0FBQUEsTUFDakI7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxRQUNiLElBQUk7QUFBQSxVQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUEsVUFDZixTQUFTO0FBQUEsWUFDUDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLFFBQ0Qsa0JBQWtCO0FBQUEsUUFDbEIsR0FBRyxlQUFlO0FBQUEsVUFDaEIsU0FBUztBQUFBLFlBQ1A7QUFBQSxjQUNFLEtBQUssUUFBUSxrQ0FBVywyQkFBMkI7QUFBQSxjQUNuRCxNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUssUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxjQUNqRCxNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGLENBQUM7QUFBQSxRQUNELE9BQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxRQUNYLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxXQUFXLFFBQVEsa0NBQVcsZ0NBQWdDO0FBQUEsTUFDOUQsU0FBUztBQUFBLFFBQ1AsT0FBTztBQUFBLFVBQ0wsUUFBUSxRQUFRLGtDQUFXLEtBQUs7QUFBQSxRQUNsQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
