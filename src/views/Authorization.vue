<template>
  <form>
  <div class="imgcontainer">
    <img style="width:300px; height:300px" src="src\assets\Ресурс 15.svg" alt="Avatar" class="avatar">
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
        // window.location.href = 'localhost:8080/All';
        this.$router.push({path: '/MainPage'});
      } else {
        this.error = "Неправильный логин или пароль. Попробуйте еще раз.";
        return false;
      }
    },

    // router(){
    //   window.location.href = 'https://www.yoursite.com/blog';
    // }
  }
}
</script>
<style scoped>
*{
  font-family: monospace;
}
form {
  min-height: 100vh;
  max-height: 100vh;
  border: 30px solid #454545;

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

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  width: 800px;
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
</style>