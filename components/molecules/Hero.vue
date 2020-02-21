<template>
  <div class="hero">
    <Banner />
    <Intro :content="data" />
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
  props: ['data']
}
</script>

<style></style>
