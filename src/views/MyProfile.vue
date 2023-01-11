<template lang="pug">
.all
  .header(:class="{'header-dialog' : header}")
    .ico
      .img
      .text
    .home-icon(v-show="!showEmploymenthistory" @click="routeMainPage")
      img.img-home(src="@/assets/img/home-icon.png")
    .block-burger(v-show="!showEmploymenthistory")
      BurgerButton  
    v-btn.back(v-show="showEmploymenthistory" @click="routeAdminPanel" fab x-large)
        v-icon mdi-arrow-left-top-bold
    v-btn.exit( v-show="showEmploymenthistory" @click="exit" fab x-large) 
      v-icon mdi-exit-to-app
  SideBarLeft(v-show="!showEmploymenthistory")
    span.burgerHeader Меню
    button.btn-sidebar.third(@click="routeTraining") Обучение
    button.btn-sidebar.third(@click="routeWorkSchedule") Рабочий график
    button.btn-sidebar.third(@click="$router.push({path:'/'})") Выход
  .content-my-profile
    .first-block
      div.photo-sotr-block(v-if="this.sex == 'Мужской'")
        img.img-photo(src="../assets/photo-sotrudnikov/free-sticker-man-4825038.png")
      div.photo-sotr-block(v-if="this.sex == 'Женский'")
        img.img-photo(src="../assets/photo-sotrudnikov/free-sticker-woman-4825027.png")
    .second-block
      p.name.h1 {{this.lastName}} {{this.firstName}} {{this.middleName }}
        v-btn.workGraph( v-show="showEmploymenthistory" @click="routeWorkSchedule") Рабочий график 
      .table-block
        div.table-information
          table.table_col
            colgroup
              col()
            tr
              td.table_col-first-td.h2 Должность сотрудника
              td.h4 {{this.role}}
            tr
              td.table_col-first-td.h2 Пол
              td.h4 {{this.sex}}
            tr(v-show="this.role != 'admin'")
              td.table_col-first-td.h2 Дата трудоустройства
                td.h4 {{this.datedOfEmployment}}
            tr(v-show="showEmploymenthistory" @click="q()" style="width:100vw")
              td.table_col-first-td.h2
                  employmenthistory(style="width:200px; background:transparent")
            tr(v-show="showEmploymenthistory" style="width:100000px")
              td.table_col-first-td.h2
                medicalbook(style="background:transparent")
    .third-block
      .table-block
        div.table-information
          table.table_col
            colgroup
              col()
            tr
              td.table_col-first-td.h2 Почта
              td.h4 {{this.email}}
            tr
              td.table_col-first-td.h2 Контактный телефон
              td.h4 {{this.phone}}
            tr              
              td.table_col-first-td.h2 Дата рождения
              td.h4 {{this.dateOfbirth}}
            tr(v-show="showEmploymenthistory")
              td.table_col-first-td.h2 Паспортные данные
              td.h4 {{passport}} 
    //- span(v-show="showEmploymenthistory")
    //-   employmenthistory
    //- span(v-show="showEmploymenthistory")
    //-   medicalbook
  .background-img
  .footer    
</template>

<script>
import { store, mutations } from "@/store.js";
import SideBarLeft from '@/components/SideBarLeft.vue'
import BurgerButton from '@/components/Burger.vue'
import axios from 'axios'
import employmenthistory from './EmploymentHistory.vue'
import medicalbook from './MedicalBook.vue'
export default {
  name:"MainPage",
  components: {
    SideBarLeft,
    BurgerButton,
    employmenthistory,
    medicalbook
  },
  data() {
    return {
      firstName:"",
      lastName:"",
      middleName:"",
      sex:"",
      phone:"",
      email:"",
      role:"",
      datedOfEmployment:"",
      dateOfbirth:"",
      passport:""
    }
  },
  computed: {
    header() {
      // console.log(store.openDialog)
      return store.openDialog
    },
    showEmploymenthistory(){
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
          this.sex = user.data.sex
          this.phone = user.data.phone
          this.email = user.data.email
          this.role = user.data.role
          this.datedOfEmployment = user.data.datedOfEmployment
          this.dateOfbirth = user.data.dateOfbirth,
          this.passport = user.data.passport
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
          this.sex = user.data.sex
          this.phone = user.data.phone
          this.email = user.data.email
          this.role = user.data.role
          this.datedOfEmployment = user.data.datedOfEmployment
          this.dateOfbirth = user.data.dateOfbirth
          this.passport = user.data.passport
          console.log(user);
        })
        .catch((error) => {
          alert(error)
        });
      }  
  },
  methods: {
    routeWorkSchedule() {
      this.$router.push({path: '/workschedule'})
      mutations.toggleNav() 
    },
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

.header {
  position: fixed;
  z-index: 100;
  margin:20px;
  width: calc(100% - 40px);
  height: 60px;
  background: orange;
  /* display: flex; */
  border-radius:30px ;
  box-shadow: 5px 5px 15px #000;
  border: 1px solid #fff;
}
.header-dialog {
  position: fixed;
  z-index: 99;
  margin:20px;
  width: calc(100% - 40px);
  height: 60px;
  background: orange;
  /* display: flex; */
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
.content-my-profile {
  z-index: 99;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  margin: 2vh 0 0 0;
  padding: 120px 0 0 0;
  margin: 10px auto 0 auto;
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
  position: relative;
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
.name{
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  position: absolute;
  margin: 24px 0 0 24px;
  text-shadow: 3px 3px 10px;
}
.burgerHeader{
  font-size: 25px;
  font-family: monospace;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
}
.table_col {
  margin: auto;
  /* font-family:  Sans-Serif;
  font-size: 16px; */
  width: auto;
  text-align: left;
  border-collapse: collapse;
  color: #3E4347;
}
.table_col-first-td {
  /* /* font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 16px; */
  font-weight: bold;
  width: 150px;
}
.table_col th:first-child, .table_col td:first-child {
/* color: #F5F6F6; */
border-left: none;
}
.table_col th {
font-weight: normal;
padding: 8px 10px;
}
.table_col td {
padding: 12px 10px;
color: #4d4944;
}
.photo-sotr-block {
  width: 300px;
  height: 100%;
  margin: auto;
}
.table-block {
  width: auto;
  text-align: center;
  /* height: 100%; */
  margin: 80px auto 0 auto;
}
.table-information {
  margin: auto;
  background: #ffc17d;
  border-radius: 30px;
  padding: 10px 50px 10px 50px;
  width: 90%;
  text-align: center;
  height: 100%;
}
.img-photo{
  width: 100%;
  /* height: 100%; */
  border: 3px solid #000;
  border-radius: 50%;
  box-shadow: 10px 10px 20px #007bff;
  /* transform: scale(); */
}
.first-block {
  z-index: 99;
  height: 100%;
  width: 34%;
}
.second-block {
  justify-content: center;
  vertical-align: middle;
  /* height: 100%; */
  width: 33%;
}
.third-block {
  order: 100;
  height: 100%;
  width: 33%;
}
.background-img {
  position: absolute;
  bottom: 0px;
  z-index: 90;
  width: 100%;
  height: 50%;
  background-image: url("@/assets/photo-sotrudnikov/27103695_2204_w046_n004_107a_p1_107.jpg");
  background-size: 100%;
}
.background-img a{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-5em);
  font-size: 25px;
  color: #000;
} 
tr image {
  fill:green;
  padding-left: 10px;
}
.back{
  position: fixed;
  z-index: 100000;
  margin-top: 80vh;
}
.workGraph{
  margin-left: 50px;
}
.exit{
  position: fixed;
  z-index: 100000;
  margin-left:92vw;
  margin-top: 82vh;
}
.v-application--wrap{
  width: 300px;
}
</style>