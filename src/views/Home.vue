<template>
  <div id="app">
    <BlogList v-bind:posts="posts"/>
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
  created() {
    axios.get('http://localhost:3000/')
      .then(res => this.posts = [...res.data])
      .catch(err => console.log(err));
  }
}
</script>

<style>

</style>

