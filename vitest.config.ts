import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.{spec,test}.*"],
    coverage: {
      reporter: ["text"],
      include: ["**/index.ts"],
    },
  },
});
