<template>
  <div class="listComponent">
    <h1>{{ listProp.title }}</h1>
    <div class="row">
      <div class="col-3">
        <task-component v-for="task in tasks" :key="task" :task-prop="task" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { taskService } from '../services/TaskService'
import { AppState } from '../AppState'
import TaskComponent from '../components/TaskComponent'
export default {
  name: 'ListComponent',
  props: ['listProp'],
  setup(props) {
    onMounted(async() => {
      await taskService.getTasks(props.listProp._id)
    })
    return {
      tasks: computed(() => AppState.tasks)
    }
  },
  components: { TaskComponent }
}
</script>

<style lang="scss" scoped>

</style>
