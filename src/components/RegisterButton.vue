<template>
    <nuxt-link :to="path">
      <span>{{ text }}</span>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    text: String,
    path: {
        type: String,
        default: 'http://178.151.201.167:49201/authentication/register'
      }
  }
}

</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

a {
  background: #148783;
  border-radius: 8px;
  font-weight: 600;
  padding: 10px 16px;
  font-size: 15px;
  color: #FFFFFF;
  line-height: 160%;
  transition: background-color 0.4s ease 0s;
  text-align: center;
  text-justify: center;


  @media(min-width: $md2) {
    &:hover {
      background-color: #1da19d;
      cursor: pointer;
    }
  }
}
</style>