<template>
  <div>
    <Hero />
    <About />
    <WhatWeDo :services="services" />
  </div>
</template>

<script>
import Hero from '@/components/molecules/Hero'
import About from '@/components/organisms/About'
import WhatWeDo from '@/components/organisms/WhatWeDo'

export default {
  components: {
    Hero,
    About,
    WhatWeDo
  },
  async asyncData({ $axios, error }) {
    try {
      const services = await $axios.$get(
        '/services'
      )

      return {
        services
      }
    } catch (err) {
      error({
        statusCode: 404,
        message:
          'Oooops, something goes wrong!'
      })
    }
  },
  data() {
    return {
      services: []
    }
  }
}
</script>

<style></style>
