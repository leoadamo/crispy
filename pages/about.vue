<template>
  <div>
    <About :about="about" />
    <Appointment
      :appointment="appointment"
    />
  </div>
</template>

<script>
import About from '@/components/organisms/About'
import Appointment from '@/components/atoms/Appointment'

export default {
  components: {
    About,
    Appointment
  },
  async asyncData({ app }) {
    const about = await app.$get(
      '/about-us'
    )

    const appointment = await app.$get(
      '/appointment'
    )

    return {
      about,
      appointment
    }
  },
  data() {
    return {
      about: [],
      appointment: []
    }
  }
}
</script>

<style></style>
