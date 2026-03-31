import type { RouteRecordRaw } from "vue-router";
import AuthLayout from "../../../layouts/AuthLayout.vue";
import LoginView from "../../../features/auth/views/LoginView.vue";
import RegisterView from "../../../features/auth/views/RegisterView.vue";

export const authRoutes: RouteRecordRaw = {
  path: "/auth",
  component: AuthLayout,
  children: [
    { path: "login", name: "login", component: LoginView },
    { path: "register", name: "register", component: RegisterView }
  ]
};
