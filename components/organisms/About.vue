<template>
  <section
    v-if="about"
    class="about"
  >
    <div class="container">
      <h2 class="title title--tp2">
        {{ about.title }}
      </h2>

      <div
        v-for="feature in about.features"
        :key="feature.id"
        class="about__wrapper"
      >
        <Feature :feature="feature" />
        <Picture
          :image="feature.image"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Picture from '@/components/atoms/Picture'
import Feature from '@/components/molecules/Feature'

export default {
  name: 'About',
  components: {
    Feature,
    Picture
  },
  props: ['about']
}
</script>

<style></style>
