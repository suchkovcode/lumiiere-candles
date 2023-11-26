<!-- eslint-disable vue/html-self-closing -->
<template>
   <div class="single-page">
      <section class="delivery">
         <div class="container">
            <base-breadcrumbs :roter-link="{ name: 'Доставка и оплата', to: '/delivery' }" />
            <div class="delivery__header">
               <img class="delivery__header-icon" src="/img/delivery__header-icon.svg" alt="Главная картинка" width="140" height="50" />
               <h1 class="title delivery__title">Доставка и оплата</h1>
               <p class="subtitle delivery__subtitle">Здесь можно подробнее ознакомиться с условиями доставки и способов оплаты товара</p>
            </div>
            <base-tabs v-model="selectTab" />
         </div>
      </section>
      <section class="tab-content">
         <div class="container">
            <div v-if="'delivery' === selectTab" class="tab-box tab-box-1">
               <div class="tab-box__header tab-box-1__header">
                  <svg class="tab-box__icon" width="45" height="30">
                     <use xlink:href="/img/sprite.svg#deliveryCarIcon"></use>
                  </svg>
                  <h2 class="upercase tab-box__title">Способы и стоимость доставки</h2>
               </div>
               <div class="tab-box-1__transport">
                  <p class="tab-box-1__transport-title">Доставка осуществляется транспортными компаниями cdek и почта</p>
                  <div class="tab-box-1__transport-icons">
                     <svg class="tab-box-1__transport-icon" width="80" height="60">
                        <use xlink:href="/img/sprite.svg#deliveryNP"></use>
                     </svg>
                     <svg class="tab-box-1__transport-icon" width="80" height="60">
                        <use xlink:href="/img/sprite.svg#deliveryFeedEx"></use>
                     </svg>
                     <svg class="tab-box-1__transport-icon" width="80" height="60">
                        <use xlink:href="/img/sprite.svg#deliveryCdek"></use>
                     </svg>
                     <svg class="tab-box-1__transport-icon" width="80" height="60">
                        <use xlink:href="/img/sprite.svg#deliveryDhl"></use>
                     </svg>
                  </div>
               </div>
               <div class="tab-box-1__terms">
                  <h3 class="upercase tab-box-1__terms-title">Сроки доставки</h3>
                  <div class="tab-box-1__terms-text-box">
                     <p class="tab-box-1__terms-text">Заказы формируются к отправке в течение 5 рабочих дней после оформления на сайте.</p>
                     <p class="tab-box-1__terms-text">
                        После отправки заказа на указанный электронный адрес поступит трек-номер для его отслеживания. Если трек не пришел в течение
                        указанного времени, свяжись с нами любым удобным способом
                     </p>
                     <p class="tab-box-1__terms-text">Отправка заказов осуществляется в выходные (за исключением праздничных дней).</p>
                     <p class="tab-box-1__terms-text">
                        Если твой заказ был оформлен в будни, он будет отправлен в ближайший выходной. Если твой заказ был оформлен в выходной, он
                        будет отправлен на следующие выходные.
                     </p>
                     <p class="tab-box-1__terms-text">
                        Наличие товара на сайте означает, что у нас есть ингредиенты для того, чтобы изготовить свечу. Но это не значит, что свеча
                        готова к выдаче. Значок «предзаказ» говорит о том, что на данный момент закончились ингредиенты, и неизвестно, когда они
                        приедут (доставка из Америки — дело нестабильное, да). Но ты можешь оставить предзаказ и получить эту свечу в числе первых,
                        когда она появится в наличии.
                     </p>
                     <div class="tab-box-1__terms-ps-box">
                        <svg class="tab-box-1__terms-icon" width="80" height="55">
                           <use xlink:href="/img/sprite.svg#deliveryPssIcon"></use>
                        </svg>
                        <p class="tab-box-1__terms-ps">
                           <mark>По секрету:</mark>
                           все заказы доставляют совы из Хогвартса под видом транспортных компаний
                        </p>
                     </div>
                  </div>
               </div>
               <div class="tab-box-1__time">
                  <h3 class="upercase tab-box-1__time-title">Примерные сроки доставки заказов</h3>
                  <div class="tab-box-1__time-company">
                     <p class="tab-box-1__time-subtitle">Новая Почта | CDEK</p>
                     <p class="tab-box-1__time-description">3-5 рабочих дней</p>
                  </div>
                  <div class="tab-box-1__time-company">
                     <p class="tab-box-1__time-subtitle">DHL | FeedEx</p>
                     <p class="tab-box-1__time-description">7-14 рабочих дней</p>
                  </div>

                  <div class="tab-box-1__time-company">
                     <p class="tab-box-1__time-subtitle">Самовывоз</p>
                     <p class="tab-box-1__time-description">По договоренности</p>
                  </div>
                  <p class="tab-box-1__time-text">
                     <em>
                        *Срок доставки может быть увеличен транспортной компанией по независящим от нас причинам. Так же срок доставки может быть
                        увеличен при заказе в удаленные локации.
                     </em>
                  </p>
               </div>
               <div class="tab-box-1__cost">
                  <h3 class="upercase tab-box-1__cost-title">Стоимость доставки</h3>
                  <div class="tab-box-1__cost-city">
                     <p class="tab-box-1__cost-city-title">По городу Курьером</p>
                     <ul class="tab-box-1__cost-city-list">
                        <li class="tab-box-1__cost-city-item">• Днепровский / Святошинский — 4$</li>
                        <li class="tab-box-1__cost-city-item">• Центр — 4$</li>
                        <li class="tab-box-1__cost-city-item">• Все остальные районы в пределах черты города— 6$</li>
                        <li class="tab-box-1__cost-city-item">• Самовывоз — бесплатно</li>
                     </ul>
                  </div>
                  <div class="tab-box-1__cost-city">
                     <p class="tab-box-1__cost-city-title">В другие города</p>
                     <ul class="tab-box-1__cost-city-list">
                        <li class="tab-box-1__cost-city-item">• Доставка Почтой 9.99$</li>
                        <li class="tab-box-1__cost-city-item">• Доставка CDEK – 9.99$</li>
                     </ul>
                  </div>
                  <p class="tab-box-1__cost-text">Стоимость доставки может отличаться в зависимости от города</p>
                  <p class="tab-box-1__cost-contact">
                     <em>
                        Доставка в другие страны рассчитывается индивидуально. Напиши нам на почту
                        <a class="tab-box-1__cost-contact-link" href="mailto:info@lumiiere.candles.com"> info@lumiiere.candles.com </a>
                        или в INSTAGRAM @lumiiere.candles
                     </em>
                  </p>
               </div>
               <div class="tab-box-1__watch">
                  <h3 class="upercase tab-box-1__watch-title">Отследить заказ</h3>
                  <p class="tab-box-1__watch-subtitle">
                     Узнать точные сроки доставки ты сможешь с помощью трек-номера, который будет отправлен на почту после отправления заказа. Сделать
                     это можно несколькими способами:
                  </p>
                  <ul class="tab-box-1__watch-list">
                     <li>
                        <a class="tab-box-1__watch-link" href=""> • На сайте или в приложении Почты </a>
                     </li>
                     <li>
                        <a class="tab-box-1__watch-link" href=""> • На сайте или в приложении FeeDex </a>
                     </li>
                  </ul>
               </div>
               <div class="tab-box-1__package">
                  <h3 class="upercase tab-box-1__package-title">Упаковка</h3>
                  <p class="tab-box-1__package-subtitle">
                     Свечи упаковываются в крафтовые коробки с бумажным наполнителем. Каждая коробочка подписана вручную именем/ником заказчика. Если
                     вы заказываете свечи для другого человека, напишите в комментариях его имя, мы напишем его на бирке. К каждому заказу
                     прикладывается памятка по уходу за свечой.
                  </p>
               </div>
            </div>
            <div v-if="'payment' === selectTab" class="tab-box tab-box-2">
               <div class="tab-box__header tab-box-2__header">
                  <svg class="tab-box__icon" width="45" height="30">
                     <use xlink:href="/img/sprite.svg#deliveryPaymentIcon"></use>
                  </svg>
                  <h2 class="upercase tab-box__title">Оплата</h2>
               </div>
               <div class="tab-box-2__steps">
                  <div class="tab-box-2__step">
                     <svg class="tab-box-2__step-icon" width="24" height="24">
                        <use xlink:href="/img/sprite.svg#deliveryListIcon"></use>
                     </svg>
                     <h3 class="tab-box-2__step-title">Заказ на сайте</h3>
                     <p class="tab-box-2__step-subtitle">Оставляй заявку на нашем сайте. Информация конфиденциальна, третьим лицам не передаем.</p>
                  </div>
                  <div class="tab-box-2__step">
                     <svg class="tab-box-2__step-icon" width="22" height="18">
                        <use xlink:href="/img/sprite.svg#deliveryBoxIcon"></use>
                     </svg>
                     <h3 class="tab-box-2__step-title">Отправка</h3>
                     <p class="tab-box-2__step-subtitle">Быстро доставляем заказ почтой, Совами или Курьером.</p>
                  </div>
                  <div class="tab-box-2__step">
                     <svg class="tab-box-2__step-icon" width="24" height="24">
                        <use xlink:href="/img/sprite.svg#deliveryPaymentIcon-2"></use>
                     </svg>
                     <h3 class="tab-box-2__step-title">Оплата и получение</h3>
                     <p class="tab-box-2__step-subtitle">После оформления заказа ты будешь перенаправлен на сервис приема оплаты PayAnyWay</p>
                  </div>
               </div>
               <div class="tab-box-2__info">
                  <h3 class="tab-box-2__info-title">Формирование и отправка заказов осуществляется только по 100% предоплате</h3>
                  <p class="tab-box-2__info-text">
                     Сервис PayAnyWay соответствует международному стандарту PCI DSS (Payment Card Industry Data Security Standard)
                  </p>
                  <p class="tab-box-2__info-text">
                     Для защиты платежей со счетов банковских карт используются технологии 3D-Secure от VISA и SecureCode от MasterCard. PayAnyWay не
                     передает данные вашей карты магазину и третьим лицам.
                  </p>
                  <p class="tab-box-2__info-text">
                     В соответствии с Законом «О защите прав потребителей», в случае, если вам оказана услуга или реализован товар ненадлежащего
                     качества, платеж может быть возвращен на банковскую карту, с которой производилась оплата. Порядок возврата денежных средств
                     уточняйте у администратора интернет-магазина.
                  </p>
                  <div class="tab-box-2__info-payment">
                     <p class="tab-box-2__info-payment-title">Способы приема платежей:</p>
                     <div class="tab-box-2__info-payment-method">
                        <svg class="tab-box-2__info-payment-img" width="60" height="40">
                           <use xlink:href="/img/sprite.svg#deliveryPaymentVisa"></use>
                        </svg>
                        <svg class="tab-box-2__info-payment-img" width="60" height="40">
                           <use xlink:href="/img/sprite.svg#deliveryPaymentMaster"></use>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
            <div v-if="'return' === selectTab" class="tab-box tab-box-3">
               <div class="tab-box__header">
                  <svg class="tab-box__icon" width="45" height="30">
                     <use xlink:href="/img/sprite.svg#deliveryCarIcon"></use>
                  </svg>
                  <h2 class="upercase tab-box__title">Обмен и возврат</h2>
               </div>

               <BaseFaq :faq-data="faqItem" />
            </div>
            <div v-if="'terms' === selectTab" class="tab-box tab-box-4">
               <div class="tab-box__header">
                  <svg class="tab-box__icon" width="24" height="24">
                     <use xlink:href="/img/sprite.svg#deliveryClockIcon"></use>
                  </svg>
                  <h2 class="upercase tab-box__title">СРОК ИЗГОТОВЛЕНИЯ ЗАКАЗА</h2>
               </div>
               <div class="tab-box-4__content">
                  <p class="tab-box-4__text">
                     Все свечи изготавливаются вручную. Мы стараемся постоянно поддерживать наличие свечей, но иногда нашим миньонам требуется 3-5
                     дней на производство.
                  </p>
                  <p class="tab-box-4__text">
                     Все заказы изготавливаются, собираются в течение недели. После отправки ты получишь трек-номер для отслеживания посылки.
                  </p>
                  <p class="tab-box-4__text">
                     Наличие товара на сайте означает, что у нас есть ингредиенты для того, чтобы изготовить свечу. Но это не значит, что свеча готова
                     к выдаче. Значок «предзаказ» говорит о том, что на данный момент закончились ингредиенты, и неизвестно, когда они приедут
                     (доставка из Америки — дело нестабильное, да). Но ты можешь оставить предзаказ и получить эту свечу в числе первых, когда она
                     появится в наличии.
                  </p>
                  <p class="tab-box-4__text">
                     Ты можешь оформить самовывоз и забрать заказ по адресу: (текущий адрес) по предварительной записи — это самый быстрый вариант.
                  </p>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup>
const selectTab = ref();
const faqItem = ref([
   {
      id: 1,
      title: "ВОЗВРАТ ТОВАРА НАДЛЕЖАЩЕГО КАЧЕСТВА",
      content: `• ты можешь отказаться от заказанного товара в любое время до его отправки, а после получения товара — в течение 7
                        (семи) дней, не считая дня покупки.
                        <br />
                        • возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские свойства.
                        <br />
                        • ты не вправе отказаться от товара, имеющего индивидуально-определенные свойства. Например, если это свечи с
                        индивидуальным заказом.
                        <br />
                        • при отказе от товара надлежащего качества мы вернем тебе денежную сумму, уплаченную по договору, за исключением
                        расходов на доставку. Не позднее чем через 10 дней.`,
   },
   {
      id: 2,
      title: "ВОЗВРАТ ТОВАРА НЕНАДЛЕЖАЩЕГО КАЧЕСТВА",
      content: `• товар ненадлежащего качества имеет какие-либо дефекты / брак.
                        <br />
                        • Покупатель, который получил товар ненадлежащего качества, если это не было оговорено продавцом, вправе по своему
                        выбору заявить любое из нижеперечисленных требований:
                        <br />
                        — замены на товар аналогичной марки (модели, артикула) или на такой же товар другой марки (модели, артикула) с
                        соответствующим перерасчетом покупной цены;
                        <br />
                        — соразмерного уменьшения покупной цены;
                        <br />
                        — вправеотказаться от исполнения договора и потребовать возврата уплаченной за товар суммы.`,
   },
   {
      id: 3,
      title: "КУДА ОБРАЩАТЬСЯ?",
      content: `По всем вопросам касательно возврата и обмена товаров необходимо обращаться на почту linfo@lumiiere.candles.com
                        <br />
                        Для возврата товара нужно соблюсти 4 простых правила:
                        <br />
                        - оформить возврат не позднее 7 календарных дней после получения — для заказов, приобретенных онлайн;
                        <br />
                        - сохранить оригинальность упаковки товара.
                        <br />
                        - проверить, что при приемке потребительские свойства и товарный вид не пострадали.`,
   },
   {
      id: 4,
      title: "ПРАВИЛА ВОЗВРАТА?",
      content: `Если товар приобретен онлайн, все транспортные расходы осуществляются за счет покупателя. Конечная стоимость будет
                        зависеть от транспортной компании, которой вы воспользуетесь.
                        <br />
                        Возврат необходимо оформить в течение 7 дней после получения товара`,
   },
]);
</script>
