<template>
  <div>
    <Hero :hero="hero" />
    <About :about="about" />
    <WhatWeDo :wwd="whatWeDo" />
    <Testimonials
      :testimonials="testimonials"
    />
    <News :news="news" />
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
import News from '@/components/organisms/News'

export default {
  components: {
    Hero,
    About,
    WhatWeDo,
    Appointment,
    Testimonials,
    News
  },
  async asyncData({ app }) {
    const hero = await app.$get('/hero')

    const about = await app.$get(
      '/about-us'
    )

    const whatWeDo = await app.$get(
      '/what-we-do'
    )

    const testimonials = await app.$get(
      '/testimonials'
    )

    const appointment = await app.$get(
      '/appointment'
    )

    const news = await app.$get('/news')

    return {
      hero,
      about,
      whatWeDo,
      testimonials,
      appointment,
      news
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
