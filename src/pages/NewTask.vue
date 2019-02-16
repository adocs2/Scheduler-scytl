<template>
  <q-page padding class="card-examples row items-start">
    <div class="row justify-center full-height full-width">
      <q-card class="col-6 bigger q-ma-sm" color="white" text-color="faded">
        <q-card-main>
          <q-input class="q-mb-lg" v-model="title" float-label="Title"/>
          <q-input class="q-mb-lg" v-model="description" float-label="Description" type="textarea"/>
          Is this task completed?
          <q-radio style="padding-right: 1em" v-model="completed" val="true" label="Yes"/>
          <q-radio v-model="completed" val="false" label="No"/>

          <q-datetime class="q-mb-lg" v-model="deadLine" float-label="Date"/>
          <div class="row justify-end">
            <router-link :to="{name: 'home'}">
              <q-btn color="green" label="Create new task" @click="createTask(getTask)"/>
            </router-link>
          </div>
        </q-card-main>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'NewTask',
  methods: {
    createTask (task) {
      this.$store.dispatch('addTaskToSchedule', task)
      this.cleanTask()
    },
    cleanTask () {
      return this.$store.dispatch('cleanTask')
    }
  },
  computed: {
    getTask () {
      return this.$store.state.task
    },
    title: {
      get () {
        return this.$store.state.task.taskTitle
      },
      set (newTitle) {
        return this.$store.dispatch('updateTitle', newTitle)
      }
    },
    description: {
      get () {
        return this.$store.state.task.taskDescription
      },
      set (newDescription) {
        return this.$store.dispatch('updateDescription', newDescription)
      }
    },
    completed: {
      get () {
        return this.$store.state.task.taskCompleted
      },
      set (newCompleted) {
        return this.$store.dispatch('updateCompleted', newCompleted)
      }
    },
    deadLine: {
      get () {
        return this.$store.state.task.taskDeadLine
      },
      set (newDeadLine) {
        return this.$store.dispatch('updateDeadLine', newDeadLine)
      }
    }
  }
}
</script>

<style lang="stylus">
  .card-examples
    .q-card
      width 300px

    .bigger
      width 450px
      max-width 90vw
    @media (max-width $breakpoint-xs-max)
      .q-card
        width 100%
</style>
