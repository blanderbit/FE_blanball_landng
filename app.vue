<template>
  <div id="template">
      <NuxtPage/>
  </div>
</template>

<script>

export default {
  name: "App",
  created() {},
  setup() {
    const route = useRoute()
    const { code } = route.query

    if (code) {
      const type = "text/plain";
      const blob = new Blob([code], { type });
      const data = [new ClipboardItem({ [type]: blob })];

      navigator.clipboard.write(data).then(
        () => {
          window.close()
        }
      );
    }

    return {}
  }
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
