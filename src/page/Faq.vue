<template>
   <section class="single-page answers">
      <div class="container">
         <BaseBreadcrumbs
            class="about__breadcrumbs"
            :roterLink="roterData" />
         <div class="answers__header">
            <img
               class="answers__header-icon"
               src="@/assets/img/svg/faq-answers__header-icon.svg"
               alt="Иконка"
               width="80"
               height="45" />
            <h1 class="title answers__title">Ответы на вопросы</h1>
            <p class="subtitle answers__subtitle">Вопросы, которые у тебя могли остаться!</p>
         </div>
         <BaseFaq :faqData="faqItem" />
      </div>
   </section>
</template>

<script>
export default {
   name: "PageFaq",

   data() {
      return {
         roterData: [
            {
               id: 1,
               name: "Главная",
               to: "/",
               last: false,
            },
            {
               id: 2,
               name: "Faq",
               to: "/faq",
               last: true,
            },
         ],

         faqItem: [
            {
               id: 1,
               title: "Могу ли я отменить заказ?",
               content: "Да, если твой заказ еще не отправлен. Для этого напиши нам на почту — info@lumiiere.candles.com",
            },
            {
               id: 2,
               title: "Могу ли я вернуть товар?",
               content:
                  "Да, можешь при соблюдении определенных требований. Подробнее ознакомься в разделе «Обмен и возврат». Если твой случай не подходит ни под один из указанных, напиши нам — info@lumiiere.candles.com",
            },
            {
               id: 3,
               title: "Вы делаете свечи на заказ?",
               content:
                  "Да, от 10 штук. День рождения, корпоратив, свадьба или другое мероприятие? Сделаем индивидуальный дизайн под твое событие.",
            },
            {
               id: 4,
               title: "Что делать, если мне не пришел заказ в указанный срок?",
               content: "info@lumiiere.candles.com — напиши нам, мы разберемся и найдем твой заказ!",
            },
            {
               id: 5,
               title: "Как правильно ухаживать за свечами?",
               content:
                  "Ооо, как хорошо, что ты спросил! У нас есть целый раздел об этом из 7 пунктов. Например, задувать свечи нельзя, а еще — при каждом использовании нужно подрезать фитиль! Ты знал? То-то же! Переходи в «Уход», изучи и еще друзьям расскажи :)",
            },
            {
               id: 6,
               title: "Безопасна ли свеча?",
               content:
                  "Да, все свечи сделаны из натуральных компонентов, а аромамасла имеют сертификат IFRA и не тестируются на животных. Свечи абсолютно безопасны для вдыхания.",
            },
            {
               id: 7,
               title: "Я люблю зажигать свечи и медитировать, могу ли я не переживать за пожароопасность?",
               content:
                  "Да, только соблюдай некоторые правила: — поставь свечу на жаропрочную поверхность (например, на пробковую подставку); — не жги ее больше 3-х часов; — не зажигай, когда в баночке осталось меньше 1 см воска. Тара для свечей сделана из жаропрочного стекла — все безопасно. Но не оставляй свечу без присмотра и наедине с детьми и домашними животными.",
            },
            {
               id: 8,
               title: "У меня есть идея для дизайна свечи — куда бежать, кому писать?",
               content: "Ты ж моя булочка! Напиши нам в нельзяграм — @lumiiere.candless или на почту — info@lumiiere.candles.com",
            },
         ],
      };
   },
};
</script>

<style lang="scss">
.answers {
   &__header {
      position: relative;
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 50px;

      &-icon {
         position: absolute;
         top: -5px;
         left: calc(50% - 40px);

         @include md {
            top: -10px;
            width: 100px;
            height: auto;
         }

         @include lg {
            left: 10px;
         }

         @include xxl {
            width: 110px;
            height: auto;
         }
      }

      @include lg {
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
      color: var(--color_secondary);
   }
}
</style>
