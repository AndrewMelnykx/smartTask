import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  build: {
    outDir: "./",
    emptyOutDir: false,
  },
  base: "/",
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "src/data"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@redux": path.resolve(__dirname, "src/components/redux"),
      "@slices": path.resolve(__dirname, "src/components/redux/slices"),
      "@selectors": path.resolve(__dirname, "src/components/redux/selectors"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@users": path.resolve(__dirname, "src/components/users"),
    },
  },
});
