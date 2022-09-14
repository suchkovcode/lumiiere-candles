export function toggleMenuDrobdown() {
   const drobdownItem = document.querySelectorAll(".canvas-menu__drobdown");
   drobdownItem.forEach((element) => {
      element.addEventListener("click", (e) => {
         e.target.classList.toggle("active");
      });
   });
}