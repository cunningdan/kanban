<template>
  <div class="listComponent">
    <form class="form-group" @submit.prevent="editList">
      <input class="border-0" type="text" v-model="state.changedList.title">
    </form>
    <button @click="deleteList" class="btn btn-danger">X</button>
    <form class="row form-group" @submit.prevent="createTask">
      <div class="col">
        <input type="text" class="form-control" v-model="state.newTask.title">
        <button type="submit" class="btn btn-dark shadow-lg">Create Task</button>
      </div>
    </form>
    <task-component v-for="task in tasks" :key="task" :task-prop="task" />
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'
import { taskService } from '../services/TaskService'
import { AppState } from '../AppState'
import TaskComponent from '../components/TaskComponent'
import { listService } from '../services/ListService'
export default {
  name: 'ListComponent',
  props: ['listProp'],
  setup(props) {
    const state = reactive({
      newTask: {},
      changedList: {}
    })
    onMounted(async() => {
      state.changedList.title = props.listProp.title
      state.changedList.boardId = props.listProp.boardId
      await taskService.getTasks(props.listProp._id)
    })
    return {
      state,
      tasks: computed(() => AppState.tasks[props.listProp._id]),
      createTask() {
        state.newTask.listId = props.listProp._id
        taskService.createTask(state.newTask)
      },
      editList() {
        listService.editList(props.listProp._id, state.changedList)
      },
      deleteList() {
        listService.deleteList(props.listProp._id, state.changedList)
      }
    }
  },
  components: { TaskComponent }
}
</script>

<style lang="scss" scoped>

</style>
