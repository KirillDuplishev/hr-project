<template lang="pug">
div.main-box
  .all
    .background
      .header
        .ico
          .img
          .text
        v-btn.back(v-show="showEmploymenthistoryWork" @click="routeMyProfile" fab x-large)
          v-icon mdi-arrow-left-top-bold
        v-btn.exit(v-show="showEmploymenthistoryWork" @click="exit" fab x-large) 
          v-icon mdi-exit-to-app
        .home-icon( v-show="!showEmploymenthistoryWork" @click="routeMainPage")
          img.img-home(src="@/assets/img/home-icon.png")
        .block-burger(v-show="!showEmploymenthistoryWork")
          BurgerButton  
      SideBarLeft(v-show="!showEmploymenthistoryWork")
        span.burgerHeader Меню
        button.btn-sidebar.third(@click="routeMyProfile") Мой профиль
        button.btn-sidebar.third(@click="routeTraining") Обучение
        button.btn-sidebar.third(@click="$router.push({path:'/'})") Выход
      div.main-calendar-block
        div.calendar-block-first
          .paper()
        div.calendar-block-second
          datepicker.date(:inline="true" :language="ru" :highlighted="highlighted")
        //- .check-img
        //-   div.description
        //-     div.span-information
        //-       span.h1.money-fonts {{lastName }} {{firstName }} {{middleName }}
        //-       span.h1 ({{role}})
        //-     div.span-money 
        //-       span.money-fonts {{cash}}
        .check-img
          div.description
            div.span-information
              span {{lastName }}
              br 
              span {{firstName }}
              br
              span {{middleName }}
              br
              span ({{role}})
              br
              span Заработная плата за месяц:
              //- div.span-money 
              br
              b
                span {{cash}}
      //- DialogWindowWork(:dialog="dialog" :dialogBlue="dialogBlue" @closeDialog="closeDialog" :title="titleDialog" :h1FirstPunkt="h1FirstPunkt" :h1SecondPunkt="h1SecondPunkt" :h1ThreePunkt="h1ThreePunkt" :h1ForPunkt="h1ForPunkt" :h1FivePunkt="h1FivePunkt" :h1SixPunkt="h1SixPunkt" :h1SevenPunkt="h1SevenPunkt" :h1EightPunkt="h1EightPunkt" :h1NinePunkt="h1NinePunkt" :h1TenPunkt="h1TenPunkt" :h1ElevenPunkt="h1ElevenPunkt" :h1TwelvePunkt="h1TwelvePunkt")
    //- .background-img
    .footer    
  </template>
  
  <script>
  import axios from 'axios'
  import { mutations } from "@/store.js";
  import SideBarLeft from '@/components/SideBarLeft.vue'
  import BurgerButton from '@/components/Burger.vue'
  import Datepicker from 'vuejs-datepicker';
  import {ru} from 'vuejs-datepicker/dist/locale'
  export default {
    name:"TrainingPage",
    components: {
      SideBarLeft,
      BurgerButton,
      Datepicker
    },
    data() {
      return {
        ru: ru,
        firstName:"", 
        lastName:"",
        middleName:"",
        role:"",
        cash:"",
        highlighted: {
          daysOfMonth: [1,2,5,6,9,10,13,14,17,18,21,22,25,26,29,30],
        }
      }
    },
    computed:{
      showEmploymenthistoryWork(){
        if(localStorage.getItem('userRole') == 'admin')
          return true
        else
          return false    
      }
    },
    mounted(){
      if(localStorage.getItem('userRole') != 'admin'){
        axios.get(`http://localhost:8090/user/${localStorage.getItem('userUUID')}`)
        .then((user) => {
          this.firstName = user.data.firstName 
          this.lastName = user.data.lastName
          this.middleName = user.data.middleName
          this.role = user.data.role
          this.cash = user.data.cash
        })
        .catch((error) => {
          alert(error)
        });
      }
      else{
        axios.get(`http://localhost:8090/user/${localStorage.getItem('adminUsers')}`)
          .then((user) => {
            this.firstName = user.data.firstName 
            this.lastName = user.data.lastName
            this.middleName = user.data.middleName
            this.role = user.data.role
            this.cash = user.data.cash
          })
          .catch((error) => {
            alert(error)
          });
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
      routeAdminPanel() {
        this.$router.push({path: '/adminPanel'})
      },
      routeMyProfile() {
        this.$router.push({path: '/myprofile'})
        mutations.toggleNav() 
      },
      exit(){
        this.$router.push({path: '/'})
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
    height: 85vh;
  }
  .background{
    background-image: url("@/assets/img/Autoback.jpg");
    background-size: cover;
    min-width:100%;
    min-height:100%;
  }
  .calendar-block-first {
    width: 40%;
    height: 100%;
  }
  .calendar-block-second {
    width: 30%;
    padding-top: 165px;
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
    width: 30%;
    height: 1100px;
    text-align: center;
    background: url("@/assets/img/Check2.png");
    background-repeat:no-repeat ;
    transform: scale(0.6);
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
    font-size: 70px;
  }
  .span-information {
    margin-left: auto;
    margin-right: auto;
    /* text-align: center; */
    margin-top: 300px;
  }
  .money-fonts {
    font-size: 40px;
    /* font-family: 'SF UI Display'; */
    /* font-style: normal; */
    /* font-weight: bold; */
  }
  .paper {
    cursor: pointer;
    width: 85%;
    height: 400px;
    text-align: center;
    /* background-color: #ffc17d; */
    background-image: url("@/assets/img/calendar-background.jpg");
    background-size: 100%;
    border-radius: 75px;
    margin: 100px auto 0 auto;
    box-shadow: 10px 10px 10px;
    border: 2px solid #fff;
    padding-top: 60px;
  }
  .content-paper {
    width: 100%;
    height: 100%;
    line-height: 250px;
    vertical-align: middle;
    text-align: center;
    padding: 20px;
  }
  .button-paper {
    /* display: flex; */
    width: 100%;
    margin: auto;
  }
  .first-button-paper {
    text-align: center;
    margin: auto;
    width: 80%;
    margin-bottom: 40px;
    padding-right: 20px;
  }
  .second-button-paper {
    text-align: center;
    margin: auto;
    width: 80%;
    padding-right: 20px;
  }
  .date {
    text-align: center;
    transform: scale(1.3);
    margin: 0 30px 0 110px;
    /* margin: auto; */
    width:305px;
    box-shadow: 10px 10px 10px;
    border: 2px solid #fff;
    /* border-radius: 50px; */
  }
  .back{
    position: fixed;
    z-index: 100000;
    margin-top: 77vh;
    margin-left: 10px;
  }
  .exit{
    position: fixed;
    z-index: 100000;
    margin-left:92vw;
    margin-top: 77vh;
  }
.span-information {
    width: 120%;
    text-align: center;
    margin-top: 200px;
  }

.fonts-check {
  /* margin-left: auto;
  margin-right: auto; */
    /* text-align: center; */
    font-size: 70px !important;
    font-family: 'SF UI Display';
    font-style: normal;
  }
  .t-a-c {
    text-align: center;
  }

.money-fonts {
    padding-left: -50px;
    font-size: 70px;
    font-family: 'SF UI Display';
    font-style: normal;
    font-weight: bold;
  }
  </style>