<template lang="pug">
div.container
  div.header

  div.navigation

  SideBarLeft
    button.btn-sidebar.third Кнопка 1
    button.btn-sidebar.third Кнопка 2
    button.btn-sidebar.third Кнопка 3
    button.btn-sidebar.third Кнопка 4
  div.content
    div.block-burger
      burger
  div.clear

  div.footer
</template>

<script>
import SideBarLeft from '@/components/SideBarLeft.vue'
import Burger from '@/components/Burger.vue'
export default {
  name:"MainPage",
  components: {
    SideBarLeft,
    Burger
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>
.header {
  position: absolute;
  right: 0px;
  top: 0px;
  background: #e1f5a4;
  width: 100%;
  height: 55px;
}

.container {
  margin: auto auto;
  text-align: center;
  width: 100%;
  height: 100%;
}

.navigation {
  position: absolute;
  top: 55px;
  left: 0px;
  background: #edb86d;
  width: 100%;
  height: 50px;
}

.block-burger{
  position: absolute;
  right: 0px;
  width: 32px;
  height: 30px;
  margin-right: 0px;
  text-align: right;
}
.sidebar {
  position: absolute;
  top: 105px;
  left: 0px;
  background: #fae8b9;
  float: left;
  width: 17%;
  height: 100%;
}

.btn-sidebar {
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
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.btn-sidebar:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.third {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
.third:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}

.content {
  position: absolute;
  top: 105px;
  right: 0px;
  background: #ffffff;
  float: right;
  width: 100%;
  height: 100%;
  background: rgb(101,31,87);
  background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
}
.clear {
  clear: both;
}

.footer {
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: #edb86d;
  width: 100%;
  height: 50px;
}
</style>
