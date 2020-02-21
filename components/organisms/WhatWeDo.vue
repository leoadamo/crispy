<template>
  <section
    v-if="data"
    class="what-we-do"
  >
    <div class="container">
      <h2 class="title title--tp2">
        {{ data.title }}
      </h2>

      <ul class="what-we-do__cards">
        <li
          v-for="service in data.services"
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
  props: ['data']
}
</script>

<style></style>
