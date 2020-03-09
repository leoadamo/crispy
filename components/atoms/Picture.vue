<template>
  <picture>
    <img
      :src="image.path"
      class="picture"
      :alt="image.alt"
    />
  </picture>
</template>

<script>
export default {
  name: 'Picture',
  props: ['image']
}
</script>

<style></style>
