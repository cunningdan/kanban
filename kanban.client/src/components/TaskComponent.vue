<template>
  <div class="taskComponent">
    <form class="form-group" @submit.prevent="editTask">
      <input type="text" class="form-control" v-model="state.changedTask.title">
    </form>
    <div class="dropdown">
      <button  class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
      >
        Change List
      </button>
      <div class="dropdown-menu "
           aria-labelledby="dropdownMenuButton"
      >
        <!-- <multiselect v-model="state.selectedOption" :options="state.lists"></multiselect> -->
        <div v-for="list in lists" :key="list._id">
          <button @click="updateListId(list._id)" style="background: transparent; width: 100%; height: 100%; position: relative; border: none;">
            {{ list.title }}
          </button>
        </div>
      </div>
    </div>
    <button class="btn btn-danger" @click="deleteTask">
      X
    </button>
    <comment-component v-for="comment in comments" :key="comment" :comment-prop="comment" />
    <form class="row form-group" @submit.prevent="createComment">
      <input type="text" class="form-control" v-model="state.newComment.body">
      <button type="submit" class="btn btn-success shadow-lg">
        Post Comment
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import CommentComponent from './CommentComponent'
import { commentService } from '../services/CommentService'
import { listService } from '../services/ListService'
import { AppState } from '../AppState'
import { taskService } from '../services/TaskService'



export default {
  name: 'TaskComponent',
  props: ['taskProp'],
  setup(props) {
    const route = useRoute()
    const state = reactive({
      newComment: {},
      changedTask: {},
      selectedOption: null,
      options: [],
      targetListId: props.taskProp._id,
    })
    onMounted(() => {
      state.changedTask.title = props.taskProp.title
      state.changedTask.listId = props.taskProp.listId
      commentService.getComment(props.taskProp._id)
    })
    return {
      state,
      lists: computed(() => AppState.lists),
      comments: computed(() => AppState.comments[props.taskProp._id]),
      selectedOption: null,
      createComment() {
        state.newComment.taskId = props.taskProp._id
        commentService.createComment(state.newComment)
      },
      updateListId(newListId) {
        if (newListId) {
          console.log(state.changedTask)
          state.changedTask.listId = newListId
        }
        console.log(state.changedTask, state.targetListId)
        taskService.editTask(props.taskProp._id, state.changedTask)
        listService.getLists(route.params.boardId)
      },
      editTask() {
      },
      deleteTask() {
        taskService.deleteTask(props.taskProp._id, state.changedTask)
      }
    }
  },
  components: { CommentComponent }
}
</script>

<style lang="scss" scoped>

</style>
