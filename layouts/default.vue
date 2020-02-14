<template>
  <div>
    <Header />
    <main class="wrapper">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/templates/Header'

export default {
  components: {
    Header
  }
}
</script>

<style></style>
