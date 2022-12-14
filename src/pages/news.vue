<template>
  <div class="b-header__news  _container">
    <HeaderMenu />
  </div>
  <FirstNewsBlock/>
  <!-- <Footer/> -->
</template>
 
<script setup>
</script>

<style lang="scss">
.b {
  &-header {
    &__news {
      background: #fff;
      box-shadow: 2px 2px 10px rgba(56, 56, 251, 0.1);
      border-radius: 0px 0px 12px 12px;
      padding-top: 25px;
      padding-bottom: 10px;
    }
  }
}
</style>