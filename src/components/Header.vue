<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">DAILY JOURNAL</a>
        <div class="collapse navbar-collapse">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">HOME <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="/compose">COMPOSE</a>
                <a class="nav-item nav-link" href="/about">ABOUT</a>
                </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
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
</style>