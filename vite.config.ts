import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@server": path.resolve(__dirname, "./src/server"),
      "@client": path.resolve(__dirname, "./src/client"),
    },
  },
});
