<template>
  <div>
    <h3>2020</h3>
    <div v-bind:key="post._id" v-for="post in posts">
      <div class="card shadow-sm rounded">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="../assets/image2.jpeg" class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text text-truncate">{{ post.post }}</p>
              <p class="card-text">
                <small class="text-muted">{{ post.time }}</small>
              </p>
              <button
                class="btn btn-light btn-sm shadow-sm rounded delete-post"
                @click="delPost(post._id)"
              >Delete</button>
              <svg @click="selPost(post._id)"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-square-half"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8V1zm6-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
                />
              </svg>
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
    },
    selPost(id) {
      this.$emit("sel-post", id);
    }
  }
};
</script>

<style scoped>
.text-muted {
  display: block;
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
.bi-square-half {
    margin-top: 15px;
    float: right;
}
</style>
