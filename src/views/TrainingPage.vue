<template lang="pug">
div
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
      button.btn-sidebar.third Расчет ЗП
      button.btn-sidebar.third Рабочий график
      button.btn-sidebar.third(@click="$router.push({path:'/'})") Выход
    .content-block
      .first-main-block 
        .block-paper 
          .first-paper
            .paper
          .second-paper
            .paper.back-blue
        .block-test-button
          button.btn-test.h1() Тест 
      .first-main-block 
        .block-paper 
          .first-paper
            .paper
          .second-paper
            .paper.back-blue
        .block-test-button
          button.btn-test.h1() Тест 
      .first-main-block 
        .block-paper 
          .first-paper
            .paper
          .second-paper
            .paper.back-blue
        .block-test-button
          button.btn-test.h1() Тест 
    .background-img
    .footer    
  </template>
  
  <script>
  import { mutations } from "@/store.js";
  import SideBarLeft from '@/components/SideBarLeft.vue'
  import BurgerButton from '@/components/Burger.vue'
  export default {
    name:"TrainingPage",
    components: {
      SideBarLeft,
      BurgerButton,
    },
    data() {
      return {
        
      }
    },
    methods: {
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
  
  .content-block {
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
    width: 85%;
    height: 300px;
    background-color: #ffc17d;
    border-radius: 75px;
    margin: auto;
    box-shadow: 10px 10px 10px;
    border: 2px solid #fff;
  }
  .back-blue {
    background-color: #7ea8c5;
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
    background: white;
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
    background-color: white;
    background-size: 100%;
  }
  </style>