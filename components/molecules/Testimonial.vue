<template>
  <ul class="testimonials__wrapper">
    <li
      v-for="testimonial in cites"
      :key="testimonial.id"
      class="testimonial"
    >
      <blockquote
        class="testimonial__quote"
      >
        <div class="testimonial__inner">
          <font-awesome-icon
            :icon="[
              'fas',
              'quote-right'
            ]"
          />
          <p class="testimonial__cite">
            {{ testimonial.cite }}
          </p>
        </div>
        <font-awesome-icon
          :icon="['fas', 'ellipsis-h']"
          class="testimonial__icon"
        />
        <footer
          class="testimonial__footer"
        >
          <picture>
            <img
              :src="testimonial.avatar"
              :alt="
                `Testimonial of people ${testimonial.id}.`
              "
              class="testimonial__avatar"
            />
          </picture>

          <div
            class="testimonial__info"
          >
            <h5
              class="title title--tp5"
            >
              {{ testimonial.author }}
            </h5>

            <time
              :datetime="
                testimonial.date
              "
              class="description description--tp4"
              v-text="
                `- ${formatDate(
                  testimonial.date
                )}`
              "
            >
            </time>
          </div>
        </footer>
      </blockquote>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Testimonial',
  props: ['cites'],
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
