<template>
  <div class="boardComponent">
    <router-link :to="{name: 'ActiveBoard', params: {boardId: boardProp._id}}">
      <h3>
        {{ boardProp.title }}
      </h3>
    </router-link>
    <button class="btn btn-danger" @click="deleteBoard">Delete</button>
    <form class="form-group" @submit="editBoard">
      <input type="text" v-model="state.changedBoard.title">
      <button class="btn btn-success" type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { boardService } from '../services/BoardService'
export default {
  name: 'BoardComponent',
  props: ['boardProp'],
  setup(props) {
    const state = reactive({
      changedBoard: {}
    })
    return {
      state,
      users: computed(() => AppState.user),
      deleteBoard() {
        boardService.deleteBoard(props.boardProp._id)
      },
      editBoard() {
        boardService.editBoard(props.boardProp._id, state.changedBoard)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
