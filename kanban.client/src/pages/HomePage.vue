<template>
  <div class="home container-fluid ">
    <form class="row" @submit="createBoard">
      <input type="text" v-model="state.newBoard.title">
      <button type="submit">Create Board</button>
    </form>
    <div class="col-12">
      <board-component v-for="board in boards" :key="board" :board-Prop="board" />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import BoardComponent from '../components/BoardComponent'
import { boardService } from '../services/BoardService'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
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
        boardService.create(state.newBoard)
      },
      users: computed(() => AppState.users)
    }
  },
  components: { BoardComponent }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
