<template>
  <div class="taskComponent">
    <h3>{{ taskProp.title }}</h3>
    <form class="row">
      <div class="col-12">
        <comment-component v-for="comment in comments" :key="comment" :comment-prop="comment" />
      </div>
    </form>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import CommentComponent from './CommentComponent'
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
export default {
  name: 'TaskComponent',
  props: ['taskProp'],
  setup(props) {
    onMounted(() => {
      commentService.getComment(props.taskProp._id)
    })
    return {
      comments: computed(() => AppState.comments[props.taskProp._id])
    }
  },
  components: { CommentComponent }
}
</script>

<style lang="scss" scoped>

</style>
