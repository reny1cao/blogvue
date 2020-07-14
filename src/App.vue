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
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
::-webkit-scrollbar {
    display: none;
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
code {
  background-color: tan;
}
*:focus {
  outline: none;
}
body {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23a9a9a9' fill-opacity='0.16'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
}
</style>
