import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import BookmarksPage from "../views/BookmarksPage.vue";
import EventDetailsPage from "../views/EventDetailsPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/bookmarks",
    name: "BookmarksPage",
    component: BookmarksPage,
  },
  {
    path: "/events/:id",
    name: "EventDetailsPage",
    component: EventDetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
