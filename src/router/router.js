import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/store/appStore";

const routes = [
   {
      path: "",
      name: "app",
      meta: {
         title: "Lumiiere Candles | Главная",
      },
      component: () => import("@/page/Home.vue"),
   },
   {
      path: "/catalog",
      name: "catalog",
      meta: {
         title: "Lumiiere Candles | Каталог",
      },
      component: () => import("@/page/Catalog.vue"),
   },
   {
      path: "/catalog/candles",
      name: "candles",
      meta: {
         title: "Lumiiere Candles | Свечи",
      },
      component: () => import("@/page/Candles.vue"),
   },
   {
      path: "/catalog/melts",
      name: "candles",
      meta: {
         title: "Lumiiere Candles | Мельтсы",
      },
      component: () => import("@/page/Melts.vue"),
   },
   {
      path: "/catalog/:id",
      name: "post",
      meta: {
         title: "Lumiiere Candles | Старница товара",
      },
      component: () => import("@/page/Post.vue"),
   },
   {
      path: "/about",
      name: "about",
      meta: {
         title: "Lumiiere Candles | О нас",
      },
      component: () => import("@/page/About.vue"),
   },
   {
      path: "/care",
      name: "care",
      meta: {
         title: "Lumiiere Candles | Уход",
      },
      component: () => import("@/page/Care.vue"),
   },
   {
      path: "/faq",
      name: "faq",
      meta: {
         title: "Lumiiere Candles | FAQ",
      },
      component: () => import("@/page/Faq.vue"),
   },
   {
      path: "/delivery",
      name: "delivery",
      meta: {
         title: "Lumiiere Candles | Доставка",
      },
      component: () => import("@/page/Delivery.vue"),
   },
   {
      path: "/partners",
      name: "partners",
      meta: {
         title: "Lumiiere Candles | Сотрудничество",
      },
      component: () => import("@/page/Partners.vue"),
   },
   {
      path: "/oferta",
      name: "oferta",
      meta: {
         title: "Lumiiere Candles | Публичная оферта",
      },
      component: () => import("@/page/Oferta.vue"),
   },
   {
      path: "/policy",
      name: "policy",
      meta: {
         title: "Lumiiere Candles | Политика конфиденциальности",
      },
      component: () => import("@/page/Policy.vue"),
   },
   {
      path: "/404",
      name: "404",
      meta: {
         title: "Lumiiere Candles | 404",
      },
      component: () => import("@/page/404.vue"),
   },
   {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
   },
];

const scrollBehaviorFunction = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve({ el: "#root", left: 0, top: 0, behavior: "smooth" });
      }, 200);
   });
};

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior: scrollBehaviorFunction,
});

router.beforeEach((to) => {
   const store = useAppStore();
   store.updateFavoriteCanvas(false);
   store.updateBacketCanvas(false);
   document.title = to.meta?.title ?? "Lumiiere Candles";
});

export default router;
