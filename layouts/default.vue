<template>
  <div class="content">
    <Header />
    <main class="wrapper">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style></style>
