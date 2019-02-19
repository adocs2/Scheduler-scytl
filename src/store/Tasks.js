import axios from 'axios'
export default {
  state: {
    tasks: []
  },
  actions: {
    createTask (state, task) {
      const userid = 'dca0f3820bdf4384b2f5babc183aa3'
      const postUrl = 'http://prova.scytlbrasil.com:81/Api/tasks/PostTask?userid='
      console.log(task)
      axios.post(postUrl + userid, {
        Title: task.taskTitle,
        Description: task.taskDescription,
        Completed: task.taskCompleted,
        Deadline: task.taskDeadLine
      })
    },
    getAllTasks ({ commit }) {
      const getUrl = 'http://prova.scytlbrasil.com:81/Api/tasks?userid='
      const userid = 'dca0f3820bdf4384b2f5babc183aa3'
      axios.get(getUrl + userid, { options: { 'Access-Control-Allow-Origin': '*' } })
        .then(function (response) {
          commit('UPDATE', response.data)
        })
    }
  },
  mutations: {
    UPDATE (state, newTasks) {
      state.tasks = newTasks
    }
  }
}
