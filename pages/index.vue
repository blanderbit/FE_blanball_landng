<template>
   <Header/>
   <FirstMainBlock/>
   <SecondMainBlock/>
   <ThirdMainBlock/>
   <Footer/>
</template>

<script setup>
const title = ref('Blanball')
const description = ref('Blanball')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>