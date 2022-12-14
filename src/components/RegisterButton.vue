<template>
  <button onclick="location.href='http://178.151.201.167:49201/authentication/register'">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String
  }
}

</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

button {
  background: #148783;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Inter';
  font-style: normal;
  padding: 8px 16px;
  font-size: 15px;
  margin-right: 20px;
  color: #FFFFFF;
  line-height: 160%;
  transition: background-color 0.4s ease 0s;

  ::before {
    content: "";
    display: inline-block;
    vertical-align: top;
  }

  @media(min-width: $md2) {
    &:hover {
      background-color: #1da19d;
      cursor: pointer;
    }
  }
}
</style>