import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const vitestConfig = {
  test: {
    globals: true,
    environment: "jsdom",
  },
};

export default defineConfig({
  plugins: [react()],
  ...vitestConfig,
});
