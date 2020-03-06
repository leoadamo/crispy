<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.id"
      class="post"
      :class="
        post.changeContent &&
          'post--image-bigger'
      "
    >
      <article
        class="post__content"
        :class="
          post.changeContent &&
            'post__content--right'
        "
      >
        <time
          class="title title--tp6"
          :datetime="post.date"
        >
          {{ formatDate(post.date) }}
        </time>

        <h2
          class="subtitle subtitle--tp2"
        >
          {{ post.title }}
        </h2>

        <p
          class="description description--tp2"
        >
          {{ post.text }}
        </p>

        <n-link
          :to="post.route"
          class="btn btn--secondary"
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
