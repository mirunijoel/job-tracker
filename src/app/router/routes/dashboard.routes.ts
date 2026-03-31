import type { RouteRecordRaw } from "vue-router";
import DashboardLayout from "../../../layouts/DashboardLayout.vue";
import DashboardView from "../../../features/jobs/views/DashboardView.vue";
import JobsListView from "../../../features/jobs/views/JobsListView.vue";

export const dashboardRoutes: RouteRecordRaw = {
  path: "/",
  component: DashboardLayout,
  children: [
    { path: "", name: "dashboard", component: DashboardView },
    { path: "jobs", name: "jobs-list", component: JobsListView }
  ]
};
