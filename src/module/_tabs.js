/* eslint-disable no-unused-expressions */
function tabs() {
   const tab = document.querySelector(".tabs");
   const toggler = document.querySelector(".tabs__toggle");
   // const options = document.querySelectorAll(".tabs__item");
   const input = document.querySelectorAll(".tabs__option-input");

   let state = false;

   input[0].checked = true;

   function handlerEvent(event) {
      event.stopPropagation();
      event.target === toggler && !state ? open() : close();
      handlerOptions(event);
   }

   function handlerOptions(event) {
      const option = event.target.classList.contains("tabs__option-input");

      if (option) {
         toggler.innerText = event.target.dataset.value;
         toggler.dataset.value = event.target.dataset.value;
      }
   }

   function open() {
      tab.classList.add("active");
      state = true;
   }

   function close() {
      tab.classList.remove("active");
      state = false;
   }

   tab.addEventListener("click", handlerEvent);
}
setTimeout(tabs, 500);
