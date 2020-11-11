<template>
  <div class="activeBoard container-fluid">
    <h3>{{ activeBoard.title }}</h3>
    <div class="row">
      <div class="col-3">
        <list-component v-for="list in lists" :key="list" :list-prop="list" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { listService } from '../services/ListService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import ListComponent from '../components/ListComponent'
export default {
  name: 'ActiveBoard',
  setup(props) {
    const route = useRoute()
    onMounted(async() => {
      await listService.getLists(route.params.boardId)
    })
    return {
      activeBoard: computed(() => AppState.activeBoard),
      lists: computed(() => AppState.lists),
      tasks: computed(() => AppState.tasks),
      comments: computed(() => AppState.comments)
    }
  },
  components: { ListComponent }
}
</script>

<style lang="scss" scoped>

</style>
