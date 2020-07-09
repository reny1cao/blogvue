<template>
  <div class="post">
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
</style>