const App = Vue.createApp({
  data() {
    return {
      tasks: [
        { id: 1, title: 'Sleep' },
        { id: 2, title: 'Wake up' },
      ],
      newTask: '',
    }
  },
  methods: {
    addTask() {
      if (this.newTask !== '') {
        let task = {
          id: this.tasks.length + 1,
          title: this.newTask,
        }
        this.tasks.push(task)
        this.newTask = ''
      }
    },
    deleteTask(id) {
      // console.log(id)
      // let el = this.tasks.some(id)
      // console.log(el)
    },
  },
})

App.mount('#app')
// Vue.createApp(App).mount('#app')
