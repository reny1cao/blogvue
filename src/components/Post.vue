<template>
  <div class="post">
    <img class="banner" v-if="selectedPost.banner" :src="selectedPost.banner" alt="post banner">
    <h2 class="title">{{selectedPost.title}}</h2>
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
  top: 50px;
}
.banner {
  width: 100%;
}
.title {
  margin-top: 20px;
}
</style>