<template>
  <div class="ActiveBoard container-fluid">
    <h3>{{ activeBoard.title }}</h3>
    <div class="row">
      <form class="col-3 form-group" @submit.prevent="createList">
        <input type="text" class="form-control" v-model="state.newList.title">
        <button class="btn btn-info" type="submit">Create List</button>
      </form>
      <list-component v-for="list in lists" :key="list" :list-prop="list" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { listService } from '../services/ListService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import ListComponent from '../components/ListComponent'
export default {
  name: 'ActiveBoard',
  setup(props) {
    const state = reactive({
      newList: {}
    })
    const route = useRoute()
    onMounted(async() => {
      await listService.getLists(route.params.boardId)
    })
    return {
      state,
      activeBoard: computed(() => AppState.activeBoard),
      lists: computed(() => AppState.lists),
      tasks: computed(() => AppState.tasks),
      comments: computed(() => AppState.comments),
      createList() {
        state.newList.boardId = route.params.boardId
        listService.createList(state.newList)
      }
    }
  },
  components: { ListComponent }
}
</script>

<style lang="scss" scoped>

</style>
