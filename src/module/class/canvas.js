export function toggleMenuDrobdown() {
   const drobdownItem = document.querySelectorAll(".canvas-menu__drobdown");
   drobdownItem.forEach((element) => {
      element.addEventListener("click", (e) => {
         e.target.classList.toggle("active");
      });
   });
}

export function close() {
   const headerWrapper = document.querySelector(".header");
   const headerCanvas = document.querySelector(".canvas");
   const headerSearch = document.querySelector(".search");

   function close(e) {
      const eventElement = e.target.className;
      if (eventElement === "canvas__close") {
         headerCanvas.classList.remove("active");
         headerWrapper.classList.remove("active");
      }
      if (eventElement === "search__close") {
         headerSearch.classList.remove("active");
         headerWrapper.classList.remove("active");
      }
   }

   headerCanvas.addEventListener("click", close);
   headerSearch.addEventListener("click", close);
}
