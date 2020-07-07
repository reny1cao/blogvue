<template>
  <div class="container">
    <form @submit="addPost">
      <div class="form-group">
        <label for="formGroupTitleInput">Title</label>
        <input type="text" class="form-control" v-model="title"/>
      </div>
      <div class="form-group">
        <label for="formGroupPostInput">Post</label>
        <textarea class="form-control" v-model="content" cols="30" rows="10"></textarea>
      </div>
      <button type="submit" class="btn btn-light shadow-sm rounded">Publish</button>
    </form>
    <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
      Successfully Published !
    </div>   -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Compose",
  data() {
    return {
      title: "",
      content: ""
    }
  },
  methods: {
    addPost() {
      axios.post("http://localhost:3000/compose", {title:this.title, content:this.content})
      .then(() => {
        this.title = "";
        this.content = "";
      })
      .catch((err) => console.log(err));
    }
  }
};
</script>

<style scoped>
  .container {
    margin-top: 45px;
  }
</style>