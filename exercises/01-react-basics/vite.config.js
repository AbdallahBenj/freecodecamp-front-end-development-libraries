import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/freecodecamp-front-end-development-libraries/01-react-basics/",
  plugins: [react()],
});
