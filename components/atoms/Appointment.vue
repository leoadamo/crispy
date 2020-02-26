<template>
  <div class="appointment">
    <h4 class="title title--tp4">
      {{ data.title }}
    </h4>
    <p
      class="description description--tp2"
    >
      {{ data.description }}
    </p>
    <h3
      class="description description--tp3"
    >
      {{ data.contact }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Appointment',
  props: ['data']
}
</script>

<style></style>
