<template>
  <div>
    <nuxt-link :style="textStyle" :to="path">
      <span>{{ text }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    path: {
        type: String,
        default: 'http://178.151.201.167:49201/authentication/register'
    },
    fontSize: {
      type: Number,
      default: 15,
    },
    height: {
      type: Number,
    }
  },
  setup(props) {
    const textStyle = computed(() => {
      return {
        'font-size': props.fontSize + 'px',
        'height': props.height + 'px'
      }
    })
    return {
      textStyle,
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
  color: #FFFFFF;
  line-height: 160%;
  transition: background-color 0.4s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;


  @media(min-width: $md2) {
    &:hover {
      background-color: #1da19d;
      cursor: pointer;
    }
  }
}
</style>