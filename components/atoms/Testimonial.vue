<template>
  <ul class="testimonials">
    <li
      v-for="testimonial in data"
      :key="testimonial.id"
      class="testimonial"
    >
      <blockquote
        class="testimonial__quote"
      >
        <font-awesome-icon
          :icon="['fas', 'quote-right']"
        >
        </font-awesome-icon>
        <p class="testimonial__cite">
          {{ testimonial.cite }}
        </p>
        <footer>
          <picture>
            <img
              :src="testimonial.avatar"
              :alt="
                `Testimonial of people ${testimonial.id}.`
              "
              class="testimonial__avatar"
            />
          </picture>

          <h5
            class="testimonial__author"
          >
            {{ testimonial.author }}
          </h5>

          <time
            :datetime="testimonial.date"
            class="testimonial__date"
            v-text="
              `- ${formatDate(
                testimonial.date
              )}`
            "
          >
          </time>
        </footer>
      </blockquote>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Testimonial',
  props: ['data'],
  methods: {
    formatDate(value) {
      const date = new Date(value)

      return date.toLocaleString(
        ['en-us'],
        {
          month: 'long',
          day: '2-digit',
          year: 'numeric'
        }
      )
    }
  }
}
</script>

<style></style>
