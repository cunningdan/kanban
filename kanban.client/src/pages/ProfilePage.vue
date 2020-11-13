<template>
  <div class="about container-fluid text-center">
    <div class="row">
      <div class="col-8 offset-2">
        <h1>Welcome {{ profile.name }}</h1>
        <img class="rounded" :src="profile.picture" alt="" />
        <p>{{ profile.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Profile',
  setup() {
    return {
      profile: computed(() => AppState.profile)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

div{
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(4, 8, 240);
  text-shadow: 2px 2px 8px rgba(150, 150, 177, 0.719);
}
</style>
