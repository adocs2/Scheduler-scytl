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
      if (state.state.tasks.length > 0) {
        const task = state.state.tasks.filter((task) => (task.Id === id))
        return {
          Id: task[0].Id,
          Title: task[0].Title,
          Description: task[0].Description,
          Completed: task[0].Completed,
          Deadline: task[0].Deadline
        }
      } else {
        const getTaskUrl = 'http://prova.scytlbrasil.com:81/Api/tasks/GetTask?id=' + id + '&userid='
        const userid = 'dca0f3820bdf4384b2f5babc183aa3'
        return axios.get(getTaskUrl + userid).then((response) => (response.data))
      }
    }
  },
  mutations: {
    UPDATE (state, newTasks) {
      state.tasks = newTasks
    }
  }
}
