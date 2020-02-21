<template>
  <div>
    <Hero />
    <About :data="about" />
    <WhatWeDo :data="whatWeDo" />
  </div>
</template>

<script>
import Hero from '@/components/molecules/Hero'
import About from '@/components/organisms/About'
import WhatWeDo from '@/components/organisms/WhatWeDo'
import { get } from '@/mixins'

export default {
  components: {
    Hero,
    About,
    WhatWeDo
  },
  async asyncData(context) {
    const about = await get(
      context,
      '/about-us'
    )

    const whatWeDo = await get(
      context,
      '/what-we-do'
    )

    return {
      about,
      whatWeDo
    }
  },
  data() {
    return {
      about: [],
      whatWeDo: []
    }
  }
}
</script>

<style></style>
