<template>
  <div class="hero">
    <Banner />
    <Intro />
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
  }
}
</script>

<style></style>
