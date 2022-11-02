<template lang="pug">
.all
  .header
    .ico
      .text
      .img
    .block-burger
      BurgerButton  
  SideBarLeft
    span.burgerHeader Меню
    button.btn-sidebar.third(@click="$router.push({path: '/myprofile'})") Мой профиль
    button.btn-sidebar.third Кнопка 2
    button.btn-sidebar.third Кнопка 3
    button.btn-sidebar.third Кнопка 4
  div.block-text
    h2 Мой профиль
  .content-my-profile
    div.photo-sotr-block
      h2(style="color: white") Иванов Петр Викторович
      img.img-photo(src="../assets/photo-sotrudnikov/png-transparent-silhouette-male-silhouette.png")
    div.table-information
      h2(style="color: white") Общая информация
      table.table_col
        colgroup
          col(style="background: orange")
        tr
          td Статус
          td Сотрудник
        tr
          td Специальность
          td Пекарь
        tr
          td Формат трудоустройства
          td Сотрудник
        tr
          td Контактный телефон
          td +7(950)-818-45-32
        tr
          td Почта
          td korolev@gmail.com
        tr
          td Дата рождения
          td 25.09.2002
        tr
          td Дата трудоустройства
          td 13.10.2020
        tr
          td Рабочее место
          td ул. Гагарина д. 3
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
  margin:5px 0 0 20px;
  /* Шадин исправь */
  /* background: url("D:/hr-project-1/src/assets/Ресурс 6.svg"); */
  background-repeat: no-repeat;
}
.all {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background:#4d4944;
  min-height: 100vh;
}
.header,
.footer {
  height: 50px;
}

.header {
  width: 100%;
  background: #D5A253;
  display: flex;
  border-radius:0 0 10px 10px ;
  box-shadow: 5px 5px 5px #000;
}
.footer {
  /* background: #cc9f4f; */
  background: #D5A253;
  margin-top: auto;
}
.content-my-profile {
  background: #4d4944;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  margin: 10px auto 0 auto;
}
.text {
  width: 160px;
  height:inherit;
  margin-top: 10px;
  margin-left: 10px;
  /* Шадин исправь */
  /* background: url("D:/hr-project-1/src/assets/Ресурс 9.svg"); */
  background-repeat: no-repeat;
  background-size: auto;

}
.ico{
  position: absolute;
  display: flex;
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
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
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
  right: 0px;
}
.burgerHeader{
  font-size: 25px;
  font-family: monospace;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
}
.block-text {
  background: #4d4944;
  padding: 50px 20px;
  text-align: center;
} 
.block-text h2 {
  font-family: 'Open Sans', sans-serif;
  position: relative;
  color: orange;
  font-size: 3em;
  font-weight: normal;
  line-height: 1;
  padding: 10px 0;
  margin: 0;
  display: inline-block;
}
.block-text h2:before {
  content: ""; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
  height: 200%;
  border-radius: 50%/30%;
  border: 6px solid orange;
  border-left-color: transparent;
  border-right-color: transparent;
}
@media (max-width: 420px) {
  .block-text h2 {font-size: 2em;}
}
.table_col {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  width: auto;
  background: white;
  text-align: left;
  border-collapse: collapse;
  color: #3E4347;
}
.table_col th:first-child, .table_col td:first-child {
color: #F5F6F6;
border-left: none;
}
.table_col th {
font-weight: normal;
border-bottom: 2px solid #F5E1A6;
border-right: 20px solid white;
border-left: 20px solid white;
padding: 8px 10px;
}
.table_col td {
border-right: 20px solid white;
border-left: 20px solid white;
padding: 12px 10px;
color: #8b8e91;
}
.photo-sotr-block {
  width: 300px;
  height: 100%;
  margin: auto 20px auto auto;
}
.table-information {
  background: red;
  border-radius: 5%;
  padding: 20px;
  width: auto;
  height: auto;
  order: 999;
  margin-left: auto;
  margin-right: 20px;
}
.img-photo{
  width: 100%;
  height: 100%;
}
</style>