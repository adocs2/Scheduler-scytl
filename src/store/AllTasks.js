export default {
  state: {
    tasks: []
  },
  actions: {
    addTaskToSchedule ({ commit }, newTask) {
      commit('UPDATE_SCHEDULE', newTask)
    }
  },
  mutations: {
    UPDATE_SCHEDULE (state, newTask) {
      const task = {
        Title: newTask.taskTitle,
        Description: newTask.taskDescription,
        Completed: newTask.taskCompleted,
        DeadLine: newTask.taskDeadLine
      }
      state.tasks.push(task)
    }
  }
}
