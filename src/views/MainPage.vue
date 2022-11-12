<template lang="pug">
.all
  .header
    .ico
      .img
      .text
    .block-burger
      BurgerButton  
  SideBarLeft
    span.burgerHeader Меню
    button.btn-sidebar.third(@click="routeMyProfile") Мой профиль
    button.btn-sidebar.third(@click="routeTraining") Обучение
    button.btn-sidebar.third Расчет ЗП
    button.btn-sidebar.third Рабочий график
    button.btn-sidebar.third(@click="$router.push({path:'/'})") Выход
  .content
    section.sectionOne
      .firstText
          <img src="@/assets/img/nameLogo.svg">
          h1 Управление человеческим капиталом (HRM)
          br 
          span Понимая, что необходимо сотрудникам, как они работают и что их мотивирует, вы сможете выработать систему управления персоналом и кадровую стратегию, ориентированную на интересы людей.
          //- .border
    section.sectionTwo

  .footer
    p.name ORANGE 
    p.date © 2022     
</template>

<script>
import { mutations } from "@/store.js";
import SideBarLeft from '@/components/SideBarLeft.vue'
import BurgerButton from '@/components/Burger.vue'
export default {
  name:"MainPage",
  components: {
    SideBarLeft,
    BurgerButton,
  },
  data() {
    return {
      
    }
  },
  methods: {
    routeTraining () {
      this.$router.push({path: '/training'})
      mutations.toggleNav() 
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
/* .all{
  display: grid;
  grid-template-rows: auto 1fr auto;
} */
.img{
  width: 50px;
  height:50px;
  margin:10px 0 0 10px;
  background: url("@/assets/img/Ресурс6.svg");
  background-repeat: no-repeat;
}
.header {
  position: fixed;
  z-index: 100;
  margin:20px;
  width: calc(100% - 40px);
  height: 60px;
  background: orange;
  border-radius:30px ;
  box-shadow: 5px 5px 15px #000;
  border: 1px solid #fff;
}
.footer {
  font-family: monospace;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  color: #000;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 60px;
  background: orange;
}
.content {
  background: rgb(32, 32, 32);
  width: 100%;
  height: 100%;
  margin: 0 auto;
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
  flex-direction: row;
  justify-content: center;
}
.sidebar {
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
.sectionOne{
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/img/HR 24.jpeg");
  background-size: 100%;
  overflow: auto;
}
.firstText{
  display: block;
  position: relative;
  top: calc(100vh / 2);
  left: 50%;
  transform: translate(-100%,-17em);
  width: 45vw;
  height: calc((1/3 * 45vw) + 5vw);
  word-break: normal;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 20px;
  text-align: left;
}
.firstText h1{
  font-size:calc(100vw - 97.5vw);
  padding-bottom:10px ;
  border-bottom: 1px solid #fff;
}
.firstText span{
  font-size:calc(100vw - 98.6vw);
  padding-top:100px;
}
.firstText h1, span {
  margin-top: -60px;
}
.sectionTwo{
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/img/SectionTwo.jpg");
  background-size: 100%;
  text-align: center;
}
.sectionTwo span{
  /* position: absolute; */
  margin-left: auto;
  margin-right: auto;
  /* margin-top:auto; */
  color: #fff;
  font-size:calc(100vw - 98.6vw);
}
.border{
  margin-top: -11em;
  margin-left: 45em;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
    background-image: url("@/assets/img/Ресурс 15.svg");
  box-shadow: 0px 0px 150px -75;
  animation: spin 3.4s linear infinite;
  border: 4px solid #fff;
}
@keyframes spin {
  to{
    transform: rotate(360deg);
  }
}

.name{
  margin-left: 0 auto;
}
</style>