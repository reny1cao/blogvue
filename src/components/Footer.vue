<template>
<div>
    <div class="space"></div>
    <footer class="footer fixed-bottom">
      <p>Renyi built with ⼼</p>
    </footer>
    </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  display: table;
  text-align: center;
  width: 100%;
  height: 60px;
  background-image: linear-gradient(to right, #1D976C, #93F9B9);
}

.footer p {
  font-size: 14px;
  color: #fff;
  display: table-cell;
  vertical-align: middle;
}

.space {
    margin-top: 100px;
}
</style>