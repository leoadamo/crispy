<template>
  <section
    v-if="testimonials"
    class="testimonials"
  >
    <Testimonial :data="testimonials" />
  </section>
</template>

<script>
import Testimonial from '@/components/atoms/Testimonial'

export default {
  name: 'Testimonials',
  components: {
    Testimonial
  },
  props: ['testimonials']
}
</script>

<style></style>
