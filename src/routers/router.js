const routes = {
   "/404": {
      template: "/pages/404.html",
      meta: {
         title: "Lumiiere Candles | Станицы не существует",
         description: "Hello 404",
      },
   },

   "home": {
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

   "/contact": {
      template: "/pages/contact.html",
      meta: {
         title: "Lumiiere Candles | Контакты",
         description: "Hello contact",
      },
   },

   "/catalog": {
      template: "/pages/catalog.html",
      meta: {
         title: "Lumiiere Candles | Каталог",
         description: "Hello catalog",
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
   let location = window.location.hash.replace("#", "");
   if (location.length == 0 || location.length == 1) {
      location = "home";
   }
   const main = document.getElementById("main");
   const metaDescription = document.querySelector("meta[name='description']");
   const metaUrl = document.querySelector("meta[name='url']");
   const route = routes[location] || routes["/404"];
   const html = await fetch(route.template).then((response) => response.text());

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
