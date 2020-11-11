<template>
  <div class="commentComponent">
    <form class="form-group" @submit.prevent="editComment">
      <input class="form-control" type="text" v-model="state.changedComment.body">
    </form>
    <button class="btn btn-danger" @click="deleteComment">X</button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { commentService } from '../services/CommentService'
export default {
  name: 'CommentComponent',
  props: ['commentProp'],
  setup(props) {
    const state = reactive({
      changedComment: {}
    })
    onMounted(() => {
      state.changedComment.body = props.commentProp.body
      state.changedComment.taskId = props.commentProp.taskId
    })
    return {
      state,
      editComment() {
        commentService.editComment(props.commentProp._id, state.changedComment)
      },
      deleteComment() {
        commentService.deleteComment(props.commentProp._id, state.changedComment)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
