import { createRouter, createWebHistory } from "vue-router";
import { authRoutes } from "./routes/auth.routes";
import { dashboardRoutes } from "./routes/dashboard.routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [dashboardRoutes, authRoutes]
});

export default router;
