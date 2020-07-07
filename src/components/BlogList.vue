<template>
  <div class="container">
    <div class="card-columns">
      <div v-bind:key="post._id" v-for="post in posts">
        <div class="card shadow-sm rounded">
          <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.post}}</p>
            <p class="card-text">
            <small class="text-muted">{{post.time}}</small>
            <button class="btn btn-light btn-sm shadow-sm rounded delete-post" @click="delPost(post._id)">Delete</button>
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
  props: ["posts"],
  methods: {
      delPost(id) {
          this.$emit('del-post', id);
      }
  }
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