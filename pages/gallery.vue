<template>
  <div>
    <Appointment :data="appointment" />
  </div>
</template>

<script>
import Appointment from '@/components/atoms/Appointment'
import { get } from '@/mixins'

export default {
  components: {
    Appointment
  },
  async asyncData(context) {
    const appointment = await get(
      context,
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
