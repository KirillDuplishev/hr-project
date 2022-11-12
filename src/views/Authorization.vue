<template lang="pug">
  form
    .imgcontainer
      img.avatar( style="width:33vw; height:calc(33vw / 2); padding:20px 10px 10px 10px" src="@/assets/img/Ресурс16.svg" alt="Avatar")

    .container
      label( for="uname")
      b Логин
      input( v-model="login" type="text" placeholder="Введите логин" name="uname" required)

      label( for="psw")
      b Пароль
      input( v-model="pass" type="password" placeholder="Введите пароль" name="psw" required)

      div( style="color: red") {{ error }}

      button( type="submit" @click="checkinf") Войти
</template>

<script>
export default {
  name:"LoginMenu",
  data() {
    return {
      dialog: false,
      error: null,
      compName: "",
      login: "",
      pass: "",
    }
  },
  methods: {
    checkinf() {
      if (this.pass == "super" && this.login == "admin") {
        this.$router.push({path: '/MainPage'});
      } else {
        this.error = "Неправильный логин или пароль. Попробуйте еще раз.";
      }
    },
  }
}
</script>
<style scoped>
*{
  font-family: monospace;
}
form {
  background-image: url("@/assets/img/Autoback.jpg");
  background-size: 100%;
  width: 100vw;
  height: 100vh;
}
label{
  font-size:calc(100vw - 98.6vw);
  width: 100vw;
}
input[type=text], input[type=password] {
  width: 100% ;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: orange;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;

}

button:hover {
  opacity: 0.8;
}

.imgcontainer {
  box-shadow: 0 19px 27px 10px rgb(238 119 42 / 50%);
  background: linear-gradient(344.37deg, #EE772A 10.07%, #ff5f3b 92.45%);
  text-align: center;
  border-radius: 20px;
  border: 2px solid white;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -95%);
}

.avatar {
  width:inherit;
}

.container {
  width: 15.5vw ;
  height: calc(15.5vw / 1.1);
  background: #fff;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, 15%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid #6e6e6e;
  border-radius: 10px ;
  box-shadow: 5px 5px 5px rgba(0,0,0, 0.5);
  padding: 25px;
}
</style>