const App = Vue.createApp({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increase() {
      this.count = this.count + 1
    },
    decrease() {
      this.count = this.count - 1
    },
    reset() {
      this.count = 0
    },
  },
})

App.mount('#app')
