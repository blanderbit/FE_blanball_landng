<template>
   <page404 v-if="errorStatusCode === 404"/>
   <page502 v-else/>
</template>

<script>
import page404 from './components/page404.vue'
import page502 from './components/page502.vue'
export default {
  components: {
    'page404': page404,
    'page502': page502
  },
  setup() {
    const error = useError();
    const errorStatusCode = ref(error.value.statusCode)
    return {
      errorStatusCode
    }
  }
}
</script>

<style lang="scss" scoped>
</style>