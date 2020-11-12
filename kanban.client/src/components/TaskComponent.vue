<template>
  <div class="taskComponent">
    <form class="form-group" @submit.prevent="editTask">
      <input type="text" class="form-control" v-model="state.changedTask.title">
    </form>
    <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false">
      Change List
    </button>
    <div class="dropdown-menu "
    aria-labelledby="dropdownMenuButton">
    <drop-list-component v-for="list in lists" :key="list" :drop-list-prop="list"/>
    </div>
  </div>
    <button class="btn btn-danger" @click="deleteTask">X</button>
    <comment-component v-for="comment in comments" :key="comment" :comment-prop="comment" />
    <form class="row form-group" @submit.prevent="createComment">
      <input type="text" class="form-control" v-model="state.newComment.body">
      <button type="submit" class="btn btn-success shadow-lg">Post Comment</button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import CommentComponent from './CommentComponent'
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
import { taskService } from '../services/TaskService'
import DropListComponent from './DropListComponent'
export default {
  name: 'TaskComponent',
  props: ['taskProp'],
  setup(props) {
    const state = reactive({
      newComment: {},
      changedTask: {}
    })
    onMounted(() => {
      state.changedTask.title = props.taskProp.title
      state.changedTask.listId = props.taskProp.listId
      commentService.getComment(props.taskProp._id)
    })
    return {
      state,
      comments: computed(() => AppState.comments[props.taskProp._id]),
      createComment() {
        state.newComment.taskId = props.taskProp._id
        commentService.createComment(state.newComment)
      },
      editTask() {
        taskService.editTask(props.taskProp._id, state.changedTask)
      },
      deleteTask() {
        taskService.deleteTask(props.taskProp._id, state.changedTask)
      },
      lists: computed(() => AppState.lists)
    }
  },
  components: { CommentComponent, DropListComponent }
}
</script>

<style lang="scss" scoped>

</style>
