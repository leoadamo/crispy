<template>
  <div>
    <Hero />
    <About />
    <WhatWeDo />
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
  }
}
</script>

<style></style>
