<template>
  <q-page padding>
    <div class="row justify-center text-center q-mb-lg">
      <q-btn-toggle
        no-caps
        v-model="filterOption"
        color="white"
        text-color="faded"
        toggle-color="primary"
        :options="[
    {label: 'All Tasks', value: 1},
    {label: 'Completed Tasks', value: 2},
    {label: 'Incompleted Tasks', value: 3}
  ]"></q-btn-toggle>

    </div>
    <div v-show="tasks.length > 0" v-for="task in tasks" v-bind:key="task.Id"
         class="row justify-center full-height full-width text-center q-mb-lg">
      <q-card color="white" text-color="faded">
        <router-link :to="{ name: 'editTask', params: { taskId: task.Id }}">
          <q-card-main style="width: 15em">
            <div class="row justify-between">
              {{task.Title}}
              <q-icon v-show="task.Completed === true" style="color: limegreen" name="done"></q-icon>
              <q-icon v-show="task.Completed === null" style="color: yellow" name="indeterminate_check_box"></q-icon>
              <q-icon v-show="task.Completed === false" style="color: red" name="not_interested"></q-icon>
            </div>
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
