<template>
  <div
    v-if="appointment"
    class="appointment"
  >
    <h4 class="title title--tp4">
      {{ appointment.title }}
    </h4>
    <p
      class="description description--tp2"
    >
      {{ appointment.description }}
    </p>
    <h3
      class="description description--tp3"
    >
      {{ appointment.contact }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Appointment',
  props: ['appointment']
}
</script>

<style></style>
