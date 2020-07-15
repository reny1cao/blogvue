<template>
  <div class="post">
    <img class="banner" :src="selectedPost.banner" alt="post banner">
    <h2>{{selectedPost.title}}</h2>
    <small class="text-muted">{{selectedPost.time}}</small>
    <div v-html="selectedPost.post"></div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["selectedPost"]
};
</script>

<style scoped>
.post {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  margin-top: 50px;
}
.banner {
  max-width: 400px;
}
</style>