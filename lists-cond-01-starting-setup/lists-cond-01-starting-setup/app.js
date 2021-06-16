const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal1: ''
    };
  },
  watcher: {

  },
  methods: {

    addGoal() {
      this.goals.push(this.goal1);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
