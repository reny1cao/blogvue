<template>
  <div>
    <div class="footer">
      <p>Renyi built with ⼼</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  position: fixed;
  display: table;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #42b983;
}

.footer p {
  font-size: 14px;
  color: #fff;
  display: table-cell;
  vertical-align: middle;
}
</style>