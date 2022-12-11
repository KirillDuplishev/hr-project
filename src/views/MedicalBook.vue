<template lang="pug">
  v-app(style="height:30px")
    v-dialog(style="height:30px" v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition")
      template( v-slot:activator="{ on, attrs }")
        label(style="height:30px" v-bind="attrs" v-on="on") Медийинская книжка
      v-card
        v-toolbar( dark color="orange")
          v-btn( icon dark @click="dialog = false")
            v-icon mdi-close
          v-toolbar-title Медийинская книжка
        v-list( three-line subheader)
            .info
              .inf0_2
                span 
                  b Сведения о трудовой деятельности, предоставляемые из информационных ресурсов Пенсионного фонда Российской Федерации
                br
                span 
                  b Сведения о зарегистрированном лице:
                br
                span Фамилия: 
                  b {{lastName}}
                br
                span Имя: 
                  b {{firstName}}
                br
                span Отчество: 
                  b {{middleName}}
                br
                span Дата рождения: 
                  b {{dateOfbirth}}
                br
                span СНИЛС: 
                  b {{Snils}}
                br
</template>
<script>
import axios from 'axios'
export default {
  name:"EmploymentHistory",
  data(){
    return{
      dialog:false,
      firstName:"",
      lastName:"",
      middleName:"",
      Snils:"",
      dateOfbirth:""
    }
  },
  mounted(){
      if(localStorage.getItem('userRole' != 'admin')){
        axios.get(`http://localhost:8090/user/${localStorage.getItem('userUUID')}`)
          .then((user) => {
            this.firstName = user.data.firstName 
            this.lastName = user.data.lastName
            this.middleName = user.data.middleName
            this.dateOfbirth = user.data.dateOfbirth
            this.Snils = user.data.Snils
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
            this.dateOfbirth = user.data.dateOfbirth
            this.Snils = user.data.Snils
          })
          .catch((error) => {
            alert(error)
          });
      }    
  },
}
</script>
<style>
.info{
  width: 100vw;
  height: 110vh;
  background: conic-gradient(rgb(255, 102, 0),orange,rgb(255, 102, 0));
}
.inf0_2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 90%;
  height: 80%;
  background: rgb(255, 255, 255, 0.9);
}
.inf0_2 span:nth-child(1){
  padding: 5px;
  font-size: 2.7vh;
  display: flex;
  justify-content: center;
}
.inf0_2 span:nth-child(3){
  padding-left: 25px;
  font-size: 2.5vh;
}
.inf0_2 span:nth-child(5), span:nth-child(7), span:nth-child(9), span:nth-child(11), span:nth-child(13){
  padding-left: 50px;
  font-size: 2.3vh;
}
</style>