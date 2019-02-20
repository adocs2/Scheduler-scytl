import axios from 'axios'
export default {
  state: {
    tasks: []
  },
  actions: {
    async createTask (state, task) {
      const userid = 'dca0f3820bdf4384b2f5babc183aa3'
      const postUrl = 'http://prova.scytlbrasil.com:81/Api/tasks/PostTask?userid='
      await axios.post(postUrl + userid, {
        Title: task.taskTitle,
        Description: task.taskDescription,
        Completed: task.taskCompleted,
        Deadline: task.taskDeadLine
      })
      this.$router.push('/')
    },
    async editTask (state, task) {
      const editUrl = 'http://prova.scytlbrasil.com:81/Api/tasks/EditTask?id=' + task.taskId + '&userid='
      const userid = 'dca0f3820bdf4384b2f5babc183aa3'
      await axios.post(editUrl + userid, {
        Title: task.taskTitle,
        Description: task.taskDescription,
        Completed: task.taskCompleted,
        Deadline: task.taskDeadLine
      })
      this.$router.push('/')
    },
    async deleteTask (state, task) {
      const editUrl = 'http://prova.scytlbrasil.com:81/Api/tasks/RemoveTask?id=' + task.taskId + '&userid='
      const userid = 'dca0f3820bdf4384b2f5babc183aa3'
      await axios.post(editUrl + userid)
      this.$router.push('/')
    },
    getAllTasks ({ commit }) {
      const getUrl = 'http://prova.scytlbrasil.com:81/Api/tasks?userid='
      const userid = 'dca0f3820bdf4384b2f5babc183aa3'
      axios.get(getUrl + userid, { options: { 'Access-Control-Allow-Origin': '*' } })
        .then(function (response) {
          commit('UPDATE', response.data)
        })
    },
    getTask (state, id) {
      return state.state.tasks.filter((task) => (task.Id === id))
    }
  },
  mutations: {
    UPDATE (state, newTasks) {
      state.tasks = newTasks
    }
  }
}
