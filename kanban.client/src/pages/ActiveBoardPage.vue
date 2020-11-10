<template>
  <div class="activeBoard">
    This Is Active
    <h3>{{ activeBoard.title }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue'
// import { boardService } from '../services/BoardService'
// import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'ActiveBoard',
  setup() {
    // const route = useRoute()
    // onMounted(async() => {
    //   await boardService.getActiveBoard(route.params.boardId)
    // })
    return {
      activeBoard: computed(() => AppState.activeBoard)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
