<template>
  <div class="boardComponent">
    <router-link :to="{name: 'ActiveBoard', params: {boardId: boardProp._id}}">
      <h3 class="m-2">
        {{ boardProp.title }}
      </h3>
    </router-link>
    <form class="form-group" @submit.prevent="editBoard">
      <input class="form-control" type="text" v-model="state.changedBoard.title">
      <button class="btn btn-primary btn-lg my-3" type="submit">
        Edit Board Name
      </button>
      <button class="btn btn-danger btn-lg m-3" @click="deleteBoard">
        Delete
      </button>
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

button{
  border-style: solid;
  border-color:rgba(41, 40, 40, 0.404);
  border-width: thick;
  padding: none;
}

</style>
