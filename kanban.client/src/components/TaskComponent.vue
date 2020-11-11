<template>
  <div class="taskComponent">
    <h3>{{ taskProp.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'TaskComponent',
  props: ['taskProp'],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
