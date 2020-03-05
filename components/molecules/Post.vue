<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id"
      class="post"
    >
      <article class="post__content">
        <time :datetime="post.date">{{
          formatDate(post.date)
        }}</time>

        <h2 class="title title--tp3">
          {{ post.title }}
        </h2>

        <p class="post__text">
          {{ post.text }}
        </p>

        <n-link
          :to="post.route"
          class="post__view"
          :title="post.title"
        >
          {{ post.button }}
        </n-link>
      </article>

      <picture>
        <img
          :src="post.image.path"
          :alt="post.image.alt"
          class="post__image"
        />
      </picture>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Post',
  props: ['posts'],
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
