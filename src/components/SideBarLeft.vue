<template lang="pug">
.container
  .sidebar
    .sidebar-backdrop(@click="closeSidebarPanel", v-if="isPanelOpen")
    transition(name="slide")
      .sidebar-panel(v-if="isPanelOpen")
        slot 
</template>

<script>
import { store, mutations } from "@/store.js";
export default {
  name: "SideBarLeft",
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
  methods: {
    closeSidebarPanel() {
      mutations.toggleNav;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #130f40;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}
</style>