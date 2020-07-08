<template>
  <div id="app">
    <BlogList v-bind:posts="posts" v-on:del-post="delPost"/>
  </div>
</template>

<script>
import BlogList from '../components/BlogList.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    BlogList
  },
  data() {
    return {
      posts:[]
    }
  },
  methods: {
    delPost(id) {
      const url = 'http://localhost:3000/posts/' + id;
      axios.delete(url)
        .then(() => this.posts = this.posts.filter(post => post._id !== id))
        .catch(err => console.log(err));
    },
  },
  created() {
    axios.get('http://localhost:3000/')
      .then(res => this.posts = [...res.data].reverse())
      .catch(err => console.log(err));
  }
}
</script>

<style>
</style>

