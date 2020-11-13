<template>
  <div class="dropListComponent">
    <a class="dropdown-item" @click="changeId">{{ dropListProp.title }}</a>
  </div>
</template>

<script>
import { taskService } from '../services/TaskService'
export default {
  name: 'DropListComponent',
  props: ['dropListProp', 'taskProp'],
  setup(props) {
    return {
      changeId() {
        taskService.editTask(props.taskProp._id, props.dropListProp._id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
