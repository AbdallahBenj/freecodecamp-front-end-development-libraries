import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/freecodecamp-front-end-development-libraries/02-react-state-hooks-routing/",
  plugins: [react()],
});
