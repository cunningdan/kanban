<template>
  <div class="boardComponent">
    <h3 @click="navigateTo('/activeBoard'), setActiveBoard()">
      {{ boardProp.title }}
    </h3>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
import { boardService } from '../services/BoardService'
import router from '../router'
export default {
  name: 'BoardComponent',
  props: ['boardProp'],
  setup(props) {
    return {
      users: computed(() => AppState.user),
      setActiveBoard() {
        router.push({

          name: 'ActiveBoard',
          params: {
            boardId: props.boardProp._id
          }
        })
        boardService.setActiveBoard(props.boardProp)
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
