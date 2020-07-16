<template>
  <div id="app">
    <div class="container">
      <div class="row row-height">
        <div class="col left">
          <BlogList v-bind:posts="posts" v-on:del-post="delPost" v-on:sel-post="selPost"/>
        </div>
        <div class="col right">
          <Post v-bind:selectedPost="selectedPost"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from "../components/BlogList.vue";
import Post from "../components/Post.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    BlogList,
    Post
  },
  data() {
    return {
      posts: [],
      selectedPost: []
    };
  },
  methods: {
    delPost(id) {
      const url = "http://localhost:3000/posts/" + id;
      axios
        .delete(url)
        .then(() => (this.posts = this.posts.filter(post => post._id !== id)))
        .catch(err => console.log(err));
    },
    selPost(id) {
      this.selectedPost = this.posts.filter(post => post._id === id)[0];
    }
  },
  created() {
    axios
      .get("http://localhost:3000/")
      .then(res => (this.posts = [...res.data].reverse()))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.container {
  margin-top: 45px;
}

.row-height{
  height: 100vh;
}

.left{
  height: 100%;
  overflow-y: scroll;
}

.right{
  height: 100%;
  overflow-y: scroll;
}
</style>>


