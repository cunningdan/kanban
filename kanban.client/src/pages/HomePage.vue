<template>
  <div class="home container-fluid">
    <form class="row justify-content-center my-3" @submit.prevent="createBoard">
      <div class="col-6">
        <button class="btn btn-outline-info btn-lg mb-2" type="submit">
          Create Board
        </button>
        <input class="form-control" type="text" v-model="state.newBoard.title">
      </div>
    </form>
    <div class="col-4 offset-4 ">
      <board-component v-for="board in boards" :key="board" :board-prop="board" />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import BoardComponent from '../components/BoardComponent'
import { boardService } from '../services/BoardService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      boardService.getBoards()
    })
    const state = reactive({
      newBoard: {}
    })
    return {
      state,
      createBoard() {
        boardService.createBoard(state.newBoard)
      },
      users: computed(() => AppState.users),
      boards: computed(() => AppState.boards)
    }
  },
  components: { BoardComponent }
}
</script>

<style scoped lang="scss">

button{
    border-style: solid;
    border-color: rgba(4, 235, 243, 0.89);
    border-width: thick;
  }

  .home{
    text-align: center;
  user-select: none;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(4, 8, 240);
  text-shadow: 2px 2px 8px rgba(150, 150, 177, 0.719);
  > img{
    height: 200px;
    width: 200px;
  }
}

</style>
