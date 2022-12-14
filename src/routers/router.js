const routes = {
   "#/404": {
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

   "#/about": {
      template: "/pages/about.html",
      meta: {
         title: "Lumiiere Candles | О нас",
         description: "Hello about",
      },
   },

   "#/catalog": {
      template: "/pages/catalog.html",
      meta: {
         title: "Lumiiere Candles | Каталог",
         description: "Hello catalog",
      },
   },

   "#/care": {
      template: "/pages/care.html",
      meta: {
         title: "Lumiiere Candles | Уход",
         description: "Hello care",
      },
   },

   "#/delivery": {
      template: "/pages/delivery.html",
      meta: {
         title: "Lumiiere Candles | Доставка и оплата",
         description: "Hello delivery",
      },
   },

   "#/faq": {
      template: "/pages/faq.html",
      meta: {
         title: "Lumiiere Candles | Ответы на вопросы",
         description: "Hello faq",
      },
   },

   "#/partners": {
      template: "/pages/partners.html",
      meta: {
         title: "Lumiiere Candles | Сотрудничество",
         description: "Hello patners",
      },
   },

   "#/oferta": {
      template: "/pages/oferta.html",
      meta: {
         title: "Lumiiere Candles | Публичная оферта",
         description: "Hello patners",
      },
   },

   "#/policy": {
      template: "/pages/policy.html",
      meta: {
         title: "Lumiiere Candles | Политика конфиденциальности",
         description: "Hello policy",
      },
   },
};

const route = (event) => {
   event = event || window.event;
   event.preventDefault();
   window.history.pushState({}, "", event.currentTarget.href);
   locationHandler();
};

const locationHandler = async () => {
   let location = window.location.hash;
   if (location.length == 0 || location.length == 1) {
      location = "/";
   }
   const route = routes[location] || routes["/404"];
   const html = await fetch(route.template).then((response) => response.text());

   const main = document.getElementById("main");
   const metaDescription = document.querySelector("meta[name='description']");
   const metaUrl = document.querySelector("meta[name='url']");
   document.title = route.meta.title;
   metaDescription.setAttribute("content", route.meta.description);
   metaUrl.setAttribute("content", window.location);
   main.innerHTML = html;
   if (!routes[location]) {
      window.history.replaceState({}, "", "#/404");
   }
};

window.onpopstate = locationHandler;
window.route = route;
locationHandler();
