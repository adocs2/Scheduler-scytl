<template>
  <q-page padding>
    <div v-show="tasks.length > 0" v-for="task in tasks" v-bind:key="task.id" class="row justify-center full-height full-width text-center q-mb-lg">
      <q-card color="white" text-color="faded">
        <q-card-main>
          {{task.Title}}
        </q-card-main>
      </q-card>
    </div>
    <div class="row justify-center text-center q-mb-lg">
      <router-link :to="{name: 'newTask'}">
        <q-btn color="white" text-color="faded" label="Create new task"/>
      </router-link>
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
        return this.$store.state.allTasks.tasks
      }
    }
  }
}
</script>
