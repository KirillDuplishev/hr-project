<template lang="pug">
div.main-box
  .all
    .header
      .ico
        .text
        .img
      .home-icon(@click="routeMainPage")
        img.img-home(src="@/assets/img/home-icon.png")
      .block-burger
        BurgerButton  
    SideBarLeft
      span.burgerHeader Меню
      button.btn-sidebar.third(@click="routeMyProfile") Мой профиль
      button.btn-sidebar.third(@click="routeTraining") Обучение
      button.btn-sidebar.third(@click="$router.push({path:'/'})") Выход
    div.main-calendar-block
      div.calendar-block
        v-app.calendar
          VueWeekScheduler(
            v-model="events"
            :config="config"
            :editable="editable"
          )
      .check-img
        div.description
          div.span-information
            span.money-fonts Заработная плата за месяц:
          div.span-money 
            span.money-fonts 30 000 ₽

    .background-img
    .footer    
  </template>
  
  <script>
  import { mutations } from "@/store.js";
  import SideBarLeft from '@/components/SideBarLeft.vue'
  import BurgerButton from '@/components/Burger.vue'
  import VueWeekScheduler from 'vuetify-week-scheduler';
  export default {
    name:"TrainingPage",
    components: {
      SideBarLeft,
      BurgerButton,
      VueWeekScheduler
    },
    data() {
      return {
        events: [],
        editable: true,
        config: {
          periodBackgroundColor: "#F44336",
          // periodTitle: 0,
          periodTextColor: "#fff",
          periodBorderColor: "#ccc",
          daysList: [    // list of days labels
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
            "Воскресенье",
          ],
        },
      }
    },
    methods: {
      routeTraining () {
        this.$router.push({path: '/training'})
        mutations.toggleNav() 
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
strong {
  color: #fff;
}
  .main-calendar-block {
    z-index: 101;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;
  }
  .calendar-block {
    width: 60%;
    height: 100%;
  }

  .calendar {
    z-index: 300;
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
    min-height: 100vh;
  }
  .main-box {
    background-image: url("@/assets/img/Autoback.jpg");
    /* background-image: url("@/assets/img/Autoback.jpg"); */
    background-repeat:no-repeat ;
    background-size: 112%;
    min-width: 100%;
    min-height: 100%; 
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
    background-image: url("@/assets/img/Autoback.jpg");
    /* background-size: 100%; */
  }
  .check-img{
    margin-top: -250px;
    width: 40%;
    height: 1100px;
    text-align: center;
    background: url("@/assets/img/Check2.png");
    background-repeat:no-repeat ;
    transform: scale(0.5);
    /* background-position: 80%; */
    /* backdrop-filter: invert(60%); */
    /* background-position-x: 180%; */
  }
  .description {
    width: 80%;
    margin: 0px 0% 0px 6%;
  }
  .span-money {
    height: 50px;
    /* margin-left: 30px; */
    margin-top: 25px;
    text-align: center; 
  }
  .span-information {
    /* margin-left: 30px; */
    text-align: center;
    margin-top: 300px;
  }
  .money-fonts {
    font-size: 70px;
    font-family: 'SF UI Display';
    font-style: normal;
    font-weight: bold;
  }
  </style>