<template lang="pug">
  v-app(style="height:30px")
    v-dialog(style="height:30px" v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition")
      template( v-slot:activator="{ on, attrs }")
        span(v-bind="attrs" v-on="on" @click="q()" style="text-decoration: underline;") Медицинская книжка
      v-card
        v-toolbar( dark color="orange")
          v-btn( icon dark @click="closeDialog")
            v-icon mdi-close
          v-toolbar-title Медицинская книжка
        v-list( three-line subheader)
            .infoMed
              .infoMed_2
                span 
                  b Личная медицинская книжка
                    br
                    span (В форме электронного документа)
                br
                //- div(style="display:flex; justify-content: space-around;")
                //-   img(src="@/assets/img/pechat.png" width="300px")
                //-   img(src="@/assets/img/qrcode_novamed.su.png" width="300px")
                //- br  
                //- hr
                br
                span 
                  h2(style="display:flex; justify-content:center;") Сведения о владельце личной медицинской книжки: 
                  small(style="display:flex; justify-content:center;") (сведения, указанные работником при обращении для получения личной медицинской книжки)

                br 
                b Дата формирования личной медицинской книжки: 
                  u {{dateFromMed}}
                br
                b Фамилия, имя и отчество(при наличии) работника: 
                  u {{lastName}} {{firstName}} {{middleName}}
                br
                b Дата рождения: 
                  u {{dateOfbirth}}
                br
                b Наименовании должности(специальности): 
                  u {{role}}
                br  
                b(@click="qwe") Номер медицинской книжки: 
                  u {{dateMed}}
                br  
                b(@click="qwe") Профессиональная гигиеническая подготовка и аттестация: 
                  u {{dateFromMedCert}}
              
</template>
<script>
import axios from 'axios'
import { mutations } from "@/store.js";
export default {
  name:"EmploymentHistory",
  data(){
    return{
      dialog:false,
      firstName:"",
      lastName:"",
      middleName:"",
      dateOfbirth:"",
      datedOfEmployment:"",
      role:"",
      dateMed:"",
      passport:"",
      dateFromMed:"",
      dateFromMedCert:""
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
    qwe(){
      console.log(this.dateFromMed);
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
            this.datedOfEmployment = user.data.datedOfEmployment
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
            this.role = user.data.role
            this.datedOfEmployment = user.data.datedOfEmployment
            this.passport = user.data.passport
            this.dateMed = this.passport.slice(0,10).replaceAll(" ",'')
            this.dateFromMed = user.data.dateOfMedBook
            this.dateFromMedCert = user.data.dateOfMedicalCertification
          })
          .catch((error) => {
            alert(error)
          });
      }    
  },
}
</script>
<style>
.infoMed{
  width: 100vw;
  height: 130vh;
  background: conic-gradient(rgb(255, 102, 0),orange,rgb(255, 102, 0));
}
.infoMed_2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 90%;
  height: 80%;
  background: rgb(255, 255, 255, 0.9);
  padding: 30px;
}

.infoMed_2 span:first-child{
  display: flex;
  justify-content: center;
}
.infoMed_2 span:nth-child(2){
  display: flex;
  justify-content: center;
  margin-left:-20px ;
}
/* .infoMed_2 span b :nth-child(2){
  color: red;
} */
</style>