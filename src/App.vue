<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container">
        <a class="navbar-brand" href="#">BLOGVUE</a>
        <div class="collapse navbar-collapse">
            <div class="navbar-nav" id="nav">
                <router-link class="nav-item nav-link" to="/">HOME</router-link>
                <router-link class="nav-item nav-link" to="/compose">COMPOSE</router-link>
                <router-link class="nav-item nav-link" to="/about">ABOUT</router-link>
              </div>
        </div>
    </div>
  </nav>
    <router-view/>
  <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar {
  padding-top: 15px;
  padding-bottom: 15px;
  border: 0;
  border-radius: 0;
  margin-bottom: 0;
  font-size: 12px;
  letter-spacing: 5px;
}

.navbar-nav a:hover {
  color: #1abc9c !important;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
