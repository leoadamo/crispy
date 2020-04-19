<template>
  <section
    v-if="news"
    class="news"
  >
    <h2 class="title title--tp2">
      {{ news.title }}
    </h2>
    <div class="container">
      <Post :posts="news.posts" />
    </div>
  </section>
</template>

<script>
import Post from '@/components/molecules/Post'

export default {
  name: 'News',
  components: {
    Post
  },
  props: ['news']
}
</script>

<style></style>
