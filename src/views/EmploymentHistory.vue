<template lang="pug">
  v-app(style="height:30px;")
    v-dialog(style="height:30px" v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition")
      template( v-slot:activator="{ on, attrs }")
        span(style="height:30px; text-decoration: underline;" v-bind="attrs" v-on="on" @click="q()") Трудовая книжка
      v-card
        v-toolbar( dark color="orange")
          v-btn( icon dark @click="closeDialog()")
            v-icon mdi-close
          v-toolbar-title Трудовая книжка
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
                  b {{snils}}
                br
                div(style="width:400px")  
                  table
                    tr
                      th(colspan="12") Сведения о трудовой деятельности зарегистрированного лица
                    tr
                      th №
                      th Работодатель(наименование), регистрационный номер в ПФР
                      th(colspan="2") Дата (число, месяц, год) приема, перевода, увольнения
                      th Сведения о приеме,переводе,увольнении
                      th Трудовая функция (должность, профессия,специальность, квалификация, конкретныйвид поручаемой работы), структурноеподразделение
                      th Код выполняемой функции (при наличии)
                      th Причины увольнения, пункт, частьстатьи, статья Трудового кодексаРоссийской Федерации,федерального закона
                      th Наименование документа
                      th Дата
                      th Номер документа
                      th Признак отменызаписи сведений оприеме, переводе,увольнения
                    tr
                      td 1
                      td 2
                      td(colspan="2") 3
                      td 4
                      td 5
                      td 6
                      td 7
                      td 8
                      td 9
                      td 10
                      td 11
                    tr
                      td 1
                      td ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "Пекарня". 019-035-116260
                      td(colspan="2") {{datedOfEmployment}}
                      td ПРИЕМ
                      td {{role}}
                      td 2514.9
                      td -
                      td Приказ
                      td {{datedOfEmployment}}
                      td 7
                      td -
                  
</template>
<script>
import { mutations } from "@/store.js";
import axios from 'axios'
export default {
  name:"EmploymentHistory",
  data(){
    return{
      dialog:false,
      firstName:"",
      lastName:"",
      middleName:"",
      snils:"",
      dateOfbirth:"",
      role:"",
      datedOfEmployment:""
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false,
      mutations.openDialogWindow()
    },
    q() {
      mutations.openDialogWindow()
    },
  },
  mounted(){
      // mutations.openDialogWindow()
      if(localStorage.getItem('userRole' != 'admin')){
        axios.get(`http://localhost:8090/user/${localStorage.getItem('userUUID')}`)
          .then((user) => {
            this.firstName = user.data.firstName 
            this.lastName = user.data.lastName
            this.middleName = user.data.middleName
            this.dateOfbirth = user.data.dateOfbirth
            this.snils = user.data.snils
            this.role = user.data.role
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
            this.snils = user.data.snils
            this.role = user.data.role
            this.datedOfEmployment = user.data.datedOfEmployment

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
.info table{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%) scale(0.6);
  border-collapse: collapse;
  /* width: 300px;
  height: auto; */
}
.info td, th {
  border: 2px solid #000;
  text-align: center;
  padding: 8px;
}
</style>