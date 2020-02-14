<template>
  <picture>
    <source
      srcset="/images/hero-banner-full.jpg"
      media="(min-width: 1110px)"
      type="image/jpg"
    />

    <source
      srcset="/images/hero-banner-tablet.jpg"
      media="(min-width: 768px)"
      type="image/jpg"
    />

    <img
      class="hero__image"
      src="/images/hero-banner-mobile.jpg"
      alt=""
    />
  </picture>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style></style>
