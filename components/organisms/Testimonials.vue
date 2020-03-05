<template>
  <section
    v-if="testimonials"
    class="testimonials"
  >
    <h2 class="title title--tp2">
      {{ testimonials.title }}
    </h2>
    <div class="container">
      <Testimonial
        :cites="testimonials.cites"
      />
    </div>
  </section>
</template>

<script>
import Testimonial from '@/components/molecules/Testimonial'

export default {
  name: 'Testimonials',
  components: {
    Testimonial
  },
  props: ['testimonials']
}
</script>

<style></style>
