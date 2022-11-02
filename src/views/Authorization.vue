<template>
  <form>
  <div class="imgcontainer">
    <img style="width:95%; height:95%; padding:20px 10px 10px 10px" src="@/assets/img/Ресурс16.svg" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="uname"><b>Логин</b></label>
    <input v-model="login" type="text" placeholder="Введите логин" name="uname" required>

    <label for="psw"><b>Пароль</b></label>
    <input v-model="pass" type="password" placeholder="Введите пароль" name="psw" required>

    <div style="color: red"> {{ error }}</div>

    <button type="submit" @click="checkinf">Войти</button>

  </div>
</form>
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
  background: linear-gradient(#fff, #000 );
  /* width: 100vw; */
  height: 100vh;
  border: 30px solid #454545;

}
label{
  width: 100%;
}
input[type=text], input[type=password] {
  width: 100%;
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
  /* border: 2px solid rgb(255, 140, 0); */
  background: orange;
  text-align: center;
  /* margin: 8px 0 12px 0; */
  border-radius: 20px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -120%);
  box-shadow: 5px 5px 5px rgba(0,0,0, 0.5);
}

.avatar {
  width:inherit;
}

.container {
  background: #fff;
  padding: 25px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid #6e6e6e;
  border-radius: 10px ;
  box-shadow: 5px 5px 5px rgba(0,0,0, 0.5);
  width: 57%;
  height: 35%;
  /* width: calc(100% - 300px); */
  /* padding: 16px; */
}

/* span.psw {
  float: right;
  padding-top: 16px;
} */
</style>