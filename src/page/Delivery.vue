<template>
   <div class="single-page">
      <section class="delivery">
         <div class="container">
            <BaseBreadcrumbs :roterLink="roterData" />
            <div class="delivery__header">
               <img class="delivery__header-icon" src="@/assets/img/svg/delivery__header-icon.svg" alt="Иконка" width="210" height="45" />
               <h1 class="title delivery__title">Доставка и оплата</h1>
               <p class="subtitle delivery__subtitle">Здесь можно подробнее ознакомиться с условиями доставки и способов оплаты товара</p>
            </div>
            <BaseTabs v-model="selectTab" :tabsData="tabsData" />
         </div>
      </section>
      <section class="tab-content">
         <div class="container">
            <div class="tab-box tab-box-1" v-if="'delivery' === selectTab">
               <div class="tab-box__header tab-box-1__header">
                  <svg class="tab-box__icon" width="45" height="30">
                     <use xlink:href="@/assets/img/svg/sprite.svg#deliveryCarIcon"></use>
                  </svg>
                  <h2 class="upercase tab-box__title">Способы и стоимость доставки</h2>
               </div>
               <div class="tab-box-1__transport">
                  <p class="tab-box-1__transport-title">Доставка осуществляется транспортными компаниями cdek и почта</p>
                  <div class="tab-box-1__transport-icons">
                     <svg class="tab-box-1__transport-icon" width="80" height="60">
                        <use xlink:href="@/assets/img/svg/sprite.svg#deliveryNP"></use>
                     </svg>
                     <svg class="tab-box-1__transport-icon" width="80" height="60">
                        <use xlink:href="@/assets/img/svg/sprite.svg#deliveryFeedEx"></use>
                     </svg>
                     <svg class="tab-box-1__transport-icon" width="80" height="60">
                        <use xlink:href="@/assets/img/svg/sprite.svg#deliveryCdek"></use>
                     </svg>
                     <svg class="tab-box-1__transport-icon" width="80" height="60">
                        <use xlink:href="@/assets/img/svg/sprite.svg#deliveryDhl"></use>
                     </svg>
                  </div>
               </div>
               <div class="tab-box-1__terms">
                  <h3 class="upercase tab-box-1__terms-title">Сроки доставки</h3>
                  <div class="tab-box-1__terms-text-box">
                     <p class="tab-box-1__terms-text">Заказы формируются к отправке в течение 5 рабочих дней после оформления на сайте.</p>
                     <p class="tab-box-1__terms-text">
                        После отправки заказа на указанный электронный адрес поступит трек-номер для его отслеживания. Если трек не пришел в
                        течение указанного времени, свяжись с нами любым удобным способом
                     </p>
                     <p class="tab-box-1__terms-text">Отправка заказов осуществляется в выходные (за исключением праздничных дней).</p>
                     <p class="tab-box-1__terms-text">
                        Если твой заказ был оформлен в будни, он будет отправлен в ближайший выходной. Если твой заказ был оформлен в
                        выходной, он будет отправлен на следующие выходные.
                     </p>
                     <p class="tab-box-1__terms-text">
                        Наличие товара на сайте означает, что у нас есть ингредиенты для того, чтобы изготовить свечу. Но это не значит, что
                        свеча готова к выдаче. Значок «предзаказ» говорит о том, что на данный момент закончились ингредиенты, и неизвестно,
                        когда они приедут (доставка из Америки — дело нестабильное, да). Но ты можешь оставить предзаказ и получить эту
                        свечу в числе первых, когда она появится в наличии.
                     </p>
                     <div class="tab-box-1__terms-ps-box">
                        <svg
                           class="tab-box-1__terms-icon"
                           width="80"
                           height="55"
                           viewBox="0 0 150 100"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              fill="#EB4A00"
                              d="M65.6692 0.268544C42.9833 1.78932 23.7956 9.22477 12.3078 20.9469C1.95138 31.5149 -2.20117 45.8567 1.12267 59.5768C1.97368 63.0897 3.06839 65.6153 5.56706 69.8301C8.69915 75.1135 9.20693 76.623 8.69153 79.1188C8.39399 80.5597 7.84623 81.4623 5.0794 85.0729C2.96396 87.8336 1.44034 90.8538 1.20399 92.7552C0.659761 97.1346 3.3091 100.404 7.04117 99.9596C8.76524 99.7538 9.87298 99.1692 13.0415 96.7885C16.2501 94.3782 18.9519 92.9446 22.5953 91.7194C26.5218 90.3991 29.7616 89.9291 34.9472 89.9277C40.1199 89.9264 43.1473 90.2974 53.8382 92.2431C66.6777 94.5797 73.4913 95.3264 84.2997 95.5815C105.277 96.0764 121.237 92.324 132.769 84.1848C135.944 81.9443 140.488 77.3908 142.734 74.1986C145.895 69.7038 148.359 63.8288 149.493 58.073C150.231 54.3337 150.151 46.4722 149.336 42.6246C146.367 28.6065 137.432 17.425 123.76 10.6214C108.088 2.82204 86.0828 -1.09966 65.6692 0.268544ZM88.1074 6.92283C106.912 9.31116 122.084 14.8756 130.944 22.6331C137.302 28.1997 141.639 35.5968 143.351 43.7911C144.103 47.3926 144.171 53.4018 143.5 56.8683C141.288 68.288 134.046 77.4364 122.82 82.9886C112.646 88.0203 95.5213 90.5221 79.1321 89.3708C73.2538 88.9579 67.321 88.1806 56.286 86.3776C44.0674 84.3811 43.2226 84.2673 38.0276 83.9188C26.4881 83.1446 17.6665 85.5447 9.68721 91.6289C8.51557 92.5225 7.49374 93.1899 7.4165 93.1123C7.135 92.8292 8.84248 90.1095 11.012 87.3858C12.2346 85.8508 13.4821 84.1027 13.7846 83.5013C15.3846 80.3183 15.2641 75.564 13.4819 71.5543C13.1013 70.698 11.8585 68.4342 10.7202 66.5238C8.38746 62.6096 7.78993 61.2359 7.04172 58.0688C4.05377 45.4204 8.36679 32.5578 18.6967 23.312C28.0743 14.9185 42.3471 9.21873 59.2777 7.10573C65.6361 6.31226 65.533 6.31662 75.5964 6.40822C81.8236 6.46483 85.7838 6.62781 88.1074 6.92283ZM41.3272 22.5355C34.3157 23.6407 26.7653 27.5295 23.8761 31.5237C22.7634 33.0617 22.7919 34.729 23.9495 35.8162C24.6438 36.4683 25.0314 36.6093 26.1286 36.6093C27.3873 36.6093 27.5529 36.5202 29.0529 35.0371C30.493 33.6132 32.7798 32.0145 34.0741 31.5264C34.5232 31.3572 34.5569 31.4573 34.4152 32.5387C34.3287 33.1985 34.0716 38.7215 33.844 44.812C33.6166 50.9025 33.3101 59.014 33.163 62.8379C32.7537 73.4929 32.7863 74.948 33.4545 75.8019C34.2406 76.8067 35.8642 77.207 37.0806 76.6963C38.8541 75.9515 38.9434 75.5903 39.1748 68.239C39.502 57.8499 39.7288 54.1084 40.0318 54.1084C40.8804 54.1084 47.9115 50.7395 50.0596 49.304C53.5991 46.9384 56.8204 42.6522 58.174 38.5063C58.9081 36.2588 58.9269 32.9069 58.2184 30.6189C56.1739 24.0144 50.17 21.1413 41.3272 22.5355ZM89.0593 27.0858C86.7453 27.9599 84.6589 30.0459 83.3758 32.7686C82.5985 34.4173 82.5318 34.7856 82.5318 37.4296C82.5318 39.5224 82.6703 40.7082 83.0426 41.8043C83.6771 43.6724 85.8337 48.0479 87.1021 50.0417C88.4677 52.1875 90.4148 56.1524 91.0755 58.132C92.6148 62.7446 92.1857 66.9846 89.9696 69.0613C89.1224 69.8553 87.0703 70.7737 86.1268 70.7811C84.3762 70.795 82.9398 69.6907 82.9398 68.3307C82.9398 65.7777 79.5262 64.45 77.6955 66.2907C76.78 67.2111 76.5989 68.4291 77.0937 70.3384C79.2711 78.7426 91.4366 79.2741 96.1596 71.1715C98.6625 66.879 98.9625 61.669 97.0423 55.8482C96.2365 53.4043 95.6096 52.1958 91.822 45.7827C88.6987 40.4941 87.9814 37.4397 89.2766 34.9434C90.0874 33.3808 91.4383 32.6428 92.6866 33.0803C93.458 33.3507 93.5469 33.4942 93.5469 34.4698C93.5469 35.8153 94.6264 37.0271 96.0665 37.2989C97.9039 37.6453 99.3971 36.3468 99.6933 34.1458C100.046 31.5146 98.6038 29.0612 95.8759 27.6534C94.7746 27.0852 94.0357 26.9261 92.187 26.8602C90.9156 26.8148 89.5081 26.9162 89.0593 27.0858ZM109.931 27.1285C109.593 27.3171 109.139 27.7262 108.923 28.0376C108.61 28.4862 106.33 39.4021 106.33 40.4498C106.33 40.5953 105.217 40.7178 103.814 40.7271C100.009 40.7517 98.751 41.03 97.8471 42.0466C96.6567 43.3863 96.9731 45.9355 98.4279 46.7177C98.7154 46.8728 100.366 46.9993 102.096 46.9993C103.826 46.9993 105.242 47.1107 105.242 47.2468C105.242 47.383 105.065 49.0746 104.85 51.0063C103.939 59.1663 104.073 64.713 105.258 67.8954C105.978 69.8317 106.756 70.7603 108.419 71.6702C112.004 73.6315 116.549 72.4761 120.54 68.5893C122.224 66.9496 122.377 66.7079 122.377 65.6711C122.377 63.6343 120.39 62.0808 118.473 62.6184C118.046 62.7381 117.093 63.4034 116.356 64.0967C114.891 65.4742 112.908 66.4968 111.963 66.3614C111.516 66.2978 111.237 65.9229 110.877 64.9086C110.457 63.7221 110.413 62.9088 110.544 58.7565C110.628 56.1248 110.912 52.3721 111.175 50.4171L111.655 46.8627L115.86 46.8312C121.313 46.7905 120.938 46.8474 121.854 45.9267C122.475 45.3017 122.648 44.8817 122.648 43.9991C122.648 42.7163 122.084 41.4344 121.366 41.091C121.099 40.9631 119.045 40.7943 116.801 40.7162L112.721 40.5739L112.812 39.7537C112.862 39.3025 113.213 37.2724 113.592 35.2422C113.972 33.2121 114.344 30.9077 114.419 30.1215C114.548 28.7717 114.502 28.6386 113.598 27.7291C112.827 26.9545 112.435 26.7681 111.592 26.7758C111.016 26.7812 110.269 26.9397 109.931 27.1285ZM48.2931 28.8106C49.0375 29.0328 50.1515 29.6494 50.7689 30.1807C52.9322 32.0421 53.2828 34.8004 51.7578 37.9597C50.9095 39.7176 47.9211 42.8401 45.6788 44.3113C43.9474 45.4477 40.2524 47.377 40.1003 47.2241C40.0435 47.167 40.1711 43.4326 40.384 38.9255C40.5969 34.4184 40.7738 30.2771 40.7773 29.7227C40.7827 28.7919 40.851 28.7063 41.6672 28.6043C43.83 28.3348 47.0325 28.4343 48.2931 28.8106ZM67.6843 32.4618C63.944 33.7088 61.4103 36.6512 60.6263 40.6579C60.1744 42.9672 60.4326 45.0263 61.4489 47.2209C62.1574 48.7507 62.8689 49.6092 65.7976 52.4678C69.8288 56.4023 70.4263 57.2598 70.4277 59.112C70.4299 61.7669 68.9555 63.4047 66.5635 63.4047C65.0763 63.4047 64.4462 62.9582 63.0813 60.9379C62.2175 59.6591 61.7683 59.2563 60.9202 59.001C59.615 58.6078 58.436 59.0037 57.6744 60.0913C56.75 61.4117 56.7362 61.9465 57.5801 63.7558C58.5886 65.9177 60.4927 67.8866 62.4816 68.8237C63.8279 69.458 64.3863 69.5567 66.6274 69.5567C69.0042 69.5567 69.3667 69.4829 71.0259 68.6614C75.2063 66.5917 77.5073 62.0937 76.6802 57.6076C76.5331 56.8109 75.9886 55.2889 75.4699 54.2257C74.6847 52.6157 73.9425 51.7236 71.0356 48.8939C67.1675 45.1288 66.4813 44.0614 66.6962 42.1445C66.8526 40.7487 67.4882 39.7611 68.822 38.8408C69.5912 38.31 70.0012 38.2214 71.2322 38.321C72.3183 38.4088 72.7915 38.5783 73.0001 38.9539C73.1565 39.2361 73.6703 39.8699 74.1414 40.3623C74.8697 41.1233 75.1888 41.2575 76.2701 41.2575C77.3083 41.2575 77.6858 41.1132 78.3233 40.4722C79.8069 38.9805 79.6616 37.1023 77.9025 35.0363C75.7153 32.4675 71.1313 31.3126 67.6843 32.4618Z" />
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
                        *Срок доставки может быть увеличен транспортной компанией по независящим от нас причинам. Так же срок доставки может
                        быть увеличен при заказе в удаленные локации.
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
                     Узнать точные сроки доставки ты сможешь с помощью трек-номера, который будет отправлен на почту после отправления
                     заказа. Сделать это можно несколькими способами:
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
                     Свечи упаковываются в крафтовые коробки с бумажным наполнителем. Каждая коробочка подписана вручную именем/ником
                     заказчика. Если вы заказываете свечи для другого человека, напишите в комментариях его имя, мы напишем его на бирке. К
                     каждому заказу прикладывается памятка по уходу за свечой.
                  </p>
               </div>
            </div>
            <div class="tab-box tab-box-2" v-if="'payment' === selectTab">
               <div class="tab-box__header tab-box-2__header">
                  <svg class="tab-box__icon" width="45" height="30">
                     <use xlink:href="@/assets/img/svg/sprite.svg#deliveryPaymentIcon"></use>
                  </svg>
                  <h2 class="upercase tab-box__title">Оплата</h2>
               </div>
               <div class="tab-box-2__steps">
                  <div class="tab-box-2__step">
                     <svg class="tab-box-2__step-icon" width="24" height="24">
                        <use xlink:href="@/assets/img/svg/sprite.svg#deliveryListIcon"></use>
                     </svg>
                     <h3 class="tab-box-2__step-title">Заказ на сайте</h3>
                     <p class="tab-box-2__step-subtitle">
                        Оставляй заявку на нашем сайте. Информация конфиденциальна, третьим лицам не передаем.
                     </p>
                  </div>
                  <div class="tab-box-2__step">
                     <svg class="tab-box-2__step-icon" width="22" height="18">
                        <use xlink:href="@/assets/img/svg/sprite.svg#deliveryBoxIcon"></use>
                     </svg>
                     <h3 class="tab-box-2__step-title">Отправка</h3>
                     <p class="tab-box-2__step-subtitle">Быстро доставляем заказ почтой , СДЭК, Совами или Курьером.</p>
                  </div>
                  <div class="tab-box-2__step">
                     <svg class="tab-box-2__step-icon" width="24" height="24">
                        <use xlink:href="@/assets/img/svg/sprite.svg#deliveryPaymentIcon-2"></use>
                     </svg>
                     <h3 class="tab-box-2__step-title">Оплата и получение</h3>
                     <p class="tab-box-2__step-subtitle">
                        После оформления заказа ты будешь перенаправлен на сервис приема оплаты PayAnyWay
                     </p>
                  </div>
               </div>
               <div class="tab-box-2__info">
                  <h3 class="tab-box-2__info-title">Формирование и отправка заказов осуществляется только по 100% предоплате</h3>
                  <p class="tab-box-2__info-text">
                     Сервис PayAnyWay соответствует международному стандарту PCI DSS (Payment Card Industry Data Security Standard)
                  </p>
                  <p class="tab-box-2__info-text">
                     Для защиты платежей со счетов банковских карт используются технологии 3D-Secure от VISA и SecureCode от MasterCard.
                     PayAnyWay не передает данные вашей карты магазину и третьим лицам.
                  </p>
                  <p class="tab-box-2__info-text">
                     В соответствии с Законом от 07.02.1992г. №2300-1 «О защите прав потребителей», в случае, если вам оказана услуга или
                     реализован товар ненадлежащего качества, платеж может быть возвращен на банковскую карту, с которой производилась
                     оплата. Порядок возврата денежных средств уточняйте у администратора интернет-магазина.
                  </p>
                  <div class="tab-box-2__info-payment">
                     <p class="tab-box-2__info-payment-title">Способы приема платежей:</p>
                     <div class="tab-box-2__info-payment-method">
                        <svg class="tab-box-2__info-payment-img" width="60" height="40">
                           <use xlink:href="@/assets/img/svg/sprite.svg#deliveryPaymentVisa"></use>
                        </svg>
                        <svg class="tab-box-2__info-payment-img" width="60" height="40">
                           <use xlink:href="@/assets/img/svg/sprite.svg#deliveryPaymentMaster"></use>
                        </svg>
                        <svg class="tab-box-2__info-payment-img" width="60" height="40">
                           <use xlink:href="@/assets/img/svg/sprite.svg#deliveryPaymentWorld"></use>
                        </svg>
                        <svg class="tab-box-2__info-payment-img" width="60" height="40">
                           <use xlink:href="@/assets/img/svg/sprite.svg#deliveryPaymentSpb"></use>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tab-box tab-box-3" v-if="'return' === selectTab">
               <div class="tab-box__header">
                  <svg class="tab-box__icon" width="45" height="30">
                     <use xlink:href="@/assets/img/svg/sprite.svg#deliveryCarIcon"></use>
                  </svg>
                  <h2 class="upercase tab-box__title">Обмен и возврат</h2>
               </div>

               <BaseFaq :faqData="faqItem" />
            </div>
            <div class="tab-box tab-box-4" v-if="'terms' === selectTab">
               <div class="tab-box__header">
                  <svg class="tab-box__icon" width="24" height="24">
                     <use xlink:href="@/assets/img/svg/sprite.svg#deliveryClockIcon"></use>
                  </svg>
                  <h2 class="upercase tab-box__title">СРОК ИЗГОТОВЛЕНИЯ ЗАКАЗА</h2>
               </div>
               <div class="tab-box-4__content">
                  <p class="tab-box-4__text">
                     Все свечи изготавливаются вручную. Мы стараемся постоянно поддерживать наличие свечей, но иногда нашим миньонам
                     требуется 3-5 дней на производство.
                  </p>
                  <p class="tab-box-4__text">
                     Все заказы изготавливаются, собираются в течение недели. После отправки ты получишь трек-номер для отслеживания
                     посылки.
                  </p>
                  <p class="tab-box-4__text">
                     Наличие товара на сайте означает, что у нас есть ингредиенты для того, чтобы изготовить свечу. Но это не значит, что
                     свеча готова к выдаче. Значок «предзаказ» говорит о том, что на данный момент закончились ингредиенты, и неизвестно,
                     когда они приедут (доставка из Америки — дело нестабильное, да). Но ты можешь оставить предзаказ и получить эту свечу в
                     числе первых, когда она появится в наличии.
                  </p>
                  <p class="tab-box-4__text">
                     Ты можешь оформить самовывоз и забрать заказ по адресу: (текущий адрес) по предварительной записи —
                     это самый быстрый вариант.
                  </p>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>

<script>
export default {
   name: "PageDelivery",

   data() {
      return {
         selectTab: "",

         roterData: [
            {
               id: 1,
               name: "Главная",
               to: "/",
               last: false,
            },
            {
               id: 2,
               name: "Доставка и оплата",
               to: "/delivery",
               last: true,
            },
         ],

         tabsData: [
            {
               id: 1,
               value: "delivery",
               content: "Способ доставки",
            },
            {
               id: 2,
               value: "payment",
               content: "Оплата",
            },
            {
               id: 3,
               value: "return",
               content: "Обмен и возрат",
            },
            {
               id: 4,
               value: "terms",
               content: "Сроки изготовления",
            },
         ],

         faqItem: [
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
         ],
      };
   },
};
</script>

<style lang="scss">
.delivery {
   &__header {
      position: relative;
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;

      &-icon {
         position: absolute;
         top: 0;
         left: calc(50% - 60px);

         @include md {
            width: 130px;
            height: auto;
         }

         @include md {
            top: -10px;
            left: 10px;
            width: 140px;
         }

         @include xxl {
            width: 150px;
            height: auto;
         }
      }

      @include md {
         align-items: flex-start;
      }
   }

   &__title {
      padding-top: 30px;
      letter-spacing: 2px;
      color: var(--color_secondary);

      @include sm {
         font-size: 42px;
      }

      @include md {
         font-size: 46px;
         text-align: center;
      }

      @include lg {
         font-size: 52px;
         text-align: left;
      }

      @include xl {
         font-size: 56px;
      }

      @include xxl {
         font-size: 58px;
      }
   }

   &__subtitle {
      max-width: 460px;
      font-size: 16px;
      color: var(--color_secondary);
   }
}

.tab-box {
   padding-top: 20px;
   font: 400 16px/1.5 "AvenirNextCyr";
   text-align: center;
   color: var(--color_secondary);

   &__header {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 15px;

      @include md {
         flex-flow: row;
      }
   }

   &__title {
      font-size: 20px;
      font-weight: 500;

      @include sm {
         font-size: 22px;
      }

      @include md {
         font-size: 24px;
      }

      @include lg {
         font-size: 26px;
      }

      @include xl {
         font-size: 28px;
      }
   }

   &-1 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;

      &__header {
         @include md {
            grid-area: header;
         }
      }

      &__transport {
         display: flex;
         flex-flow: column;
         align-items: center;
         gap: 20px;

         &-title {
            max-width: 360px;
            margin: 0 auto;

            @include md {
               max-width: 460px;
               margin: 0;
            }
         }

         &-icons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
         }

         @include md {
            align-items: flex-start;
            grid-area: transport;
         }
      }

      &__terms {
         &-title {
            margin-bottom: 15px;
            font-weight: 500;
         }

         &-text-box {
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 15px;

            @include md {
               align-items: flex-start;
            }
         }

         &-ps-box {
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 15px;

            @include md {
               flex-flow: row;
               align-items: flex-start;
            }
         }

         @include md {
            grid-area: terms;
         }
      }

      &__time {
         display: flex;
         flex-flow: column;
         gap: 20px;

         &-title {
            margin-bottom: 15px;
            font-weight: 500;
         }

         &-subtitle {
            font-weight: 500;
         }

         @include md {
            grid-area: time;
         }
      }

      &__cost {
         &-title {
            margin-bottom: 15px;
            font-weight: 500;
         }

         &-city {
            margin-bottom: 30px;

            &-title {
               margin-bottom: 15px;
               font-weight: 500;
            }

            &-list {
               display: flex;
               flex-flow: column;
               align-items: center;
               gap: 5px;

               @include md {
                  align-items: flex-start;
               }
            }
         }

         &-text {
            margin-bottom: 30px;
         }

         &-contact {
            &-link {
               color: var(--color_primary);

               &:hover {
                  color: var(--color_btn_hover);
               }
            }
         }

         @include md {
            grid-area: cost;
         }
      }

      &__watch {
         &-title {
            margin-bottom: 15px;
            font-weight: 500;
         }

         &-subtitle {
            margin-bottom: 15px;
         }

         &-list {
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 5px;

            @include md {
               align-items: flex-start;
            }
         }

         &-link {
            color: var(--color_secondary);
         }

         @include md {
            grid-area: watch;
         }
      }

      &__package {
         &-title {
            margin-bottom: 15px;
            font-weight: 500;
         }

         @include md {
            grid-area: package;
         }
      }

      @include md {
         grid-template-areas:
            "header header"
            "transport transport"
            "terms cost"
            "time watch"
            "package package";
         grid-template-columns: 1fr 1fr;
         gap: 30px;
      }

      @include xl {
         grid-template-areas:
            "header header"
            "transport transport"
            "terms cost"
            "time watch"
            "time package";
         padding-top: 30px;
      }
   }

   &-2 {
      display: grid;
      gap: 50px;
      max-width: 460px;
      margin: 0 auto;

      &__header {
         @include xl {
            grid-area: header;
         }
      }

      &__steps {
         display: flex;
         flex-flow: column;
         gap: 25px;

         @include md {
            display: grid;
            justify-self: start;
            grid-template-columns: 1fr 1fr;
         }

         @include xl {
            grid-area: step;
            height: fit-content;
         }
      }

      &__step {
         display: flex;
         flex-flow: column;
         align-items: center;
         gap: 15px;
         max-width: 340px;
         margin: 0 auto;

         &-title {
            font-size: 18px;
            font-weight: 500;

            @include lg {
               font-size: 20px;
            }
         }

         @include md {
            align-items: flex-start;
         }
      }

      &__info {
         max-width: 460px;

         &-title {
            margin-bottom: 15px;
            font-size: 18px;
            font-weight: 500;

            @include lg {
               font-size: 20px;
            }
         }

         &-text {
            margin-bottom: 15px;
         }

         &-payment {
            &-title {
               margin-bottom: 15px;
            }

            &-method {
               display: flex;
               justify-content: center;
               align-items: center;
               gap: 15px;

               @include md {
                  justify-content: flex-start;
               }
            }
         }

         @include lg {
            max-width: 560px;
         }

         @include xl {
            grid-area: info;
         }
      }

      @include md {
         max-width: 100%;
         margin: 0;
      }

      @include xl {
         grid-template-areas:
            "header header"
            "step info";
         grid-template-columns: 1fr 1fr;
      }
   }

   &-3 {
      display: grid;
      gap: 30px;
   }

   &-4 {
      display: grid;
      gap: 30px;

      &__content {
         display: flex;
         flex-flow: column;
         gap: 25px;
         max-width: 460px;
         margin: 0 auto;

         @include md {
            margin: 0;
         }

         @include lg {
            max-width: 640px;
         }
      }
   }

   @include md {
      text-align: left;
   }

   @include lg {
      font-size: 18px;
   }

   @include xl {
      padding-top: 30px;
   }
}
</style>
