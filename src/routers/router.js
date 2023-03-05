import { Router } from "../module/routers";

new Router({
   root: "/",
   render: "main",
   routes: {
      "/404": {
         template: "/pages/404.html",
         meta: {
            title: "Lumiiere Candles | Станицы не существует",
            description: "Hello 404",
         },
      },

      "/": {
         template: "/pages/home.html",
         meta: {
            title: "Lumiiere Candles | Главная",
            description: "Hello home",
         },
      },

      "/about": {
         template: "/pages/about.html",
         meta: {
            title: "Lumiiere Candles | О нас",
            description: "Hello about",
         },
      },

      "/catalog": {
         template: "/pages/catalog.html",
         meta: {
            title: "Lumiiere Candles | Каталог",
            description: "Hello catalog",
         },
      },

      "/care": {
         template: "/pages/care.html",
         meta: {
            title: "Lumiiere Candles | Уход",
            description: "Hello care",
         },
      },

      "/delivery": {
         template: "/pages/delivery.html",
         meta: {
            title: "Lumiiere Candles | Доставка и оплата",
            description: "Hello delivery",
         },
      },

      "/faq": {
         template: "/pages/faq.html",
         meta: {
            title: "Lumiiere Candles | Ответы на вопросы",
            description: "Hello faq",
         },
      },

      "/partners": {
         template: "/pages/partners.html",
         meta: {
            title: "Lumiiere Candles | Сотрудничество",
            description: "Hello patners",
         },
      },

      "/oferta": {
         template: "/pages/oferta.html",
         meta: {
            title: "Lumiiere Candles | Публичная оферта",
            description: "Hello patners",
         },
      },

      "/policy": {
         template: "/pages/policy.html",
         meta: {
            title: "Lumiiere Candles | Политика конфиденциальности",
            description: "Hello policy",
         },
      },
   },
});
