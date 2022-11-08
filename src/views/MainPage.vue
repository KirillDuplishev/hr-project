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
    button.btn-sidebar.third Мой аккаунт
    button.btn-sidebar.third Расчет ЗП
    button.btn-sidebar.third Рабочий график
    button.btn-sidebar.third(@click="qwe") Выход
  .content
    section.sectionOne
      .firstText 
        //- <img src="@/assets/img/Orange Success Factory.svg">
        <img src="@/assets/img/nameLogo.svg">
        h1 Управление человеческим капиталом (HRM) 
        span Понимая, что необходимо сотрудникам, как они работают и что их мотивирует, вы сможете выработать систему управления персоналом и кадровую стратегию, ориентированную на интересы людей.
  .footer    
</template>

<script>
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
    qwe(){
      this.$router.push({path:'/'});
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.img{
  width: 50px;
  height:50px;
  margin:10px 0 0 10px;
  background: url("@/assets/img/Ресурс6.svg");
  background-repeat: no-repeat;
}
.all {
  background:#fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header,
.footer {
  height: 50px;
}

.header {
  position: absolute;
  z-index: 100;
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
  position: absolute;
  left: 0;
  bottom: 0;
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
  /* color: #fff; */
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
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/img/HR 24.jpeg");
  background-size: 100%;
}
.firstText{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%,-8em);
  width: 700px;
  height: 400px;
  word-break: normal;
  font-size: 25px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 20px;
  text-align: left;
}
.firstText h1{
  padding-bottom:10px ;
  border-bottom: 1px solid #fff;
}
.firstText span{
  padding-top:100px;
}
</style>