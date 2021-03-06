import { defineStore } from "pinia";
import piniaInstance from "@/store"

export const home = defineStore('home', {
  state: () => ({ name: 'this is home store...' }),
  actions: {
    updateName() {
      this.name = 'new name...'
    }
  }
})

export const useHomeStore = () => home(piniaInstance)