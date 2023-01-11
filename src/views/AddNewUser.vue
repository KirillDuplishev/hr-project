<template lang="pug">
v-app
  .form
    #header
      .ico
        .img
        .text
      v-btn.back(@click="routeAdminPanel" fab large)
        v-icon mdi-arrow-left-top-bold   
    form(name="users")  
      .containerUsers
        span Регистрация пользователя
        br
        label( for="lastName")
        b Фамилию
        input( v-model="lastName" type="text" name="lastName" placeholder="Иванов" required)
        
        label( for="firstName")
        b Имя
        input( v-model="firstName" type="text" name="firstName" placeholder="Иван" required)
        
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

        label( for="passport") 
        b Серия и номер паспорта:
        input( v-model="passport" type="text" name="passport" required)
        
        br
        br
        label( for="ed") 
        //- b Образование:
        v-select(v-model="education" :items="allEducation" outlined label="Образование")
        //- input( v-model="education" type="text" name="ed" required)
        
        //- button(type="button" @click="qwe") asdasdasd
        button(type="button" @click="saveUser") Создать подьзователья
      br
</template>

<script>
// import { mutations } from "@/store.js";
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
      passport:"",
      sexSelect:['Мужской', 'Женский'],
      roleSelect:['Директор', 'Менеджер', 'Старший пекарь', 'Младший пекарь', 'Продавец-кассир', 'Грузчик-водитель', 'Технолог', 'Клиннер', 'admin'],
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
        datedOfEmployment: this.datedOfEmployment,
        dateOfbirth: this.dateOfbirth,
        snils: this.snils,
        education: this.education,
        passport: this.passport
      })
      .then((user) => {
        alert("SUCCESS", user)
        document.users.reset();
      })
      .catch((error) => {
        alert(error)
      });
    },
    routeAdminPanel() {
      this.$router.push({path: '/adminPanel'})
    },
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
  background-size: cover;
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
  margin-top:150px;
  /* margin-left: auto;
  margin-right: auto; */
  width: 100%;
  height: 90%;
  background: #fff;
  /* transform: translate(-50%, 0%); */
  /* display: flex; */
  /* justify-content: center; */
  border: 3px solid #6e6e6e;
  border-radius: 10px ;
  box-shadow: 5px 5px 5px rgba(0,0,0, 0.5);
  padding: 40px 25px 25px 25px;
}
.containerUsers span {
  display: flex;
  justify-content: center;
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
.back{
  position: fixed;
  z-index: 100000;
  margin-top: 80vh;
  border-radius: 50%;
}
</style>