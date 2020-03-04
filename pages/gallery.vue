<template>
  <div>
    <Appointment
      :appointment="appointment"
    />
  </div>
</template>

<script>
import Appointment from '@/components/atoms/Appointment'

export default {
  components: {
    Appointment
  },
  async asyncData({ app }) {
    const appointment = await app.$get(
      '/appointment'
    )

    return {
      appointment
    }
  },
  data() {
    return {
      appointment: []
    }
  }
}
</script>

<style></style>
