import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Auth,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
