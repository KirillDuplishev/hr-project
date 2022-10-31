<template lang="pug">
div(id="burger" :class="{'active' : isBurgerActive}" @click.prevent="toogle")
  slot
    button.burger-button(type="button" title="Меню")
      div.burger-bar.burger-bar--1
      div.burger-bar.burger-bar--2
      div.burger-bar.burger-bar--3
</template>

<script>
import { store, mutations } from '@/store.js'
export default {
  name: "BurgerButton",
  computed: {
    isBurgerActive() {
      return store.isNavOpen
    }
  },
  methods: {
    toogle() {
      mutations.toggleNav()
    }
  }
}
</script>

<style scoped>
button {
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.burger-button {
  display: flex;
  justify-content: end;
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
  background-color: red;
  position: absolute;
  top: 50%;
  height: 2px;
  width: 7px;
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
.v-btn:not(.v-btn--round).v-size--default {
  margin-left: 15px;
}

</style>