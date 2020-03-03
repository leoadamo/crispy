<template>
  <div v-if="hero" class="hero">
    <Banner />
    <Intro :content="hero" />
  </div>
</template>

<script>
import Intro from '@/components/atoms/Intro'
import Banner from '@/components/atoms/Banner'

export default {
  name: 'Hero',
  components: {
    Banner,
    Intro
  },
  props: ['hero']
}
</script>

<style></style>
