<template>
  <div id="app">
    <Header />
    <BlogList v-bind:posts="posts"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import BlogList from './components/BlogList.vue'

export default {
  name: 'App',
  components: {
    Header,
    BlogList
  },
  data() {
    return {
      posts:[
        {
          id: 1,
          title: 'my first post',
          time: '2020.7.1',
          post: 'This is my first post with vuejs'
        },
        {
          id: 2,
          title: 'my second post',
          time: '2020.7.2',
          post: 'This is my second post with vuejs'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
