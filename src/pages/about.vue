<!-- eslint-disable vue/html-self-closing -->
<template>
   <section class="single-page about">
      <div class="container">
         <base-breadcrumbs class="about__breadcrumbs" :roter-link="{ name: 'О нас', to: '/about' }" />
         <div class="about__header">
            <img class="about__header-icon" src="@/assets/img/svg/about__header-icon.svg" alt="Главная картинка" width="90" height="40" />
            <h1 class="title about__title">О НАС</h1>
         </div>
         <div class="about__grid">
            <div class="about__profile">
               <svg class="about__profile-icon" width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M58.1715 2.10517C55.0704 15.7894 39.4104 43.1578 1.57812 43.1578M58.1715 98.421C60.3693 84.912 71.4682 57.8946 98.2814 57.8946C71.4682 57.8946 60.3693 20.3508 58.1715 1.57886"
                     stroke="#EB4A00"
                     stroke-width="6"
                     stroke-linecap="round" />
                  <path d="M58.2419 98.4211C55.1408 80.0001 39.4808 43.158 1.64844 43.158" stroke="#EB4A00" stroke-width="6" stroke-linecap="round" />
               </svg>
               <img class="about__profile-img" src="@/assets/img/webp/about__profile-img.webp" alt="Профиль пользователя" width="130" height="130" />
               <div class="about__profile-text-box">
                  <p class="about__profile-text"><em>Привет!</em></p>
                  <p class="about__profile-text">
                     <em>
                        Я Лиза, создатель свечей Люмьер, вечный генератор безумных идей, немного дизайнер, немного маркетолог и теперь много свечевар.
                     </em>
                  </p>
               </div>
            </div>
            <div class="about__quote">
               <svg class="about__quote-icon" width="40" height="35">
                  <use xlink:href="/sprite.svg#aboutQuote"></use>
               </svg>
               <div class="about__quote-text-box">
                  <p class="about__quote-text">
                     В 2020 году, в период пандемии, я ушла из крупной международной компании, где работала маркетологом. Уволилась, потому что работа
                     перестала приносить мне радость и вдохновение — а это, я считаю, главное в любом деле. Тогда мне казалось, что я сгорела,
                     потеряла веру в себя, сутками сидела дома за просмотром сериалов и мыслями, как найти себя.
                  </p>
                  <p class="about__quote-text">
                     В выгорании была и своя прелесть — ароматические свечи. Их я любила всегда, и с таким трудом отыскивала стоящие и правда пахнущие
                     экземпляры. Как бывает в сказках, однажды в тридевятой квартире я сварила свою первую свечу с невероятным ароматом. В шутку
                     первый экземпляр получил название «Бедная Лиза с ноткой горького шоколада + свежестью мяты и новых надежд». Первая свеча зажгла
                     огонь свечей Люмьер с персонажами и легендами. У меня появилось свое дело, которое я искренне люблю, а также моя аудитория
                     душевных пирожочков, которые любят мои свечи.
                  </p>
                  <p class="about__quote-text">
                     Сейчас помимо моих свечей, которые мы делаем с моими верными миньонами для вас, у меня есть человеческая работа, которая не
                     мешает новой мечте — открыть ароматную мастерскую свечевара, где всегда будут рады гостям.
                  </p>
                  <p class="about__quote-text about__quote-text--bold">Жгите свечи Lumiiere с удовольствием и наслаждайтесь!</p>
               </div>
            </div>
            <div class="about__bullet">
               <div class="about__bullet-item">
                  <svg class="about__bullet-icon-1" width="90" height="90">
                     <use xlink:href="/sprite.svg#aboutBulletIcon-1"></use>
                  </svg>
                  <svg class="about__bullet-icon-2" width="120" height="120">
                     <use xlink:href="/sprite.svg#aboutBulletIcon-3"></use>
                  </svg>
               </div>
               <div class="about__bullet-item">
                  <svg class="about__bullet-icon-1" width="90" height="90">
                     <use xlink:href="/sprite.svg#aboutBulletIcon-2"></use>
                  </svg>
                  <svg class="about__bullet-icon-2" width="120" height="120">
                     <use xlink:href="/sprite.svg#aboutBulletIcon-4"></use>
                  </svg>
               </div>
            </div>
            <img class="about__hero" src="@/assets/img/webp/about__hero.webp" alt="Демонстарция товара" width="300" height="300" />
         </div>
      </div>
   </section>
   <section class="questions">
      <div class="container">
         <BaseFaq :faq-data="faqItem" />
      </div>
   </section>
</template>

<script setup>
const faqItem = ref([
   {
      id: 1,
      title: "НАСТОЯЩИЙ АРОМАТ",
      content:
         "«Эти свечи действительно пахнут!» — наш самый популярный отзыв! Стоит только поджечь фитиль — вжух! — и вкусный и ненавязчивый аромат наполняет всю комнату. Не удивляйтесь, если зайдут соседи и спросят — чем это у вас так вкусно пахнет? :)",
   },
   {
      id: 2,
      title: "Экологически чистый воск",
      content:
         "Мы используем сертифицированный растительный воск, который создан из соевых бобов высокого качества. Вся прелесть в его натуральности — такой воск биоразлагаем и безопасен для окружающей среды.",
   },
   {
      id: 3,
      title: "Волшебство в каждой баночке",
      content:
         "Атмосферные свечи Люмьер передают историю, которую вы можете почувствовать! Каждая свеча сделана вручную с большой любовью к своему делу и окутана легендой — знакомой каждому или созданной специально для вас.",
   },
   {
      id: 4,
      title: "Надежная упаковка",
      content:
         "Осознавая всю хрупкость наших ароматных посылок, упаковываем мы не только красиво, но и сверхнадежно. Мы хотим, чтобы свечи обрели своего владельца в первозданном нетронутом виде. В случае если служба доставки и пинки судьбы мешают нашим наполеоновским планам - ущерб возмещается, а ситуация исправляется.",
   },
   {
      id: 5,
      title: "Сертифицированные аромамасла",
      content:
         "Американские масла, которые мы используем для аромата свечей, сертифицированы Международной парфюмерной ассоциацией. Это гарантирует не только запах высшей пробы, но и безопасность для вас, ваших детей и питомцев. Нам важно, чем вы дышите.",
   },
   {
      id: 6,
      title: "Доставка повсюду",
      content: "Мы хотим, чтобы свечи Люмьер были в каждом доме и готовы доставить их в любую точку мира. Для теплоты и аромата нет никаких преград!",
   },
]);
</script>
