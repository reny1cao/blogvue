<template>
<div class="container">
    <h1>Home</h1>
    <div class="card-columns">
        <div v-bind:key="post.id" v-for="post in posts">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.post}}</p>
                <p class="card-text"><small class="text-muted">{{post.time}}</small></p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'BlogList',
    props: ['posts']
}
</script>

<style scoped>

</style>