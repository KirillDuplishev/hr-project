<template lang="pug">
.all
  .header
    .ico
      .img
      .text
    span пользователи
    v-btn(@click="createUser") Новый пользователь
  .content-users(v-for="man in allUsers")
    .users(@click="transitionMyProfil(man.uuid)")
      v-icon(x-large style="padding:10px") mdi-account
      span {{man.firstName}} {{man.lastName}} {{man.middleName}}

  .footer    
</template>

<script>
import { mutations } from "@/store.js";
import SideBarLeft from '@/components/SideBarLeft.vue'
import BurgerButton from '@/components/Burger.vue'
import axios from 'axios'
import employmenthistory from './EmploymentHistory.vue'
export default {
  name:"AdminPage",
  components: {
    SideBarLeft,
    BurgerButton,
    employmenthistory
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
      users:[]
    }
  },
  mounted(){
      axios.get(`http://localhost:8090/user`)
      .then((user) => {
        this.users = user.data
      })
      .catch((error) => {
        alert(error)
      });
  },
  computed:{
    allUsers(){
      return this.users
    },
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
    transitionMyProfil(uuid){
      localStorage.setItem('adminUsers', uuid)
      this.$router.push({path: '/myprofile'})
    },
    createUser(){
      this.$router.push({path: '/addUser'})
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.header span, .v-btn{
  margin: 20px;
}
.content-users{
  display:flex;
  justify-content:center;
}
.users{
  cursor: pointer;
  display:flex;
  justify-content:flex-start;
  padding:5px 5px 5px 0;
  margin: 10px;
  width: 80%;
  background: orange;
  border-radius:10px;
}
.users:hover{
  box-shadow: 0 5px 20px 2px #000;
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
.text {
  width: 160px;
  height:inherit;
  margin-top: 17px;
  margin-left: 10px;
  background: url("@/assets/img/Ресурс9.svg");
  background-repeat: no-repeat;
  background-size: auto;
}
.header,
.footer {
  height: 50px;
}

.header {
  position: relative;
  z-index: 99;
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
/* .sidebar {
  z-index: 1000;
  position: absolute;
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
</style>