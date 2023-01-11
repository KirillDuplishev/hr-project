<template lang="pug">
div
  .all
    .header
      .ico
        .img
        .text
      .home-icon(@click="routeMainPage")
        img.img-home(src="@/assets/img/home-icon.png")
      .block-burger
        BurgerButton  
    SideBarLeft
      span.burgerHeader Меню
      button.btn-sidebar.third(@click="routeMyProfile") Мой профиль
      button.btn-sidebar.third(@click="routeWorkSchedule") Рабочий график
      button.btn-sidebar.third(@click="$router.push({path:'/'})") Выход
    .content-block
      .first-main-block 
        .block-paper 
          .first-paper
            .paper(@click="openPaperOne")
              .content-paper
                .text-paper
                  h1.h1.white-color История и
                  br
                  br
                  h1.h1.white-color философия компании
          .second-paper
            .paper.back-blue(@click="openPaperTwo")
              .content-paper
                .text-paper
                  h1.h1.white-color Ценности и
                  br
                  br
                  h1.h1.white-color стандарты компании
        .block-test-button(@click="routeTestFirst()")
          button.btn-test.h1() Тест 
      .first-main-block 
        .block-paper 
          .first-paper
            .paper(@click="openPaperThree")
              .content-paper
                .text-paper
                  h1.h2.white-color Должностная
                  br
                  h1.h2.white-color инструкция пекаря на
                  br
                  h1.h2.white-color производстве
          .second-paper
            .paper.back-blue(@click="openPaperFor")
              .content-paper
                .text-paper
                  h1.h1.white-color Повышение
                  br
                  br
                  h1.h1.white-color эффективности работы
        .block-test-button(@click="routeTestSecond()")
          button.btn-test.h1() Тест 
      .first-main-block
        .block-paper
          .first-paper
            .paper(@click="openPaperFive")
              .content-paper
                .text-paper
                  h1.h2.white-color Должностная
                  br
                  h1.h2.white-color инструкция продавца
                  br
                  h1.h2.white-color кассира
          .second-paper
            .paper.back-blue(@click="openPaperSix")
              .content-paper
                .text-paper
                  h1.h1.white-color Кросс-продажи
        .block-test-button(@click="routeTestThree()")
          button.btn-test.h1() Тест
      DialogWindow(:dialog="dialog" :dialogBlue="dialogBlue" @closeDialog="closeDialog" :h1="h1" :h1FirstPunkt="h1FirstPunkt" :h1SecondPunkt="h1SecondPunkt" :h1ThreePunkt="h1ThreePunkt" :h1ForPunkt="h1ForPunkt" :h1FivePunkt="h1FivePunkt" :h1SixPunkt="h1SixPunkt" :h1SevenPunkt="h1SevenPunkt" :h1EightPunkt="h1EightPunkt" :h1NinePunkt="h1NinePunkt" :h1TenPunkt="h1TenPunkt" :h1ElevenPunkt="h1ElevenPunkt" :h1TwelvePunkt="h1TwelvePunkt" :h1ThreetenPunkt="h1ThreetenPunkt" :h1FortenPunkt="h1FortenPunkt" :h1FeftenPunkt="h1FeftenPunkt" :h2="h2" :h2FirstPunkt="h2FirstPunkt" :h2SecondPunkt="h2SecondPunkt" :h2ThreePunkt="h2ThreePunkt" :h2ForPunkt="h2ForPunkt" :h2FivePunkt="h2FivePunkt" :h2SixPunkt="h2SixPunkt" :h2SevenPunkt="h2SevenPunkt" :h2EightPunkt="h2EightPunkt" :h2NinePunkt="h2NinePunkt" :h2TenPunkt="h2TenPunkt" :h2ElevenPunkt="h2ElevenPunkt" :h2TwelvePunkt="h2TwelvePunkt" :h2ThreetenPunkt="h2ThreetenPunkt" :h2FortenPunkt="h2FortenPunkt" :h2FeftenPunkt="h2FeftenPunkt" :h3FirstPunkt="h3FirstPunkt" :h3SecondPunkt="h3SecondPunkt" :h3ThreePunkt="h3ThreePunkt" :h3ForPunkt="h3ForPunkt" :h3FivePunkt="h3FivePunkt" :h3SixPunkt="h3SixPunkt" :h3SevenPunkt="h3SevenPunkt" :h3EightPunkt="h3EightPunkt" :h3NinePunkt="h3NinePunkt" :h3TenPunkt="h3TenPunkt" :h3ElevenPunkt="h3ElevenPunkt" :h3TwelvePunkt="h3TwelvePunkt" :h3ThreetePunkt="h3ThreetePunkt" :h3FortenPunkt="h3FortenPunkt" :h3FeftenPunkt="h3FeftenPunkt" :h3SixtenPunkt="h3SixtenPunkt" :h3SeventenPunkt="h3SeventenPunkt" :h3EighttenPunkt="h3EighttenPunkt" :h3NinetenPunkt="h3NinetenPunkt" :h3TwentePunkt="h3TwentenPunkt" :h3TwenteOnePunkt="h3TwenteOnePunkt" :h3TwenteTwoPunkt="h3TwenteTwoPunkt" :h3TwenteThreePunkt="h3TwenteThreePunkt" :h3TwenteForPunkt="h3TwenteForPunkt" :h3TwenteFivePunkt="h3TwenteFivePunkt" :h3TwenteSixPunkt="h3TwenteSixPunkt" :h3TwenteSevenPunkt="h3TwenteSevenPunkt" :h3TwenteEightPunkt="h3TwenteEightPunkt" :h3TwenteNinePunkt="h3TwenteNinePunkt" :h3ThreeteenPunkt="h3ThreeteenPunkt" :h3ThreeteOnePunkt="h3ThreeteOnePunkt" :h3ThreeteTwoPunkt="h3ThreeteTwoPunkt" :h3ThreeteThreePunkt="h3ThreeteThreePunkt" :h3ThreeteForPunkt="h3ThreeteForPunkt" :h3ThreeteFivePunkt="h3ThreeteFivePunkt" :h3ThreeteSixPunkt="h3ThreeteSixPunkt" :h3ThreeteSevenPunkt="h3ThreeteSevenPunkt" :h3ThreeteEightPunkt="h3ThreeteEightPunkt" :h3ThreeteNinePunkt="h3ThreeteNinePunkt" :h3ForteenPunkt="h3ForteenPunkt" :h3ForteenOnePunkt="h3ForteenOnePunkt" :h3ForteenTwoPunkt="h3ForteenTwoPunkt" :h3ForteenThreePunkt="h3ForteenThreePunkt" :h3ForteenForPunkt="h3ForteenForPunkt" :h3ForteenFivePunkt="h3ForteenFivePunkt" :h3ForteenSixPunkt="h3ForteenSixPunkt" :h3ForteenSevenPunkt="h3ForteenSevenPunkt" :h1Text="h1Text" :h2Text="h2Text" :h3="h3" :title="titleDialog")
    .background-img
    .footer
</template>
  
  <script>
  import { mutations } from "@/store.js";
  import DialogWindow from "@/components/DialogWindow.vue";
  import SideBarLeft from '@/components/SideBarLeft.vue'
  import BurgerButton from '@/components/Burger.vue'
  export default {
    name:"TrainingPage",
    components: {
      SideBarLeft,
      BurgerButton,
      DialogWindow
    },
    data() {
      return {
        titleDialog: null,
        h1: null,
        h1FirstPunkt: "",
        h1SecondPunkt: "",
        h1ThreePunkt: "",
        h1ForPunkt: "",
        h1FivePunkt: "",
        h1SixPunkt : "",
        h1SevenPunkt : "",
        h1EightPunkt : "",
        h1NinePunkt : "",
        h1TenPunkt : "",
        h1ElevenPunkt : "",
        h1TwelvePunkt : "",
        h1ThreetenPunkt : "",
        h1FortenPunkt : "",
        h1FeftenPunkt : "",
        h2FirstPunkt: "",
        h2SecondPunkt: "",
        h2ThreePunkt: "",
        h2ForPunkt: "",
        h2FivePunkt: "",
        h2SixPunkt : "",
        h2SevenPunkt : "",
        h2EightPunkt : "",
        h2NinePunkt : "",
        h2TenPunkt : "",
        h2ElevenPunkt : "",
        h2TwelvePunkt : "",
        h2ThreetenPunkt : "",
        h2FortenPunkt : "",
        h2FeftenPunkt : "",
        h3FirstPunkt: "",
        h3SecondPunkt: "",
        h3ThreePunkt: "",
        h3ForPunkt: "",
        h3FivePunkt: "",
        h3SixPunkt: "",
        h3SevenPunkt: "",
        h3EightPunkt: "",
        h3NinePunkt: "",
        h3TenPunkt: "",
        h3ElevenPunkt: "",
        h3TwelvePunkt: "",
        h3ThreetenPunkt: "",
        h3FortenPunkt: "",
        h3FeftenPunkt: "",
        h3SixtenPunkt: "",
        h3SeventenPunkt: "",
        h3EighttenPunkt: "",
        h3NinetenPunkt: "",
        h3TwentePunkt: "",
        h3TwenteOnePunkt: "",
        h3TwenteTwoPunkt: "",
        h3TwenteThreePunkt: "",
        h3TwenteForPunkt: "",
        h3TwenteFivePunkt: "",
        h3TwenteSixPunkt: "",
        h3TwenteSevenPunkt: "",
        h3TwenteEightPunkt: "",
        h3TwenteNinePunkt: "",
        h3ThreeteenPunkt: "",
        h3ThreeteOnePunkt: "",
        h3ThreeteTwoPunkt: "",
        h3ThreeteThreePunkt: "",
        h3ThreeteForPunkt: "",
        h3ThreeteFivePunkt: "",
        h3ThreeteSixPunkt: "",
        h3ThreeteSevenPunkt: "",
        h3ThreeteEightPunkt: "",
        h3ThreeteNinePunkt: "",
        h3ForteenPunkt: "",
        h3ForteenOnePunkt: "",
        h3ForteenTwoPunkt: "",
        h3ForteenThreePunkt: "",
        h3ForteenForPunkt: "",
        h3ForteenFivePunkt: "",
        h3ForteenSixPunkt: "",
        h3ForteenSevenPunkt: "",
        h2: null,
        h3: null,
        h1Text: null,
        h2Text: null,
        dialogBlue: false,
        dialog: false,
      }
    },
    methods: {
      routeWorkSchedule() {
        this.$router.push({path: '/workschedule'})
        mutations.toggleNav() 
      },
      routeTestFirst() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfbaw6mjuQq8RYdVtl8b035kzhlAOZUrROHsBWCOx2ITFdLBQ/viewform?embedded=true"
      },
      routeTestSecond() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdXMnflvwORaOAXbk-CiWHuar0K3ijl1ZcU5NsGUUL9YjAK7g/viewform?embedded=true"
      },
      routeTestThree() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc7OGxeh6c3sDNw-y3L2f2JRkqnySTKIIZiRgdFbJYLKuijSQ/viewform?embedded=true"
      },
      closeDialog() {
        this.dialog = false
      },
      clearPaper() {
        this.h1 = null,
        this.h1FirstPunkt = null,
        this.h1SecondPunkt = null,
        this.h1ThreePunkt = null,
        this.h1ForPunkt = null,
        this.h1FivePunkt = null,
        this.h1SixPunkt = null,
        this.h1SevenPunkt = null,
        this.h1EightPunkt = null,
        this.h1NinePunkt = null,
        this.h1TenPunkt = null,
        this.h1ElevenPunkt = null,
        this.h1TwelvePunkt = null,
        this.h1ThreetenPunkt = null,
        this.h1FortenPunkt = null,
        this.h1FeftenPunkt = null,
        this.h2FirstPunkt = null,
        this.h2SecondPunkt = null,
        this.h2ThreePunkt = null,
        this.h2ForPunkt = null,
        this.h2FivePunkt = null,
        this.h2SixPunkt = null,
        this.h2SevenPunkt = null,
        this.h2EightPunkt = null,
        this.h2NinePunkt = null,
        this.h2TenPunkt = null,
        this.h2ElevenPunkt = null,
        this.h2TwelvePunkt = null,
        this.h2ThreetenPunkt = null,
        this.h2FortenPunkt = null,
        this.h2FeftenPunkt = null,
        this.h3FirstPunkt = null,
        this.h3SecondPunkt = null,
        this.h3ThreePunkt = null,
        this.h3ForPunkt = null,
        this.h3FivePunkt = null,
        this.h3SixPunkt = null,
        this.h3SevenPunkt = null,
        this.h3EightPunkt = null,
        this.h3NinePunkt = null,
        this.h3TenPunkt = null,
        this.h3ElevenPunkt = null,
        this.h3TwelvePunkt = null,
        this.h3ThreetenPunkt = null,
        this.h3FortenPunkt = null,
        this.h3FeftenPunkt = null,
        this.h3SixtenPunkt = null,
        this.h3SeventenPunkt = null,
        this.h3EighttenPunkt = null,
        this.h3NinetenPunkt = null,
        this.h3TwentePunkt = null,
        this.h3TwenteOnePunkt = null,
        this.h3TwenteTwoPunkt = null,
        this.h3TwenteThreePunkt = null,
        this.h3TwenteForPunkt = null,
        this.h3TwenteFivePunkt = null,
        this.h3TwenteSixPunkt = null,
        this.h3TwenteSevenPunkt = null,
        this.h3TwenteEightPunkt = null,
        this.h3TwenteNinePunkt = null,
        this.h3ThreeteenPunkt = null,
        this.h3ThreeteOnePunkt = null,
        this.h3ThreeteTwoPunkt = null,
        this.h3ThreeteThreePunkt = null,
        this.h3ThreeteForPunkt = null,
        this.h3ThreeteFivePunkt = null,
        this.h3ThreeteSixPunkt = null,
        this.h3ThreeteSevenPunkt = null,
        this.h3ThreeteEightPunkt = null,
        this.h3ThreeteNinePunkt = null,
        this.h3ForteenPunkt = null,
        this.h3ForteenOnePunkt = null,
        this.h3ForteenTwoPunkt = null,
        this.h3ForteenThreePunkt = null,
        this.h3ForteenForPunkt = null,
        this.h3ForteenFivePunkt = null,
        this.h3ForteenSixPunkt = null,
        this.h3ForteenSevenPunkt = null,
        this.h2 = null,
        this.h3 = null,
        this.h1Text = null,
        this.h2Text = null,
        this.dialogBlue = false
      },
      openPaperOne() {
        this.clearPaper()
        this.titleDialog = null
        this.h1 = "История компании",
        this.h2 = "Философия компании",
        this.h1Text = "История развития компании начинается с ноября 1994 года. Именно тогда была выпущена первая партия хлеба и батонов. Производство располагалось на арендуемых площадях столовой Калининградского вагоностроительного завода. В то время на предприятии работала всего одна подовая печь, а на производстве трудились всего 10 человек.",
        this.h1FirstPunkt = " Уже в первые годы своей работы компания начинает осваивать принципиально новые технологии хлебопечения, не забывая и возрождая исконно русские традиции выпечки хлеба. В 1996 году предприятие запускает кондитерское производство.",
        this.h1SecondPunkt = "Сегодня компания «Хлеб всему голова» - это большой производственный комплекс, где трудятся около шестисот человек, «Хлеб всему голова», это более двухсотпятидесяти  наименований хлебобулочных и кондитерских изделий.  Это не просто бренд на продуктовом рынке услуг Калининграда и хорошо знакомое всем имя, «Хлеб всему голова», это современная культура потребления, высокий уровень услуг, и без всякого сомнения - гарантированный знак качества пищевого продукта…. Учитывая современный ритм жизни, ещё одним направлением в заботе компании о покупателях стала гастрономия: супы, каши, домашние обеды, сэндвичи, броттены, запеканки с разнообразными начинками -  их появление органично вошло в общий ассортимент мини-пекарен.",
        this.h2Text = "Создание хлеба превосходного качества требует определённой философии, ценностей и принципов. Именно эта философия и именно эти ценности и принципы, которым наши пекаря следуют и применяют каждый день. Мы построили свою компанию на прочном фундаменте с самого первого дня, создавая уникальное направление, которое постоянно адаптируется.",
        this.h2FirstPunkt = " Приверженность инновациям ",
        this.h2SecondPunkt = "Хотя технология важна, наше стремление к инновациям идет гораздо глубже. Мы стремимся, создавать новый тип торговой точки — места, которые имеют собственную атмосферу, являются яркими, шумными, приветливыми местами, где клиенты ищут общения на протяжении всего дня. Инновации не обязательно касаются концепции, связанной с ремеслом выпечки — инновации в времени обслуживания, традициях и методах выпечки. Тем не менее, мы применяем совершенно иной подход, движущий нас к улучшению вкуса и срока годности хлеба за счет техических инноваций. Мы понимаем, что наше традиционное ремесло должно превратиться в нечто более динамичное и современное, которое отражает тенденции нашего времени. Наши «Хлеб всему голова» являются ярким примером этого обязательства — они являются инновационными в своем собственном характере и отражают основные исходные тенденции.",
        this.dialog = true
      },
      openPaperTwo() {
        this.clearPaper()
        this.titleDialog = "Ценности и стандарты компании"
        this.h1 = "Ценности компании",
        this.h2 = "Стандарты компании",
        this.h1Text = "Мы внимательны к нашим сотрудникам. Мы поддерживаем своих сотрудников в стремлении развиваться и обучаться, помогаем им в этом, искренне полагая, что квалифицированный и талантливый персонал – залог успеха любой Компании. Мы создаем позитивный командный дух и семейную обстановку. Наши ценности: ",
        this.h1FirstPunkt = "1. Добро. Каждый из наших сотрудников и всё руководство создают хорошее. В наших пекарнях самое главное - атмосфера той доброты, которая связана с тёплым хлебом и положительными эмоциями.",
        this.h1SecondPunkt = "2. Забота. Наш сервис и наша продукция всегда высокого уровня, в каждом нашем действии выражается забота о гостях, потому что мы очень ценим свой бизнес и сами заботимся о нем и о всех, кто к нему причастен.",
        this.h1ThreePunkt = "3. Семья. Мы хотим окутать людей своей теплотой и заботой, вернуть уважительное отношение к хлебу, к дому, к самому важному в жизни.",
        this.h1ForPunkt = "4. Традиции. Хлеб всегда был «головой» в России. Его производство считалось священным, уважаемым и ценным. Мы считаем, что история и преемственность помогают постоянно развиваться, создают фундамент, который может пережить народу любые бури и кризисы.",
        this.h2Text = "С исключительной любовью к своему делу мы выпекаем для Вас хлеб и хлебобулочные изделия, пироги и пирожки, производим кондитерскую продукцию. Вся продукция реализуется непосредственно в пекарне или в собственной сети фирменных магазинов.",
        this.h2FirstPunkt = " Мы обеспечиваем самый строгий контроль сырья. Отборные мука, начинки и другие ингредиенты от проверенных и сертифицированных производителей гарантируют вам постоянное высокое качество.",
        this.h2SecondPunkt = " Мы не применяем консерванты или усилители вкуса. Мы строго соблюдаем стандарты и сроки реализации продукции. На вашем столе только горячий хлеб и выпечка произведенные здесь и сейчас.",
        this.h2ThreePunkt = " Все, что мы производим хранит тепло наших рук, в каждом изделии мы передаем свою любовь и уважение к Вам и Хлебу.",
        this.dialogBlue = true
        this.dialog = true
      },
      openPaperThree() {
        this.clearPaper()
        this.titleDialog = "Должностная инструкция пекаря на производстве"
        this.h1 = "1. Должностные обязанности",
        this.h2 = "2. Права.",
        this.h3 = "3. Ответственность"
        this.h1Text = "Пекарь обязан: ",
        this.h1FirstPunkt = "1) Перед началом работы проверить готовность рабочего места к работе – исправность и чистоту оборудования, кухонного инвентаря, чистоту рабочего места, наличие сырья и полуфабрикатов в достаточном количестве требуемого качества.",
        this.h1SecondPunkt = "2) Перед началом расстойки органолептически оценить качество сырья и полуфабрикатов.",
        this.h1ThreePunkt = "3) В течение рабочего дня:",
        this.h1ForPunkt = "-следовать указаниям бригадира смены, освобожденного бригадира, заведующей пекарней;",
        this.h1FivePunkt = "-соблюдать технологию расстойки и выпечки хлебобулочных изделий из зерновых смесей, муки высшего сорта и ржаной муки;"
        this.h1SixPunkt = "-следить за наличием сырья и материалов и своевременно сообщать об их отсутствии бригадиру смены, освобожденному бригадиру, заведующей пекарней;"
        this.h1SevenPunkt = "-постоянно находится на своем рабочем месте и покидать его только с разрешения бригадира смены, освобожденного бригадира, заведующей пекарней;"
        this.h1EightPunkt = "-бережно относится к технологическому оборудованию и кухонному инвентарю, не допускать их порчи и повреждения;"
        this.h1NinePunkt = "-немедленно сообщать о неисправностях технологического оборудования и поломках кухонного инвентаря бригадиру смены, освобожденному бригадиру, заведующей пекарней;"
        this.h1TenPunkt = "-поддерживать порядок и чистоту рабочего места, технологического оборудования, кухонного инвентаря, производственного помещения цеха."
        this.h1ElevenPunkt = "4) Соблюдать правила техники безопасности и инструкции по эксплуатации инвентаря, оборудования и средств механизации."
        this.h1TwelvePunkt = "5) После окончания смены пекарь обязан произвести подготовку рабочего места для следующей смены."
        this.h1ThreetenPunkt = "6) Пекарь обязан осуществлять контроль за сотрудниками смены в плане соблюдения ими условий договора о коллективной материальной ответственности, принимать меры в соответствии с подписанным договором о коллективной материальной ответственности к сохранности вверенных ему материальных ценностей."
        this.h1FortenPunkt = "7) Информировать администрацию обо всех, без исключения, фактах, которые могут негативно отразится на деловой репутации предприятия, морально-психологическом климате коллектива, повлиять в той или иной мере на состояние производственного процесса, прибыль предприятия."
        this.h1FeftenPunkt = "8) Пекарь, помимо обязанностей, изложенных выше, должен выполнять обоснованные требования и поручения директора производств, заместителя директора производства, освобожденного бригадира кондитерского цеха, касающиеся работы и отдаваемые в пределах их полномочий."
        this.h2Text = "Пекарь  имеет право:",
        this.h2FirstPunkt = "1) Требовать справедливого и равномерного распределения функциональных обязанностей в пекарне в течение рабочей смены.",
        this.h2SecondPunkt = "2) Визировать документы управленческой и кадровой деятельности в части, касающейся исполнения должностных обязанностей им, а так же иными сотрудниками, которые имели или имеют отношение к рассматриваемым событиям, действиям и фактам.",
        this.h2ThreePunkt = "3) Вносить на рассмотрение руководства предложения по улучшению условий труда.",
        this.h2ForPunkt = "4) Требовать от руководства создания нормальных условий для выполнения служебных обязанностей."
        this.h2FivePunkt = "5) Принимать решения в пределах своей компетенции."
        this.h3FirstPunkt = "Пекарь несет ответственность за:",
        this.h3SecondPunkt = "1) своевременное и качественное выполнение обязанностей, возложенных должностной инструкцией;",
        this.h3ThreePunkt = "2) недостоверную информацию о состоянии дел и выполнении должностных обязанностей;",
        this.h3ForPunkt = "3) сохранение коммерческой тайны и не разглашение любой информации, полученной в результате профессиональной деятельности;",
        this.h3FivePunkt = "4) правонарушения, совершенные в процессе осуществления своей деятельности — в пределах, определенных действующим административным, уголовным и гражданским законодательством;"
        this.h3SixPunkt = "5) причинение ущерба (материального либо нанесение вреда деловой репутации) предприятию в пределах, определенных действующим трудовым и гражданским законодательством;"
        this.h3SevenPunkt = "6) невыполнение приказов, распоряжений директора производства, заместителя директора производства, касающиеся работы и отдаваемые в пределах их полномочий;"
        this.h3EightPunkt = "7) невыполнение указаний заведующего пекарней и освобожденного бригадира пекарни;"
        this.h3NinePunkt = "8) нарушение Правил внутреннего трудового распорядка, техники безопасности и противопожарной безопасности и санитарно- гигиенических норм."
        this.dialogBlue = true
        this.dialog = true
      },
      openPaperFor() {
        this.clearPaper()
        this.titleDialog = "Повышение эффективности работы"
        this.h1 = "Чек-лист — нюансы и особенности.",
        this.h2 = "",
        this.h1Text = "1. Внешнего вида пекарей. Здесь следует смотреть на то, в чем пришли сотрудники и насколько чистая и целая у них спецодежда. Также немаловажной деталью является наличие головного убора.",
        this.h1FirstPunkt = "Чек-лист представляет собой список, где перечислены особые пункты, выполнение которых нужно проверить. Все пункты делятся на два направления:",
        this.h1SecondPunkt = "1. Оценка работы сотрудников",
        this.h1ThreePunkt = "2. Оценка состояния оборудования",
        this.h1ForPunkt = "Оценка работы сотрудников.",
        this.h1FivePunkt = "Первое направление требует проверки следующих пунктов:"
        // this.h2Text = "",
        this.h2FirstPunkt = "2. Работы с ТТК. Во-первых, важно посмотреть, чтобы все технологические карты лежали на своем месте и были упорядочены. Во-вторых, следует оценить использование ТТК сотрудниками на производстве. В-третьих, нормативные документы всегда должны быть актуальными.",
        this.h2SecondPunkt = "3. Работы с оборудованием. На производстве всегда должен находиться журнал технического обслуживания, который сотрудники должны заполнять регулярно. Также должна быть предусмотрена инструкция по эксплуатации оборудования.",
        this.h2ThreePunkt = "Оценка состояния оборудования. Вторая категория чек-листа включает следующие пункты:",
        this.h2ForPunkt = "1. Чистота техники. Важно, чтобы рабочее место всегда было прибрано. Сотрудники должны регулярно мыть печи, шкафы, тестомесы, весы и протирать столы, чтобы не было скопление грязи и пыли."
        this.h2FivePunkt = "2. Функционирование оборудования. Устройства должны работать исправно. Для этого предусматривается журнал технического обслуживания, где сотрудники своевременно отмечают любые неполадки."
        this.dialogBlue = true
        this.dialog = true
      },
      openPaperFive() {
        this.clearPaper()
        this.titleDialog = "Должностная инструкция продавца-кассира"
        this.h1 = "1. Должностные обязанности",
        this.h2 = "",
        this.h3 = ""
        this.h1Text = "Продавец-кассир обязан: ",
        this.h1FirstPunkt = "1) Прибывать на рабочее место в соответствии с графиком работы.",
        this.h1SecondPunkt = "2) Подготовить рабочее место к открытию гипермаркета (проверить наличие чековой ленты и готовность кассового аппарата к работе).",
        this.h1ThreePunkt = "3) Навести порядок на своем рабочем месте (убрать мусор, вымыть кассовый стол, протереть кассовый аппарат). По распоряжению старшего кассира выложить товар в прикассовой зоне, (в том числе проверить срок годности товара).",
        this.h1ForPunkt = "4) Получить разменную монету и купюры в количестве, необходимом для расчетов с покупателями.",
        this.h1FivePunkt = "5) Перед началом работы на ККМ выполнить следующие действия:"
        this.h1SixPunkt = "-проверить исправность блокирующих устройств, установить кассовую ленту;"
        this.h1SevenPunkt = "-фискальную память приложить в конце дня к кассовому отчету;"
        this.h1EightPunkt = "-перед работой на контрольно-кассовой машине проверить внешним осмотром: устойчивость машины на столе, отсутствие внешних повреждений и посторонних предметов вблизи кассовой машины; исправность кабеля (шнура) электропитания, вилки, розетки; наличие и надежность заземляющих соединений (отсутствие обрывов, прочность контакта между корпусом машины и заземляющим проводом)."
        this.h1NinePunkt = "-до включения контрольно-кассовой машины в электрическую сеть проверить исправность блокирующих устройств."
        this.h1TenPunkt = "-обо всех обнаруженных неисправностях контрольно-кассовой машины, электропроводки и других неполадках сообщить старшему кассиру и приступить к работе только после их устранения."
        this.h1ElevenPunkt = "6) Проверять качество и количество продаваемых товаров, качество упаковки, наличие необходимой маркировки и правильность цен на товары, и оказываемые услуги."
        this.h1TwelvePunkt = "7) Сканировать товар по штрих-коду, находящемуся на упаковке товара:"
        this.h1ThreetenPunkt = "-если штрих-код не распознается сканером, кассир вводит его вручную в кассовую машину по цифровой маркировке, содержащейся на шрих-коде."
        this.h1FortenPunkt = "-после ввода штрих-кода проверить соответствие наименования товара на дисплее кассовой машины фактическому товару."
        this.h1FeftenPunkt = "-товар сканируется поштучно. Если у покупателя большое количество одноименного товара, кассир может в присутствии старшего кассира просканировав одну единицу товара – количество ввести вручную."
        this.h2Text = "",
        this.h2FirstPunkt = "8)Получить от покупателя деньги за товары в сумме согласно ценникам на товар в следующем порядке:",
        this.h2SecondPunkt = "-для одного покупателя определить общую сумму покупки по показанию индикатора кассовой машины и назвать ее покупателю;",
        this.h2ThreePunkt = "-получить от покупателя деньги за товары согласно сумме, называемой покупателем.",
        this.h2ForPunkt = "-четко назвать сумму полученных денег и положить эти деньги отдельно на виду у покупателя;"
        this.h2FivePunkt = "-распечатать чек;"
        this.h2SixPunkt = "-назвать сумму причитающейся сдачи, пересчитать деньги при покупателе и выдать их покупателю вместе с чеком (при этом бумажные купюры и разменную монету выдать одновременно)."
        this.h2SevenPunkt = " -после окончательного расчета кладет полученные от покупателя деньги в кассовый ящик."
        this.h2EightPunkt = "9)В случае возникновения ошибки продавца-кассира:"
        this.h2NinePunkt = " -при вводе суммы и невозможности погашения чека в течение смены неиспользованный чек актируется в конце смены;"
        this.h2TenPunkt = "-в выдаче сдачи покупателю при возникновении спора покупатель имеет право потребовать у старшего кассира снятия кассы;"
        this.h2ElevenPunkt = "-составить и оформить совместно с администратором акт о возврате денежных сумм покупателям по неиспользованным кассовым чекам;"
        this.h2TwelvePunkt = " -погасить их, наклеить на лист бумаги и вместе с актом сдать в бухгалтерию (где они хранятся при текстовых документах за данное число);"
        this.h2ThreetenPunkt = "-продавец-кассир не имеет права: снимать кассу без разрешения старшего кассира;"
        this.h2FortenPunkt = " -не выдавать кассовый чек покупателю."
        this.h2FeftenPunkt = "-при пробитии большего количества позиций, чем есть в покупке, кассир рассчитывается с покупателем средствами из личных денег."
        this.h3FirstPunkt = "-при не совпадении данных ККМ с данными на штрих кодах и весовых лейблах необходимо предупредить покупателя.",
        this.h3SecondPunkt = "10) При возникновении неисправностей продавец-кассир обязан:",
        this.h3ThreePunkt = " -выключить кассовую машину в присутствии кассира-ревизора;",
        this.h3ForPunkt = " -вызвать старшего кассира;",
        this.h3FivePunkt = "-совместно со старшим кассиром определить характер неисправности;"
        this.h3SixPunkt = " -в случае невыхода чека из кассовой машины (отсутствие красящей ленты), кассир вставляет ленту и выводит покупателю копию чека;"
        this.h3SevenPunkt = " -в случае невозможности дальнейшей работы из-за неисправностей кассовой машины кассир совместно со старшим кассиром оформляет окончание работы на данной кассовой машине также, как при окнчании смены."
        this.h3EightPunkt = "11) По окончании смены:"
        this.h3NinePunkt = "-подготовить денежную выручку и другие платежные документы;"
        this.h3TenPunkt = " -составить кассовый отчет и сдать выручку вместе с кассовым отчетом по приходному ордеру в главную кассу гипермаркета."
        this.h3ElevenPunkt = "12) Продавец-кассир должен выполнять следующие требования:"
        this.h3TwelvePunkt = " -быть терпеливым, внимательным, предупредительным при подсчете денег покупателями;"
        this.h3ThreetenPunkt = "-вежливо и корректно относиться к покупателям;"
        this.h3FortenPunkt = " -приветствовать покупателя и поблагодарить его за совершенные покупки;"
        this.h3FeftenPunkt = "-производить расчеты таким образом, чтобы покупатель мог видеть правильность этой операции."
        this.h3SixtenPunkt = "13)Продавцу-кассиру запрещается:",
        this.h3SeventenPunkt = "-допускать посторонних лиц к кассовой машине, кроме старшего кассира, кассира-ревизора, администратора и с их разрешения технического специалиста или контролирующее лицо для проверки кассы;",
        this.h3EighttenPunkt = " -покидать кассовую кабину без уведомления старшего кассира и не выйдя из режима кассира на ККМ.",
        this.h3NinetenPunkt = " -самостоятельно вносить изменения в программу работы кассового терминала (для чего последний должен иметь защиту от несанкционированного доступа);",
        this.h3TwentePunkt = "-не должен иметь в кассе личных денег, не учтенных через кассовую машину (кроме денег, выданных перед началом работы)."
        this.h3TwenteOnePunkt = "-иметь в кассе личные вещи, пакеты, сумки, деньги;"
        this.h3TwenteTwoPunkt = "-приводить себя и форму в порядок (только в специально отведенном для этого месте);"
        this.h3TwenteThreePunkt = " -находиться на рабочем месте без формы и бэйджа;"
        this.h3TwenteForPunkt = "-употреблять на рабочем месте в пищу продукты, даже оплаченные в кассе (жевать что-либо);"
        this.h3TwenteFivePunkt = " -вести на рабочем месте разговоры с родственниками и знакомыми;"
        this.h3TwenteSixPunkt = "-громко говорить, кричать."
        this.h3TwenteSevenPunkt = "14)Продавец-кассир помогает упаковать товар покупателю, если нет другого покупателя.Продавец –кассир обязан строго придерживается следующей формы приветствия:"
        this.h3TwenteEightPunkt = "-При появлении покупателя – поприветствовать покупателя УЛЫБКОЙ и словами «Здравствуйте»"
        this.h3TwenteNinePunkt = "-Перед сообщением о сумме покупке поинтересоваться есть ли у покупателя Дисконтная карта."
        this.h3ThreeteenPunkt = "-После оформление покупки — попрощаться с покупателем словами «Спасибо за покупку. Ждем Вас снова»."
        this.h3ThreeteOnePunkt = "2. Права. ",
        this.h3ThreeteTwoPunkt = "Продавец-кассир имеет право:",
        this.h3ThreeteThreePunkt = "1) вносить предложения руководству предприятия по улучшению работы, относящейся к функциональным обязанностям продавца-кассира и всего предприятия в целом;",
        this.h3ThreeteForPunkt = "2) сообщать сотрудникам ОПП о злоупотреблениях, хищениях товара, как со стороны покупателей, так и со стороны сотрудников магазина;",
        this.h3ThreeteFivePunkt = "3) сообщать директору о бездействии кого-либо в отношении своих должностных обязанностей, нарушении правил торговли, трудовой дисциплины и правил внутреннего распорядка;"
        this.h3ThreeteSixPunkt = "4) давать объяснения по существу и причинам возникших конфликтных ситуаций;"
        this.h3ThreeteSevenPunkt = "5) знакомиться с проектами решений руководства, касающихся деятельности продавца-кассира;"
        this.h3ThreeteEightPunkt = "6) подписывать и визировать документы в пределах своей компетенции;"
        this.h3ThreeteNinePunkt = "3. Ответственность"
        this.h3ForteenPunkt = "Продавец-кассир несет ответственность за:"
        this.h3ForteenOnePunkt = "1)несвоевременное и некачественное выполнение обязанностей, возложенных должностной инструкцией;"
        this.h3ForteenTwoPunkt = "2)недостоверную информацию о состоянии дел и выполнении должностных обязанностей;"
        this.h3ForteenThreePunkt = "3)не сохранение коммерческой тайны и разглашение любой информации, полученной в результате профессиональной деятельности;"
        this.h3ForteenForPunkt = "4)правонарушения, совершенные в процессе осуществления своей деятельности — в пределах, определенных действующим административным, уголовным и гражданским законодательством;"
        this.h3ForteenFivePunkt = "5)причинение ущерба (материального либо нанесение вреда деловой репутации) предприятию в пределах, определенных действующим трудовым и гражданским законодательством;"
        this.h3ForteenSixPunkt = "6)невыполнение приказов, распоряжений директора по персоналу и директора профильного направления."
        this.h3ForteenSevenPunkt = "7)нарушение правил внутреннего трудового распорядка, техники безопасности и противопожарной безопасности и санитарно- гигиенических норм."
        this.dialogBlue = true
        this.dialog = true
      },
      openPaperSix() {
        this.clearPaper()
        this.titleDialog = "Кросс-продажи"
        this.h1 = "Чек-лист — нюансы и особенности.",
        this.h2 = "",
        this.h1Text = "Кросс-продажи (дополнительные продажи) – это «теневая» область продаж, в которой активно используются манипулятивные техники, а средний чек каждого четвёртого покупателя гарантированно увеличивается! Бывали случаи, когда средний чек вырастал в пять раз, при этом клиент оставался довольным. В реальности – всегда можно предложить покупателю сопутствующие товары или просто «хит продаж», и значительно повысить прибыль.",
        this.h1FirstPunkt = "Секреты",
        this.h1SecondPunkt = "Чтобы добиться успеха в дополнительных продажах, продавец должен тренироваться. Предложение купить что-то ещё, озвученное правильным тоном и в подходящий момент, обычно принимается клиентом. Поэтому тренируйте кассиров и продавцов, доводя нужные фразы до автоматизма.",
        this.h1ThreePunkt = "Как ни странно, клиенты любят, когда им что-то предлагают дополнительно. В этом они видят проявление заботы и внимания со стороны продавца. Так что дополнительные продажи не только увеличивают средний чек, но и поднимают лояльность покупателей.",
        this.h1ForPunkt = "Ошибки",
        this.h1FivePunkt = "1. Все вопросы, сформулированные так, что на них можно ответить «нет»."
        this.h2Text = "2. Неудачно подобранный вариант дополняющего товара.",
        this.h2FirstPunkt = "3. Слишком навязчивое предложение дополнительных покупок, которые продавец называет буквально по списку.",
        this.h2SecondPunkt = "4. Неестественность в голосе мимике при разговоре продавца с покупателем.",
        this.h2ThreePunkt = "5. Отсутствие каких-либо дополняющих услуг и товаров.",
        this.h2ForPunkt = "Золотое правило"
        this.h2FivePunkt = "Предлагайте людям купить дополнительно то, что может быть им полезно, и они будут вам за это благодарны!"
        this.dialogBlue = true
        this.dialog = true
      },
      routeMainPage() {
        this.$router.push({path: '/MainPage'})
      },
      routeMyProfile() {
        this.$router.push({path: '/myprofile'})
        mutations.toggleNav() 
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .white-color {
    font-size: 45px;
    color: #fff;
  }
  
  .content-block {
    padding-bottom: 100px;
    z-index: 101;
    height: 100%;
    width: 100%;
    margin-bottom: 25px;
  }
  .first-main-block {
    /* text-align: center; */
    margin-top: 20px;
    height: 100%;
    width: 100%;
    /* margin: 30px; */
  }

  .block-paper {
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .first-paper {
    margin-left: 40px;
    width: 50%;
    height: 100%;
  }

  .second-paper {
    margin-right: 40px;
    width: 50%;
    height: 100%;
  }
  .paper {
    cursor: pointer;
    width: 85%;
    height: 300px;
    text-align: center;
    background-color: #ffc17d;
    border-radius: 75px;
    margin: auto;
    box-shadow: 10px 10px 10px;
    border: 2px solid #fff;
  }
  .back-blue {
    background-color: #7ea8c5;
  }
  .content-paper {
    width: 100%;
    height: 100%;
    line-height: 250px;
    vertical-align: middle;
    text-align: center;
    padding: 20px;
  }
  .text-paper {
    line-height: normal;
    display: inline-block;
    vertical-align: middle;
  }

  .block-test-button {
    margin-top: 30px;
    /* padding: 0 30px; */
    text-align: center;
  }
  .btn-test {
    /* margin: 30px 30px 0 30px; */
    width: 88%;
    height: 75px;
    border-radius: 37px;
    background-color: #18a795;
    color: white;
    border: 2px solid white;
    box-shadow: 10px 10px 10px rgb(5, 81, 61);
  }
  .home-icon {
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 70px;
  }
  .img-home {
    width: 32px;
    height: 30px;
  }
  .img{
    width: 50px;
    height:50px;
    margin:10px 0 0 10px;
    background: url("@/assets/img/Ресурс6.svg");
    background-repeat: no-repeat;
  }
  .all {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-image: url("@/assets/training-page/Training-page-background.jpg");
    background-size: 100%;
    min-height: 100vh;
  }
  .header,
  .footer {
    height: 50px;
  }
  
  .header {
    position: relative;
    z-index: 101;
    margin:20px;
    width: calc(100% - 40px);
    height: 60px;
    background: orange;
    display: flex;
    border-radius:30px ;
    box-shadow: 5px 5px 15px #000;
    border: 1px solid #fff;
  }
  .footer {
    /* background: #cc9f4f; */
    z-index: 101;
    background: orange;
    margin-top: auto;
  }

  .text {
    width: 160px;
    height:inherit;
    margin-top: 17px;
    margin-left: 10px;
    background: url("@/assets/img/Ресурс9.svg");
    background-repeat: no-repeat;
    background-size: auto;
  }
  .ico{
    position: absolute;
    display: flex;
    justify-content: center;
  }
  .sidebar {
    z-index: 1000;
    position: absolute;
    top: 105px;
    left: 0px;
    background: #fae8b9;
    float: left;
    width: 17%;
    height: 100%;
  }
  
  .btn-sidebar {
    width:200px;
    height:60px;
    box-sizing: border-box;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    color: #e74c3c;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    -webkit-align-self: center;
        -ms-flex-item-align: center;
            align-self: center;
    font-size: 1rem;
    line-height: 1;
    margin: 20px;
    padding: 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }
  
  .btn-sidebar:hover, .btn:focus {
    color: #fff;
    outline: 0;
  }
  
  .third {
    border-color: orange;
    color: #fff;
    box-shadow: 0 0 40px 40px orange inset, 0 0 0 0 orange;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
  }
  .third:hover {
    box-shadow: 0 0 10px 0 orange inset, 0 0 10px 4px orange;
  }
  .block-burger{
    position: absolute;
    right: 30px;
    top: 29px;
  }

  .burgerHeader{
    font-size: 25px;
    font-family: monospace;
    font-weight: 600;
    color: #fff;
    display: flex;
    justify-content: center;
  }
  .background-img {
    position: absolute;
    bottom: 0px;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/training-page/Training-page-background.jpg");
    background-size: 100%;
  }
  </style>