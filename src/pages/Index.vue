<template>
  <q-page padding>
    <div v-show="tasks.length > 0" class="row justify-center text-center q-mb-lg">
      <q-btn-toggle
        v-model="filterOption"
        color="white"
        text-color="faded"
        toggle-color="primary"
        :options="[
    {label: 'All tasks', value: 1},
    {label: 'Completed tasks', value: 2},
    {label: 'Incompleted tasks', value: 3}
  ]"></q-btn-toggle>

    </div>
    <div v-show="tasks.length > 0" v-for="task in tasks" v-bind:key="task.Id"
         class="row justify-center full-height full-width text-center q-mb-lg">
      <q-card color="white" text-color="faded">
        <router-link :to="{ name: 'editTask', params: { taskId: task.Id }}">
          <q-card-main style="width: 15em">
            {{task.Title}}
          </q-card-main>
        </router-link>
      </q-card>
    </div>
    <div class="row justify-center text-center q-mb-lg" style="margin-top: 3em">
      <q-btn color="white" to="newTask" text-color="faded" label="Create new task"></q-btn>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      filterOption: 1
    }
  },
  computed: {
    tasks: {
      get () {
        if (this.filterOption === 1) {
          return this.$store.state.Tasks.tasks
        }
        if (this.filterOption === 2) {
          return this.$store.state.Tasks.tasks.filter((task) => (task.Completed === true))
        } else {
          return this.$store.state.Tasks.tasks.filter((task) => (task.Completed === false))
        }
      }
    }
  },
  created () {
    this.$store.dispatch('getAllTasks')
  }
}
</script>
