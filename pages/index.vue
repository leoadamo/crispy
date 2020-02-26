<template>
  <div>
    <Hero :data="hero" />
    <About :data="about" />
    <WhatWeDo :data="whatWeDo" />
    <Appointment :data="appointment" />
  </div>
</template>

<script>
import Appointment from '@/components/atoms/Appointment'
import Hero from '@/components/molecules/Hero'
import About from '@/components/organisms/About'
import WhatWeDo from '@/components/organisms/WhatWeDo'
import { get } from '@/mixins'

export default {
  components: {
    Hero,
    About,
    WhatWeDo,
    Appointment
  },
  async asyncData(context) {
    const hero = await get(
      context,
      '/hero'
    )

    const about = await get(
      context,
      '/about-us'
    )

    const whatWeDo = await get(
      context,
      '/what-we-do'
    )

    const appointment = await get(
      context,
      '/appointment'
    )

    return {
      hero,
      about,
      whatWeDo,
      appointment
    }
  },
  data() {
    return {
      hero: [],
      about: [],
      whatWeDo: [],
      appointment: []
    }
  }
}
</script>

<style></style>
