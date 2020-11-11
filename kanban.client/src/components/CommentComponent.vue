<template>
  <div class="commentComponent">
    <p>{{ commentProp.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentComponent',
  props: ['commentProp'],
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
