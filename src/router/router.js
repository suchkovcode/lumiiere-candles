// Для чего нужнг этот код?
// Обрабатывает поведенние ссылки по умолчанию и изменяет местоположение
const route = (event) => {
   event = event || window.event; //Фиксуируем события клика для ссылки
   event.preventDefault();
   window.history.pushState({}, "", event.target.href);
   handleLocation();
};

// Для чего нужнг этот код?
const routes = {
   404: "/pages/404.html",
   "/": "/pages/index.html",
   "/about": "/pages/about.html",
   "/lorem": "/pages/lorem.html",
};

// Для чего нужнг этот код?
const handleLocation = async () => {
   const path = window.location.pathname;
   const route = routes[path] || routes[404];
   const html = await fetch(route).then((data) => data.text());
   document.getElementById("main-page").innerHTML = html;
};

// Для чего нужнг этот код?
window.onpopstate = handleLocation;
window.route = route;
handleLocation();
