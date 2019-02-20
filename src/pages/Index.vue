<template>
  <q-page padding>
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
    <div class="row justify-center text-center q-mb-lg">
      <q-btn color="white" to="newTask" text-color="faded" label="Create new task"/>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  computed: {
    tasks: {
      get () {
        return this.$store.state.Tasks.tasks
      }
    }
  },
  created () {
    this.$store.dispatch('getAllTasks')
  }
}
</script>
