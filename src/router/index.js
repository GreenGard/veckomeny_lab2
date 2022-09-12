import { createRouter, createWebHistory } from "vue-router";
import MealsView from "../views/MealsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "meals",
      component: MealsView,
    },
      ],
});

export default router;
