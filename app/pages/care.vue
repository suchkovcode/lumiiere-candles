<!-- eslint-disable vue/html-self-closing -->
<template>
   <section class="single-page list">
      <div class="container">
         <base-breadcrumbs class="list__breadcrumbs" :roter-link="{ name: 'Уход', to: '/care' }" />
         <div class="list__header">
            <img class="list__header-icon" src="/img/care__header-icon.svg" alt="Главная картинка" width="85" height="40" />
            <h1 class="title list__title">Уход</h1>
            <p class="subtitle list__subtitle">Да, ухаживать за свечами тоже нужно!</p>
         </div>
         <div class="list__box">
            <div class="list__item">
               <p class="list__item-number">1</p>
               <h2 class="title list__item-title">Первое использование</h2>
               <p class="list__item-description">
                  Ты купил свечу и вот <strong>в первый раз хочешь ее зажечь.</strong> Сделай это минимум на час, чтобы полностью растопить верхний
                  слой воска и вокруг фитиля не образовались кратеры.
               </p>
            </div>
            <div class="list__item">
               <p class="list__item-number">2</p>
               <h2 class="title list__item-title">Не более 4-х часов</h2>
               <p class="list__item-description">
                  Зажег свечу и на целый день забыл о ней — #нуаче, пусть создает атмосферу! Знакомо? Мой пирожочек, лучше
                  <strong>не жечь свечку дольше 4-х часов,</strong> иначе аромамасла перегреются, свеча перестанет пахнуть, а ты будешь грустить!
               </p>
            </div>
            <div class="list__item">
               <p class="list__item-number">3</p>
               <h2 class="title list__item-title">Не спеши задувать</h2>
               <p class="list__item-description">
                  Хочешь потушить свечу? По-дож-ди-и-и! Не спеши задувать, как привык это делать.
                  <strong>Правильно — тушить крышечкой.</strong> Тогда запах от фитиля не смешается с запахом свечи, и она будет ярко пахнуть всегда!
               </p>
            </div>
            <div class="list__item">
               <p class="list__item-number">4</p>
               <h2 class="title list__item-title">Подрежь фитиль</h2>
               <p class="list__item-description">
                  А ты знаешь, что фитиль нужно подрезать? Да-да, перед каждым использованием. Так пламя не будет слишком большим, свеча будет гореть
                  равномерно, а частички фитиля не упадут в воск и не испортят внешний вид свечи и твое настроение.
               </p>
            </div>
            <div class="list__item">
               <p class="list__item-number">5</p>
               <h2 class="title list__item-title">Сквозняк в помещении</h2>
               <p class="list__item-description">
                  Прежде, чем зажечь свечу, проверь — нет ли сквозняка в помещении. Иначе устроишь себе свечную вечеринку — пламя будет танцевать, а
                  фитиль коптить.
               </p>
            </div>
            <div class="list__item">
               <p class="list__item-number">6</p>
               <h2 class="title list__item-title">Не оставляй без присмотра</h2>
               <p class="list__item-description">Повторим все вместе: свечи — детям не игрушка! Мы же не хотим пожар, правда?</p>
            </div>
            <div class="list__item">
               <p class="list__item-number">7</p>
               <h2 class="title list__item-title">Свеча не пахнет?</h2>
               <p class="list__item-description">
                  Не спеши расстраиваться — дай ей разогреться 10-20 минут и выйди из комнаты, соблюдая пункт 6. Когда вернешься, почувствуешь, что
                  аромат свечи заполнил всю комнату!
               </p>
            </div>
         </div>
      </div>
   </section>
</template>
