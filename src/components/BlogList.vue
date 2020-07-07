<template>
  <div class="container">
    <div class="card-columns">
      <div v-bind:key="post._id" v-for="post in posts">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.post}}</p>
            <p class="card-text">
            <small class="text-muted">{{post.time}}</small>
            <a class="btn btn-light btn-sm delete-post">Delete</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  props: ["posts"]
};
</script>

<style scoped>
    .container {
        margin-top: 45px;
    }
    .text-muted {
        display: block;
    }
    .delete-post {
        margin-top: 10px;
    }
</style>