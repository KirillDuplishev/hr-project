import Vue from "vue";

export const store = Vue.observable({
  isNavOpen: false,
  openDialog: false,
});

export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen
  },
  openDialogWindow() {
    store.openDialog = !store.openDialog
  }
};