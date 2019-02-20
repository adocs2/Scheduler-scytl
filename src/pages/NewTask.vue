<template>
  <q-page padding class="card-examples row items-start">
    <div class="row justify-center full-height full-width">
      <q-card class="col-6 bigger q-ma-sm" color="white" text-color="faded">
        <q-card-main>
          <q-input class="q-mb-lg" v-model="task.taskTitle" float-label="Title" maxlength="100"/>
          <q-input class="q-mb-lg" v-model="task.taskDescription" float-label="Description" type="textarea"
                   maxlength="400"/>
          Is this task completed?
          <q-radio style="padding-right: 1em" v-model="task.taskCompleted" val="true" label="Yes"/>
          <q-radio v-model="task.taskCompleted" val="false" label="No"/>

          <q-datetime class="q-mb-lg" v-model="task.taskDeadLine" float-label="Date" format="MM/DD/YYYY"/>
          <div class="row justify-end">
            <q-btn color="green" label="Create new Task" @click="createTask()" :disabled="blockedButton"/>
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
  data () {
    return {
      task: {
        taskTitle: '',
        taskDescription: '',
        taskCompleted: '',
        taskDeadLine: ''
      }
    }
  },
  computed: {
    blockedButton () {
      return this.task.taskTitle.length <= 0 || this.task.taskTitle.length >= 101 || this.task.taskDescription.length >= 401
    }
  },
  methods: {
    createTask () {
      this.$store.dispatch('createTask', this.task)
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
