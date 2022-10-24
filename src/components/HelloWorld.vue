<template lang="pug">
.all
  .header
    .ico
      span.text Апельсин
    .buttons
      v-btn asdasd
      v-btn asdasd
      v-btn asdasd
      v-btn asdasd

    #burger(:class="{ active: isBurgerActive }", @click.prevent="toogle")
      slot
        button.burger-button(type="button", title="Меню")
          span.burger-bar.burger-bar--1
          span.burger-bar.burger-bar--2
          span.burger-bar.burger-bar--3
  .content
  .footer
</template>
<script>
import { store, mutations } from "@/store.js";
export default {
  name: "BurgerButton",
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    },
  },
  methods: {
    toogle() {
      mutations.toggleNav();
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.all {
  background: rgba(35, 35, 35);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header,
.footer {
  height: 50px;
}

.header {
  width: 100%;
  position: absolute;
  border-radius: 0 0 10px 10px;
  background: rgb(32, 32, 32);
  box-shadow: 0px 5px 10px 0 rgb(0, 0, 0, 1);
  display: flex;
}

.footer {
  background: orange;
  margin-top: auto;
}
.content {
  background: rgb(32, 32, 32);
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.text {
  align-content: center;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
  vertical-align: middle;
  color: orange;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
button {
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #fff;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>