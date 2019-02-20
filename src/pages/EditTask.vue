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
          <div class="row justify-between">
            <q-btn color="red" label="Delete Task" @click.native="dialog.handler()"/>
            <q-btn color="green" label="Edit Task" @click="editTask()" :disabled="blockedButton"/>
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
  name: 'EditTask',
  props: ['taskId'],
  data () {
    return {
      task: {
        taskId: '',
        taskTitle: '',
        taskDescription: '',
        taskCompleted: '',
        taskDeadLine: ''
      },
      dialog: {
        label: 'Confirm',
        icon: 'done_all',
        handler: () => {
          this.$q.dialog({
            title: 'Are you sure?',
            message: 'You are about to delete this task.',
            stackButtons: true,
            ok: {
              push: true,
              color: 'negative',
              label: 'delete task'
            },
            cancel: {
              push: true,
              color: 'green',
              label: 'Nope, i will keep the task'
            }
          }).then(() => {
            this.deleteTask()
            this.$q.notify('Agreed!')
          }).catch(() => {
            this.$q.notify('Disagreed...')
          })
        }
      }
    }
  },
  computed: {
    blockedButton () {
      return this.task.taskTitle.length <= 0 || this.task.taskTitle.length >= 101 || this.task.taskDescription.length >= 401
    }
  },
  methods: {
    editTask () {
      this.$store.dispatch('editTask', this.task)
    },
    deleteTask () {
      this.$store.dispatch('deleteTask', this.task)
    },
    async getTask () {
      const task = await this.$store.dispatch('getTask', this.taskId)
      this.mapTask(task)
    },
    mapTask (task) {
      this.task.taskId = this.taskId
      this.task.taskTitle = task.Title
      this.task.taskDescription = task.Description
      if (task.Completed !== null) {
        this.task.taskCompleted = task.Completed.toString()
      } else {
        this.task.taskCompleted = task.Completed
      }
      this.task.taskDeadLine = task.Deadline
    }
  },
  created () {
    this.getTask()
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
