<template lang="pug">
v-app
  .form
    #header
      .ico
        .img
        .text
      .block-burger
        BurgerButton  
    SideBarLeft
      span.burgerHeader Меню
      button.btn-sidebar.third(@click="routeMyProfile") Мой профиль
      button.btn-sidebar.third(@click="routeTraining") Обучение
      button.btn-sidebar.third(@click="routeWorkSchedule") Рабочий график
      button.btn-sidebar.third(@click="$router.push({path:'/'})") Выход
    form(name="users")  
      .containerUsers
        span Регистарция пользователя
        br
        label( for="firstName")
        b Имя
        input( v-model="firstName" type="text" name="firstName" placeholder="Иван" required)
        
        label( for="lastName")
        b Фамилию
        input( v-model="lastName" type="text" name="lastName" placeholder="Иванов" required)
        
        label( for="middleName")
        b Отчество
        input( v-model="middleName" type="text" name="middleName" placeholder="Иванович" required)
        br
        br
        v-select(v-model="keySex" :items="sexSelect" outlined label="Пол")
        
        v-select(v-model="keyRole" :items="roleSelect" outlined label="Должность")
              
        label( for="phone")
        b Введите телефон
        input( v-model="phone" type="text" name="phone" placeholder="+7 (900) 123-45-67" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}")
        
        label( for="email")
        b Введите email
        input( v-model="email" type="text" name="email" required)
        
        label( for="pass")
        b Придумайте пароль
        input( v-model="password" type="text" name="pass" required)

        br
        
        label( for="db") 
        b Дата рождения:
        input( v-model="dateOfbirth" type="date" name="db" required)
        
        br
        
        label( for="dw") 
        b Дата трудоустройства:
        input( v-model="datedOfEmployment" type="date" name="dw" required)
        
        br
        
        label( for="snils") 
        b Номер СНИЛСа:
        input( v-model="snils" type="text" name="snils" required)
        
        br
        
        label( for="ed") 
        //- b Образование:
        v-select(v-model="education" :items="allEducation" outlined label="Образование")
        //- input( v-model="education" type="text" name="ed" required)
        
        button(type="button" @click="qwe") asdasdasd
        button(type="button" @click="saveUser") Создать подьзователья
      br
</template>

<script>
import { mutations } from "@/store.js";
import axios from 'axios'
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
      error: null,
      compName: "",
      email: "",
      pass: "",
      firstName:"",
      password:"",
      lastName:"",
      middleName:"",
      keyRole:"",
      keySex:"",
      sex:"",
      phone:"",
      role:"",
      snils:"",
      education:"",
      datedOfEmployment:"",
      dateOfbirth:"",
      sexSelect:['Мужской', 'Женский'],
      roleSelect:['Руководитель', 'Сотрудник', 'admin'],
      allEducation:['Среднее образование','Средне-специальное образование', 'Высшее образование']
    }
  },
  methods: {
    qwe(){
      console.log(this.password);
      console.log(this.keyRole);
      console.log(this.keySex);
      console.log(this.email);
      console.log(this.datedOfEmployment);
      console.log(this.dateOfbirth);
    },
    saveUser(){
      axios.post(`http://localhost:8090/user`, {
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        sex: this.keySex,
        phone: this.phone,
        email: this.email,
        password: this.password,
        role: this.keyRole,
        datedOfEmployment: this.datedOfEmployment.toString(),
        dateOfbirth: this.dateOfbirth.toString(),
        snils: this.snils,
        education: this.education
      })
      .then((user) => {
        alert("SUCCESS", user)
        document.users.reset();
      })
      .catch((error) => {
        alert(error)
      });
    },
    routeWorkSchedule() {
      this.$router.push({path: '/workschedule'})
      mutations.toggleNav() 
    },
    routeTraining () {
      this.$router.push({path: '/training'})
      mutations.toggleNav() 
    },
    routeMyProfile() {
      this.$router.push({path: '/myprofile'})
      mutations.toggleNav() 
    },
    createUser(){
      this.$router.push({path: '/addUser'})
      mutations.toggleNav() 
    }
  }
}
</script>
<style scoped>
*{
  font-family: monospace;
}
.v-input{
  border-radius: 10px;
}
.form {
  background-image: url("@/assets/img/Autoback.jpg");
  background-size: 100%;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
}
label{
  font-size:calc(100vw - 98.6vw);
  min-width: 100vw;
}
input[type=text], [type=number], [type=date]{
  width: 100% ;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: orange;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  cursor: pointer;
  width: 100%;
  border-radius: 1px;
}
.containerUsers{
  margin-top:150px ;
  /* margin-left: auto;
  margin-right: auto; */
  width: 100%;
  height: 90%;
  background: #fff;
  transform: translate(-50%, 0%);
  /* display: flex; */
  /* justify-content: center; */
  border: 3px solid #6e6e6e;
  border-radius: 10px ;
  box-shadow: 5px 5px 5px rgba(0,0,0, 0.5);
  padding: 50px 25px 25px 25px;
}
.containerUsers span {
  font-size: 25px;
  color: orange;
  text-shadow: 1px 1px 0px rgb(37, 24, 0),
   -1px 1px 0px rgb(37, 24, 0),
   1px -1px 0px rgb(37, 24, 0),
   -1px -1px 0px rgb(37, 24, 0);
}

.img{
  width: 50px;
  height:50px;
  margin:10px 0 0 10px;
  background: url("@/assets/img/Ресурс6.svg");
  background-repeat: no-repeat;
}
#header {
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
/* .sidebar {
  position: relative;
  top: 105px;
  left: 0px;
  background: #fae8b9;
  float: left;
  width: 17%;
  height: 100%;

} */

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
  top: calc(100vh / 1.7);
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
</style>