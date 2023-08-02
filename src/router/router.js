import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/store/appStore";

import Home from "@/page/Home.vue";
import Catalog from "@/page/Catalog.vue";
import Post from "@/page/Post.vue";
import About from "@/page/About.vue";
import Care from "@/page/Care.vue";
import Faq from "@/page/Faq.vue";
import Delivery from "@/page/Delivery.vue";
import Partners from "@/page/Partners.vue";
import Oferta from "@/page/Oferta.vue";
import Policy from "@/page/Policy.vue";
import NotFound from "@/page/404.vue";


const routes = [
   {
      path: "",
      name: "app",
      meta: {
         title: "Lumiiere Candles | Главная",
      },
      component: Home,
   },
   {
      path: "/catalog",
      name: "catalog",
      meta: {
         title: "Lumiiere Candles | Каталог",
      },
      component: Catalog,
   },
   {
      path: "/catalog/:id",
      name: "post",
      meta: {
         title: "Lumiiere Candles | Старница товара",
      },
      component: Post,
   },
   {
      path: "/about",
      name: "about",
      meta: {
         title: "Lumiiere Candles | О нас",
      },
      component: About,
   },
   {
      path: "/care",
      name: "care",
      meta: {
         title: "Lumiiere Candles | Уход",
      },
      component: Care,
   },
   {
      path: "/faq",
      name: "faq",
      meta: {
         title: "Lumiiere Candles | FAQ",
      },
      component: Faq,
   },
   {
      path: "/delivery",
      name: "delivery",
      meta: {
         title: "Lumiiere Candles | Доставка",
      },
      component: Delivery,
   },
   {
      path: "/partners",
      name: "partners",
      meta: {
         title: "Lumiiere Candles | Сотрудничество",
      },
      component: Partners,
   },
   {
      path: "/oferta",
      name: "oferta",
      meta: {
         title: "Lumiiere Candles | Публичная оферта",
      },
      component: Oferta,
   },
   {
      path: "/policy",
      name: "policy",
      meta: {
         title: "Lumiiere Candles | Политика конфиденциальности",
      },
      component: Policy,
   },
   {
      path: "/404",
      name: "404",
      meta: {
         title: "Lumiiere Candles | 404",
      },
      component: NotFound,
   },
   {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior() {
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve({ el: "#root", left: 0, top: 0, behavior: "smooth" });
         }, 200);
      });
   },
});

router.beforeEach((to) => {
   const store = useAppStore();
   document.title = to.meta?.title ?? "Lumiiere Candles";
   store.updateFavoriteCanvas(false);
   store.updateBacketCanvas(false);
});

export default router;
