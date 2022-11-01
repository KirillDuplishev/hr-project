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
    //- .menu
    //-   a Рабочий График
    //-   a Расчпет ЗП
    //-   a Мой аккаунт
    //-   a bjhkn
  .content
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
/* .menu{
  padding-right: 10px;
  font-size: 2em;
  display: flex;
  flex-direction: column;
}
.menu a{
  font-family: "Sofia";
  text-decoration: none;
  color: #FCA310;
  line-height: 1.5em;
}
.menu a:hover,
.menu a:focus{
  text-shadow: 0 0 5px red;
  margin-left: 0.5em;
  outline: none;
  position: relative;
  transition: margin .6s ease-in-out;
  transition: text-shadow .3s ease-in-out;

}

.menu a::before{
  position: absolute;
  left: 20em;
  content: ">";
  color: transparent;
} */
.img{
  width: 50px;
  height:50px;
  margin:5px 0 0 10px;
  background: url("@/assets/img/Ресурс6.svg");
  background-repeat: no-repeat;
}
.all {
  background:#4d4944;
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
  margin:20px;
  width: calc(100% - 40px);
  /* background: #D5A253; */
  background: orange;
  display: flex;
  border-radius:30px ;
  box-shadow: 5px 5px 5px #000;
}
.footer {
  /* background: #cc9f4f; */
  /* background: #D5A253; */
  background: orange;
  margin-top: auto;
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
  margin-top: 10px;
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
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  line-height: 1;
  margin: 20px;
  padding: 20px;
  text-decoration: none;
  text-align: center;
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
</style>