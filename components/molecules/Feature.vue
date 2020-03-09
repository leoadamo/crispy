<template>
  <article
    class="feature"
    :class="
      feature.changeOrder &&
        'feature--right'
    "
  >
    <h3 class="subtitle">
      {{ feature.title }}
    </h3>

    <p
      class="description description--tp2"
    >
      {{ feature.description }}
    </p>

    <ul
      v-if="feature.hasIcons"
      class="feature__list"
    >
      <li
        v-for="icon in feature.icons"
        :key="icon.id"
        class="feature__item"
      >
        <div class="feature__inner">
          <div class="feature__circle">
            <span class="feature__icon">
              <font-awesome-icon
                :icon="[
                  icon.type,
                  icon.name
                ]"
              />
            </span>
          </div>
          {{ icon.description }}
        </div>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'Feature',
  props: ['feature']
}
</script>

<style></style>
