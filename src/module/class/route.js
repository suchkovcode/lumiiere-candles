/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
// @ts-nocheck
/* eslint-disable no-unused-vars */
export class Router {
   static routes = [];
   static root = "/";
   static render = "main";

   constructor(options) {
      this.routes = options.routes;
      this.root = options.root;
      this.renderContainer = document.querySelector(options.render);
      this.init();
   }

   init() {
      this.#route();
      window.addEventListener("hashchange", () => this.#route());
   }

   #route() {
      const allRoute = document.getElementsByClassName("route");
      const roteArr = [...allRoute];

      if (roteArr.length !== 0) {
         roteArr.forEach((routeItem) => {
            routeItem.addEventListener("click", (event) => {
               event.preventDefault();
               event.stopPropagation();
               window.history.pushState({}, "", event.currentTarget.href);
               this.#locationHandler();
            });
         });
      }

      window.addEventListener("popstate", () => {
         this.#locationHandler();
      });

      window.route = this;
   }

   #render(htmlTempalte) {
      return (this.renderContainer.innerHTML = htmlTempalte);
   }

   #getFragment() {
      const matchLocation = window.location.href.match(/#([^#]*)(\?.*)?$/)[1];
      let fragmentLocation = "";
      matchLocation === "" ? (fragmentLocation = "/") : (fragmentLocation = matchLocation);
      return Object.keys(this.routes).includes(fragmentLocation) ? fragmentLocation : "/404";
   }

   #locationHandler = async () => {
      const location = this.#getFragment();
      const route = this.routes[location] ?? this.routes["/404"];
      if (this.routes[location] === "/404") window.history.replaceState({}, "", "/404");
      const html = await fetch(route.template).then((response) => response.text());
      const renderHtml = this.#localStorage(location, html);
      this.#render(html);
      this.#chageMeta(route.meta.title, route.meta.description, window.location);
   };

   #localStorage(key, html) {
      const getItem = localStorage.getItem(key);
      let renderHtml = "";

      if (getItem) {
         renderHtml = getItem;
      } else {
         localStorage.setItem(key, html);
         renderHtml = html;
      }
      return renderHtml;
   }

   #chageMeta(title, description, url) {
      document.querySelector("title").textContent = title;
      document.querySelector("meta[name='description']").setAttribute("content", description);
      document.querySelector("meta[name='url']").setAttribute("content", url);
   }
}
