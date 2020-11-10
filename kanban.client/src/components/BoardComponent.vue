<template>
  <div class="boardComponent">
    <h3>Title</h3>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  name: 'BoardComponent',
  setup(props) {
    return {
      users: computed(() => AppState.user)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
