export default {
  state: {
    taskTitle: '',
    taskDescription: '',
    taskCompleted: '',
    taskDeadLine: ''
  },
  actions: {
    updateTitle ({ commit }, newTitle) {
      commit('UPDATE_TITLE', newTitle)
    },
    updateDescription ({ commit }, newDescription) {
      commit('UPDATE_DESCRIPTION', newDescription)
    },
    updateCompleted ({ commit }, newCompleted) {
      commit('UPDATE_COMPLETED', newCompleted)
    },
    updateDeadLine ({ commit }, newDeadLine) {
      commit('UPDATE_DEADLINE', newDeadLine)
    },
    cleanTask ({ commit }) {
      commit('CLEAN_TASK')
    }
  },
  mutations: {
    UPDATE_TITLE (state, newTitle) {
      state.taskTitle = newTitle
    },
    UPDATE_DESCRIPTION (state, newDescription) {
      state.taskDescription = newDescription
    },
    UPDATE_COMPLETED (state, newCompleted) {
      state.taskCompleted = newCompleted
    },
    UPDATE_DEADLINE (state, newDeadLine) {
      state.taskDeadLine = newDeadLine
    },
    CLEAN_TASK (state) {
      const getDefaultState = () => {
        return {
          taskTitle: '',
          taskDescription: '',
          taskCompleted: '',
          taskDeadLine: ''
        }
      }
      Object.assign(state, getDefaultState())
    }
  }
}
