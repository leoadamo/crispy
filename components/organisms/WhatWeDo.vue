<template>
  <section
    v-if="wwd"
    class="what-we-do"
  >
    <div class="container">
      <h2 class="title title--tp2">
        {{ wwd.title }}
      </h2>

      <ul class="what-we-do__cards">
        <li
          v-for="service in wwd.services"
          :key="service.id"
          class="what-we-do__service"
        >
          <h3 class="title title--tp3">
            {{ service.title }}
          </h3>

          <p
            class="description description--tp2"
          >
            {{ service.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhatWeDo',
  props: ['wwd']
}
</script>

<style></style>
