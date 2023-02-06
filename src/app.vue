<template>
  <div id="template">
      <NuxtPage/>
  </div>
</template>

<script>

export default {
  name: "App",
  created() {}
}
</script>

<style lang="scss">
@import "./assets/styles/base.scss";
* {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
}
</style>
