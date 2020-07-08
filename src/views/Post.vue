<template>
  <div class="container">
    <h2>{{title}}</h2>
    <small class="text-muted">{{time}}</small>
    <p>{{post}}</p>
  </div>
</template>

<script>
export default {
    name: "Post",
    props: ['title', 'post', 'time'],
    computed: {

    }
}
</script>

<style scoped>
    .container {
        margin-top: 45px;
    }
</style>