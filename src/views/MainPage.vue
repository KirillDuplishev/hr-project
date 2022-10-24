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
      BurgerButton
  div.clear

  div.footer
</template>

<script>
import SideBarLeft from '@/components/SideBarLeft.vue'
import BurgerButton from '@/components/HelloWorld.vue'
export default {
  name:"MainPage",
  components: {
    SideBarLeft,
    BurgerButton
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
</style>
