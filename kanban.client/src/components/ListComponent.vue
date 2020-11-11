<template>
  <div class="listComponent">
    <h1>{{ listProp.title }}</h1>
    <form class="row form-group" @submit.prevent="createTask">
      <div class="col">
        <task-component v-for="task in tasks" :key="task" :task-prop="task" />
        <input type="text" class="form-control" v-model="state.newTask">
        <button type="submit" class="btn btn-dark shadow-lg">Create Task</button>
      </div>
    </form>
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'
import { taskService } from '../services/TaskService'
import { AppState } from '../AppState'
import TaskComponent from '../components/TaskComponent'
export default {
  name: 'ListComponent',
  props: ['listProp'],
  setup(props) {
    const state = reactive({
      newTask: {
      }
    })
    onMounted(async() => {
      await taskService.getTasks(props.listProp._id)
    })
    return {
      state,
      tasks: computed(() => AppState.tasks[props.listProp._id]),
      createTask() {
        taskService.createTask(state.newTask)
      }
    }
  },
  components: { TaskComponent }
}
</script>

<style lang="scss" scoped>

</style>
