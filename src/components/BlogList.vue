<template>
  <div class="container">
      <h3>2020</h3>
      <div v-bind:key="post._id" v-for="post in posts">
        <div class="card shadow-sm rounded">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="../assets/image2.jpeg" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text text-truncate">{{post.post}}</p>
                <p class="card-text">
                  <small class="text-muted">{{post.time}}</small>
                  <button
                    class="btn btn-light btn-sm shadow-sm rounded delete-post"
                    @click="delPost(post._id)"
                  >Delete</button>
                </p>
              </div>
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
      this.$emit("del-post", id);
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
.card {
  max-width: 600px;
  margin-top: 20px;
}
.card-img {
    max-width: auto;
    height: 100%;
    object-fit: cover;
    border-radius: 3px 0 0 3px;
}
</style>