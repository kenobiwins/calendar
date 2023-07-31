import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  resolve: {
    alias: {
      components: "/src/components",
      core: "/src/core",
      modules: "/src/modules",
      test: "/src/test",
      routes: "/src/routes",
      coreStore: "/src/core/store",
      authStore: "/src/modules/auth/store",
      calendarStore: "/src/modules/calendar/store",
      statisticStore: "/src/modules/statistic/store",
      theme: "/src/core/theme",
      hooks:"/src/core/hooks"
    },
  },
  build: {
    outDir: "./dist",
    assetsDir: "./dist/assets",
  },
});
