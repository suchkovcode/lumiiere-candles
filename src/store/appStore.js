import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import img_1 from "@/assets/img/webp/hero__card-1.webp";
import img_2 from "@/assets/img/webp/hero__card-2.webp";
import img_3 from "@/assets/img/webp/hero__card-3.webp";
import img_4 from "@/assets/img/webp/hero__card-4.webp";
import img_5 from "@/assets/img/webp/hero__card-5.webp";
import img_6 from "@/assets/img/webp/hero__card-6.webp";
import img_7 from "@/assets/img/webp/hero__card-7.webp";
import img_8 from "@/assets/img/webp/hero__card-8.webp";
import img_9 from "@/assets/img/webp/hero__card-9.webp";
import img_10 from "@/assets/img/webp/hero__card-10.webp";
import img_11 from "@/assets/img/webp/hero__card-11.webp";
import img_12 from "@/assets/img/webp/hero__card-12.webp";
import img_13 from "@/assets/img/webp/hero__card-13.webp";
import img_14 from "@/assets/img/webp/hero__card-14.webp";
import img_15 from "@/assets/img/webp/hero__card-15.webp";
import img_16 from "@/assets/img/webp/hero__card-16.webp";
import img_17 from "@/assets/img/webp/hero__card-17.webp";
import img_18 from "@/assets/img/webp/hero__card-18.webp";
import img_19 from "@/assets/img/webp/hero__card-19.webp";
import img_20 from "@/assets/img/webp/hero__card-20.webp";

export const useAppStore = defineStore("appStore", {
   state: () => {
      return {
         products: [
            {
               id: "card-100-1",
               date: 1,
               title: "Волшебству быть.",
               description:
                  "Помните, как вы дергали маму за куртку и спрашивали 'А мы купим этот пряничный домик?'. Зажигая эту свечу Ваш дом наполнит аромат самого настоящего Нового года. Если вы, как и я, любите слушать ароматы всего, что вас окружает, то это запах того самого пряника, когда вы его откусили.",
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

               tag: ["имбирный пряник", "бобы тонка", "ваниль", "сахар", "Джингл Беллс"],
               aroma: "Десертные",
               collection: "Новый год",
               category: "дополнительно",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-2",
               date: 2,
               title: "ALL I WANT FOR XMAS IS YOU",
               description:
                  "Всегда при наступлении холодов, нашей душонке хочется как-то согреться и мы бежим в теплых носочках заваривать себе чай или кофеек, но зимой нам хочется чего-то особенного и мы добавляем туда корицы/ванили и сразу как-то согревает немного сильнее и настроение становится намного лучше. Вот это оно, только с легким ароматом перечной мяты :)",
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

               tag: ["перечная мята", "корица ", "чай", "ваниль", "гвоздика", "чудо"],
               aroma: "Свежие",
               collection: "Новый год",
               category: "наборы",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-3",
               date: 3,
               title: "Гарри Поттер",
               description:
                  "Поттер, учишься балету? Представь, что ты на завтраке в Хогсмиде, повсюду аромат тыквенного сока, сливочного пива, карамели и кофе. Обволакивающий, тёплый, уютный, просто отвал всего. Пахнет, как твой настоящий друг.",
               hero: img_3,
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

               tag: ["пряный тыквенный латте", "золотой снитч"],
               aroma: "Десертные",
               collection: "Гарри Поттер",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-4",
               date: 4,
               title: "Рон Уизли",
               description:
                  "Тёплый и сладкий аромат домашней выпечки, уюта и веснушек, как в доме у миссис Уизли. Если уткнуться носиком носом в бордовый свитер Рона, который связала ему матушка, от него будет пахнуть именно так. Эта свеча точно разыграет твой аппетит!",
               hero: img_4,
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

               tag: ["ром", "изюм", "карамель", "сливочное масло", "ириска", "веснушки"],
               aroma: "Десертные",
               collection: "Гарри Поттер",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-5",
               date: 5,
               title: "Гермиона",
               description:
                  "Малышка Грейнджер пахнет настоящим домашним шоколадным печеньем, заклинаниями, которые нужно произносить правильно, а также отвагой и добротой.",
               hero: img_5,
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

               tag: ["шоколадное печенье", "Вингардиум ЛевиОсса"],
               aroma: "Десертные",
               collection: "Гарри Поттер",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-6",
               date: 6,
               title: "Драко",
               description:
                  "Мужественный и пленительный аромат с нотками сочного зелёного яблока. Такой же как и сам Драко. Если вы хотите, чтобы у вас дома пахло секси мужиком, вам точно нужна эта свеча.",
               hero: img_6,
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

               tag: ["вербена", "сандал", "ирис", "зелёное яблоко", "амбра", "чистая кровь"],
               aroma: "Мужественные",
               collection: "Гарри Поттер",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-7",
               date: 7,
               title: "Итачи",
               description:
                  "Мастер гендзюцу, опасный боец и просто красавчик, который пахнет черным кофе и миндалем. Мы влюблены. А техника такого уровня на него не действует!",
               hero: img_7,
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

               tag: ["миндаль", "черный кофе", "перо ворона"],
               aroma: "Мужественные",
               collection: "Аниме",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-8",
               date: 8,
               title: "Какаши",
               description:
                  "У этого парня есть все шансы стать твоим крашем, и не только потому, что он сказочно красив, но и потому, что он пахнет нежным кокосиком и свежим бамбуком. Еще у него белоснежные волосы, а весь секрет в кокосовом масле. Только тссс…",
               hero: img_8,
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

               tag: ["кокос", "бамбук", "дерево", "чидори"],
               aroma: "Природные",
               collection: "Аниме",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-9",
               date: 9,
               title: "Леви",
               description:
                  "Представьте, как вы утыкаетесь носом в выстиранную, глаженную белоснежную рубашку. Аромат «Хрустит» от чистоты. Потому, что Леви напрямую ассоциируется с идеалом и чистотой.",
               hero: img_9,
               code: {
                  small: "CNDL-LEVI-S",
                  medium: "CNDL-LEVI-M",
                  large: "CNDL-LEVI-L",
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

               tag: ["лимон", "цветок хлопка", "фиалка", "кашемир", "сандал", "пудра", "чистота"],
               aroma: "Природные",
               collection: "Аниме",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-10",
               date: 10,
               title: "Полумна",
               description:
                  "В детстве я всегда мечтала об очках, как у Полумны. Ее странность и абсолютная непохожесть на других героев Поттерианы покоряла меня до глубины души. А вы задумывались, как пахнут мозгошмыги? Этот аромат проникнет в вашу душу и сведет с ума. (Но мозг не размягчит, обещаю) Экстравагантный, яркий и безумно насыщенный, сладкий и такой необычный. Именно так, пахнет Полумна. P.s. Раньше этот аромат принадлежал Вики, но он ей абсолютно не подходил, а сейчас, он нашел свою настоящую хозяйку :)",
               hero: img_10,
               code: {
                  small: "CNDL-LUNA-S",
                  medium: "CNDL-LUNA-M",
                  large: "CNDL-LUNA-L",
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

               tag: ["вишневые леденцы", "лимонад", "лайм", "апельсин", "мозгошмыги"],
               aroma: "Фруктовые",
               collection: "Гарри Поттер",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-11",
               date: 11,
               title: "Том Реддл",
               description: "в процессе придумывания :)",
               hero: img_11,
               code: {
                  small: "CNDL-RDDL-S",
                  medium: "CNDL-RDDL-M",
                  large: "CNDL-RDDL-L",
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

               tag: ["миндаль", "черный кофе", "перо ворона"],
               aroma: "Мужественные",
               collection: "Гарри Поттер",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-12",
               date: 12,
               title: "Фред и Джордж",
               description:
                  "Короли Хогвартских розыгрышей. Знамениты своими сумасшедшими выходками и шалостями. Ребята, которые свели с ума всех персонажей Поттерианы. И нас, честно говоря, тоже.",
               hero: img_12,
               code: {
                  small: "CNDL-TWIN-S",
                  medium: "CNDL-TWIN-M",
                  large: "CNDL-TWIN-L",
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

               tag: ["яблочный штрудель", "шалость удалась"],
               aroma: "Фруктовые",
               collection: "Гарри Поттер",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-13",
               date: 13,
               title: "Профессор Снейп",
               description:
                  "Снейп.. Как мы ненавидели его в начале, и как мы полюбили его в конце. Потрясающий, многогранный, бесчувственный и такой любящий одновременно. Все ради любви, даже после стольких лет.",
               hero: img_13,
               code: {
                  small: "CNDL-SNAP-S",
                  medium: "CNDL-SNAP-M",
                  large: "CNDL-SNAP-L",
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

               tag: ["лаванда", "полынь", "пачули", "шалфей"],
               aroma: "Природные",
               collection: "Гарри Поттер",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-14",
               date: 14,
               title: "Хината",
               description:
                  "Свеча 'Хината' сочетает в себе не только щепотку магии, но и чувственный аромат лаванды, стручков ванили и цедры апельсина, Эта свечуля создана для тех, кто ценит прекрасное и ищет покой и умиротворение. Если бы Наруто был знаком с магазином Lumiiere, он бы сказал: 'Свечка 'Хината' - это то, что мне нужно'. Помнишь известную фразу Хинаты 'Никто не знает, что произойдет в следующую секунду. Так почему бы не принимать каждый миг, как дар?' Прислушайся к Хинате и наслаждайся каждым мгновением, зажигая эту свечу?",
               hero: img_14,
               code: {
                  small: "CNDL-HNTL-S",
                  medium: "CNDL-HNTL-M",
                  large: "CNDL-HNTL-L",
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

               tag: ["лаванда", "стручки ванили", "цедра апельсина", "Бьякуган"],
               aroma: "Цветочные",
               collection: "Аниме",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-15",
               date: 15,
               title: "Тоторо",
               description:
                  "Приготовься окунуться в волшебный мир Тоторо! Ощути ароматы арбуза, лимонада и пушистого пузика, которые вместе творят чудеса, словно сам Тоторо взмахивает лохматой лапкой. Зажги свечу и позволь ей наполнить твой дом магией лесных духов и сказочными приключениями. Представь, что ты прогуливаешься с Тоторо под зонтиком в дождливый день или летаешь на кошачьем автобусе вместе с Мэй и Сацуки. А кто знает, может быть, тебе удастся познакомиться с озорными духами-дустеликами и научиться вызывать их с помощью свечи? Ведь волшебство всегда рядом, когда ты веришь в него!",
               hero: img_15,
               code: {
                  small: "CNDL-WDS-S",
                  medium: "CNDL-WDS-M",
                  large: "CNDL-WDS-L",
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

               tag: ["арбуз", "лимонад", "пушистое пузико"],
               aroma: "Свежие",
               collection: "Аниме",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-16",
               date: 16,
               title: "Наруто",
               description:
                  "Свеча для тех, кто хочет стать Хокаге! Взрывной и немного сумасшедший персонаж с ароматом дерзких цитрусов. Парень, который свернул горы, покорил стихии и наши нежные сердца. Это путь ниндзя, датте баё!",
               hero: img_16,
               code: {
                  small: "CNDL-NARU-S",
                  medium: "CNDL-NARU-M",
                  large: "CNDL-NARU-L",
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

               tag: ["грейпфрут", "лимон", "мандарин", "цитрон", "нарутомаки"],
               aroma: "Фруктовые",
               collection: "Аниме",
               category: "свечи",
               intensity: 5,
               isFavorite: false,
            },
            {
               id: "card-100-17",
               date: 17,
               title: "Саске",
               description:
                  "Молчаливый, скрытный и загадочный с идеально подходящим ему ароматом черной смородины и жасмина. Словно ястреб, распахнувший крылья.",
               hero: img_17,
               code: {
                  small: "CNDL-SAS-S",
                  medium: "CNDL-SAS-M",
                  large: "CNDL-SAS-L",
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

               tag: ["жасмин", "черная смородина", "аматерасу"],
               aroma: "Природные",
               collection: "Аниме",
               category: "свечи",
               intensity: 4,
               isFavorite: false,
            },
            {
               id: "card-100-18",
               date: 18,
               title: "Зачарованные",
               description:
                  "Сказка из нашего детства! Если ты последний вышел во двор, то роль Фиби и Пайпер всегда были заняты, оставались лишь Прю и Пейдж. А как все девчонки мечтали вырасти и выйти за Коула? Аромат этой свечи, как на чердаке у Зачарованных, где среди старой деревянной мебели лежит пыльная книга таинств, закипает зелье с дикими ягодами, а сестры, произносят сильные заклинания, держась за руки.",
               hero: img_18,
               code: {
                  small: "CNDL-CHARM-S",
                  medium: "CNDL-CHARM-M",
                  large: "CNDL-CHARM-L",
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

               tag: ["тиковое дерево", "шелковица", "морошка", "клевер", "травы", "книга таинств"],
               aroma: "Десертные",
               collection: "Игры",
               category: "свечи",
               intensity: 4,
               isFavorite: false,
            },
            {
               id: "card-100-19",
               date: 19,
               title: "Мальбонте",
               description:
                  "И в Мальбонте есть два начала: темное и светлое, и в нашей свече есть терпкость соснового леса и нежность озера в лесу. Пахнет энергией, природой и силой.",
               hero: img_19,
               code: {
                  small: "CNDL-BONT-S",
                  medium: "CNDL-BONT-M",
                  large: "CNDL-BONT-L",
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

               tag: ["река", "сосновые ветки", "цветы", "энергия", "тьма и свет"],
               aroma: "Природные",
               collection: "Игры",
               category: "свечи",
               intensity: 4,
               isFavorite: false,
            },
            {
               id: "card-100-20",
               date: 20,
               title: "Венти",
               description:
                  "Все знают, как пахнут одуванчики? Этот весенний аромат с легкой горчинкой, свежестью зеленого клевера и алое. Можно было бы подумать, что Венти, как девчонка с его нежным ароматом, но он же такой милашка! Как можно было подобрать ему что-то иное? Поле с одуванчиками, поющая лира, и песни барда. Романтика...",
               hero: img_20,
               code: {
                  small: "CNDL-VENT-S",
                  medium: "CNDL-VENT-M",
                  large: "CNDL-VENT-L",
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

               tag: ["одуванчик", "алое", "полевые цветы", "клевер", "зеленый чай", "груша", "лира"],
               aroma: "Природные",
               collection: "Игры",
               category: "свечи",
               intensity: 4,
               isFavorite: false,
            },
         ],

         filterData: {
            category: "",
            sort: "",
            aroma: [],
            collection: [],
         },

         isActiveFavorite: false,
         isActiveBacket: false,
         pageNumber: 1,
      };
   },

   getters: {
      getCategotyData(state) {
         const categorySet = new Set(state.products.map((item) => item.category));
         return Array.from(categorySet).sort((a, b) => b.localeCompare(a));
      },

      getLimitCard(state) {
         const startIndex = (state.pageNumber - 1) * 6;
         const endIndex = startIndex + 6;
         return this.filterCollection.slice(startIndex, endIndex);
      },

      getCountCardPagination(state) {
         return Number(Math.ceil(this.filterCollection.length / 6));
      },

      filterCategory(state) {
         const selectedCategory = state.filterData.category;
         if (selectedCategory === "все") {
            return state.products;
         }
         return state.products.filter((item) => item.category === selectedCategory);
      },

      filterSort(state) {
         const sortedCategory = [...this.filterCategory];
         const sortingFunctions = {
            new: (a, b) => a.date - b.date,
            old: (a, b) => b.date - a.date,
            start: (a, b) => b.title.localeCompare(a.title),
            end: (a, b) => a.title.localeCompare(b.title),
         };
         const sortingFunction = sortingFunctions[state.filterData.sort];
         if (sortingFunction) {
            return sortedCategory.sort(sortingFunction);
         }
         return sortedCategory;
      },

      filterAroma(state) {
         const selectedAromas = state.filterData.aroma;
         if (selectedAromas.length === 0) {
            return this.filterSort;
         }
         const filteredByAroma = this.filterSort.filter((item) => selectedAromas.includes(item.aroma));
         return Array.from(new Set(filteredByAroma));
      },

      filterCollection(state) {
         const selectedCollections = state.filterData.collection;
         if (selectedCollections.length === 0) {
            return this.filterAroma;
         }
         const filteredByCollection = this.filterAroma.filter((item) => selectedCollections.includes(item.collection));
         return Array.from(new Set(filteredByCollection));
      },
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

      updateFilterData(data) {
         this.filterData = data;
      },

      updatePageNumber(data) {
         this.pageNumber = data;
      },
   },
});
