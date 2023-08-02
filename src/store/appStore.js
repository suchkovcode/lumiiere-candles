import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import img_1 from "@/assets/img/webp/hero__card-1.webp";
import img_2 from "@/assets/img/webp/hero__card-2.webp";
import img_4 from "@/assets/img/webp/hero__card-4.webp";
import img_5 from "@/assets/img/webp/hero__card-5.webp";
import img_6 from "@/assets/img/webp/hero__card-6.webp";
import img_7 from "@/assets/img/webp/hero__card-7.webp";
import img_8 from "@/assets/img/webp/hero__card-8.webp";
import img_9 from "@/assets/img/webp/hero__card-9.webp";

export const useAppStore = defineStore("appStore", {
   state: () => {
      return {
         products: useStorage("product-items", [
            {
               id: "card-100-1",
               date: "04.01.2023",
               title: "Волшебству быть.",
               description: "",
               hero: img_1,
               code: {
                  small: "CNDL-VOLSH-S",
                  medium: "CNDL-VOLSH-M",
                  large: "CNDL-VOLSH-L",
               },
               price: {
                  small: "4.99",
                  medium: "9.99",
                  large: "14.99",
               },
               weight: {
                  small: "115",
                  medium: "270",
                  large: "400",
               },

               category: ["имбирный пряник", "бобы тонка", "ваниль", "сахар", "Джингл Беллс"],
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-2",
               date: "04.01.2023",
               title: "ALL I WANT FOR XMAS IS YOU",
               description: "",
               hero: img_2,
               code: {
                  small: "CNDL-XMAS-S",
                  medium: "CNDL-XMAS-M",
                  large: "CNDL-XMAS-L",
               },
               price: {
                  small: "4.99",
                  medium: "9.99",
                  large: "14.99",
               },
               weight: {
                  small: "115",
                  medium: "270",
                  large: "400",
               },

               category: ["перечная мята", "корица ", "чай", "ваниль", "гвоздика", "чудо"],
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-4",
               date: "04.01.2023",
               title: "Гарри Поттер",
               description: "",
               hero: img_4,
               code: {
                  small: "CNDL-HAR-S",
                  medium: "CNDL-HAR-M",
                  large: "CNDL-HAR-L",
               },
               price: {
                  small: "4.99",
                  medium: "9.99",
                  large: "14.99",
               },
               weight: {
                  small: "115",
                  medium: "270",
                  large: "400",
               },

               category: ["пряный тыквенный латте", "золотой снитч"],
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-5",
               date: "04.01.2023",
               title: "Рон Уизли",
               description: "",
               hero: img_5,
               code: {
                  small: "CNDL-RON-S",
                  medium: "CNDL-RON-M",
                  large: "CNDL-RON-L",
               },
               price: {
                  small: "4.99",
                  medium: "9.99",
                  large: "14.99",
               },
               weight: {
                  small: "115",
                  medium: "270",
                  large: "400",
               },

               category: ["ром", "изюм", "карамель", "сливочное масло", "ириска", "веснушки"],
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-6",
               date: "04.01.2023",
               title: "Гермиона",
               description: "",
               hero: img_6,
               code: {
                  small: "CNDL-HERM-S",
                  medium: "CNDL-HERM-M",
                  large: "CNDL-HERM-L",
               },
               price: {
                  small: "4.99",
                  medium: "9.99",
                  large: "14.99",
               },
               weight: {
                  small: "115",
                  medium: "270",
                  large: "400",
               },

               category: ["шоколадное печенье", "Вингардиум ЛевиОсса"],
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-7",
               date: "04.01.2023",
               title: "Драко",
               description: "",
               hero: img_7,
               code: {
                  small: "CNDL-DRAC-S",
                  medium: "CNDL-DRAC-M",
                  large: "CNDL-DRAC-L",
               },
               price: {
                  small: "4.99",
                  medium: "9.99",
                  large: "14.99",
               },
               weight: {
                  small: "115",
                  medium: "270",
                  large: "400",
               },

               category: ["вербена", "сандал", "ирис", "зелёное яблоко", "амбра", "чистая кровь"],
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-8",
               date: "04.01.2023",
               title: "Итачи",
               description: "",
               hero: img_8,
               code: {
                  small: "CNDL-ITAC-S",
                  medium: "CNDL-ITAC-M",
                  large: "CNDL-ITAC-L",
               },
               price: {
                  small: "4.99",
                  medium: "9.99",
                  large: "14.99",
               },
               weight: {
                  small: "115",
                  medium: "270",
                  large: "400",
               },

               category: ["миндаль", "черный кофе", "перо ворона"],
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-9",
               date: "04.01.2023",
               title: "Какаши",
               description: "",
               hero: img_9,
               code: {
                  small: "CNDL-KAK-S",
                  medium: "CNDL-KAK-M",
                  large: "CNDL-KAK-L",
               },
               price: {
                  small: "4.99",
                  medium: "9.99",
                  large: "14.99",
               },
               weight: {
                  small: "115",
                  medium: "270",
                  large: "400",
               },

               category: ["кокос", "бамбук", "дерево", "чидори"],
               intensity: 5,
               isFavorite: false,
            },
         ]),

         nav: {
            firstNav: [
               {
                  id: 1,
                  name: "Мелтсы",
                  to: "/catalog",
               },
               {
                  id: 2,
                  name: "Спички",
                  to: "/catalog",
               },
               {
                  id: 3,
                  name: "Наборы",
                  to: "/catalog",
               },
               {
                  id: 4,
                  name: "Открытки",
                  to: "/catalog",
               },
               {
                  id: 5,
                  name: "Бестселлеры",
                  to: "/catalog",
               },
               {
                  id: 6,
                  name: "Соевые свечи",
                  to: "/catalog",
               },
            ],

            secondNav: [
               {
                  id: 1,
                  name: "Уход",
                  to: "/care",
               },
               {
                  id: 2,
                  name: "О нас",
                  to: "/about",
               },
               {
                  id: 3,
                  name: "Сотрудничество",
                  to: "/partners",
               },

               {
                  id: 4,
                  name: "Ответы на вопросы",
                  to: "/faq",
               },
               {
                  id: 5,
                  name: "Доставка и оплата",
                  to: "/delivery",
               },

               {
                  id: 6,
                  name: "Договор оферты",
                  to: "/oferta",
               },
               {
                  id: 7,
                  name: "Политика конфиденциальности",
                  to: "/policy",
               },
            ],
         },

         isActiveFavorite: false,
         isActiveBacket: false,
      };
   },

   actions: {
      updateFavorite(cardId, state) {
         const index = this.products.findIndex((element) => element.id === cardId);
         this.products[index].isFavorite = state;
      },

      updateFavoriteCanvas(state) {
         this.isActiveFavorite = state;
      },

      updateBacketCanvas(state) {
         this.isActiveBacket = state;
      },
   },
});
