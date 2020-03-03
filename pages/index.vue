<template>
  <div>
    <Hero :hero="hero" />
    <About :about="about" />
    <WhatWeDo :wwd="whatWeDo" />
    <Testimonials
      :testimonials="testimonials"
    />
    <Appointment
      :appointment="appointment"
    />
  </div>
</template>

<script>
import Appointment from '@/components/atoms/Appointment'
import Hero from '@/components/molecules/Hero'
import About from '@/components/organisms/About'
import WhatWeDo from '@/components/organisms/WhatWeDo'
import Testimonials from '@/components/organisms/Testimonials'
import { get } from '@/mixins'

export default {
  components: {
    Hero,
    About,
    WhatWeDo,
    Appointment,
    Testimonials
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

    const testimonials = await get(
      context,
      '/testimonials'
    )

    const appointment = await get(
      context,
      '/appointment'
    )

    return {
      hero,
      about,
      whatWeDo,
      testimonials,
      appointment
    }
  },
  data() {
    return {
      hero: [],
      about: [],
      whatWeDo: [],
      testimonials: [],
      appointment: []
    }
  }
}
</script>

<style></style>
