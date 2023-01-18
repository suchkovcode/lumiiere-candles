/* eslint-disable no-empty */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-constant-condition */
export class Router {
   routes = [];
   root = "/";
   render = "main";

   constructor(options) {
      this.routes = options.routes;
      this.root = options.root;
      this.render = document.querySelector(options.render);
      this.#route();
   }

   #route() {
      const allRoute = document.getElementsByClassName("route");
      if (allRoute) {
         for (let i = 0; i < allRoute.length; i++) {
            allRoute[i].addEventListener("click", (event) => {
               event = event || window.event;
               event.preventDefault();
               window.history.pushState({}, "", event.currentTarget.href);
               this.#locationHandler();
            });
         }
      }
      window.onpopstate = this.#locationHandler();
      window.route = this;
   }

   #render(htmlTempalte) {
      const html = htmlTempalte;
      this.render.innerHTML = html;
   }

   #getFragment() {
      const matchLocation = window.location.href.match(/#(.*)$/);
      let fragmentLocation = "";
      if (matchLocation != null) {
         if (matchLocation[1] === "") {
            fragmentLocation = "/";
         }
         if (matchLocation[1]) {
            fragmentLocation = matchLocation[1];
         }
      } else {
         fragmentLocation = "/";
      }
      return fragmentLocation;
   }

   #locationHandler = async () => {
      const location = this.#getFragment();
      const route = this.routes[location] ?? this.routes["/404"];
      if (this.routes[location] === "/404") window.history.replaceState({}, "", "/404");
      const html = await fetch(route.template).then((response) => response.text());
      const renderHTml = this.#localStorage(location, html);
      this.#render(renderHTml);
      this.#chageMeta(route.meta.title, route.meta.description, window.location);
   };

   #localStorage(location, html) {
      const getItem = localStorage.getItem(location);
      let renderHtml = "";
      if (getItem) {
         renderHtml = getItem;
      } else {
         localStorage.setItem(location, html);
         renderHtml = html;
      }
      return renderHtml;
   }

   #chageMeta(title, description, url) {
      const metaTitle = document.querySelector("title");
      const metaDescription = document.querySelector("meta[name='description']");
      const metaUrl = document.querySelector("meta[name='url']");
      metaTitle.textContent = title;
      metaDescription.setAttribute("content", description);
      metaUrl.setAttribute("content", url);
   }
}