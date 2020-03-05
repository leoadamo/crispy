<template>
  <section v-if="about" class="about">
    <div class="container">
      <h2 class="title title--tp2">
        {{ about.title }}
      </h2>

      <div
        v-for="feature in about.features"
        :key="feature.id"
        class="about__wrapper"
      >
        <article
          class="about__content"
          :class="
            feature.changeOrder &&
              'about__content--right'
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
            class="about__list"
          >
            <li
              v-for="icon in feature.icons"
              :key="icon.id"
              class="about__item"
            >
              <div class="about__inner">
                <div
                  class="about__circle"
                >
                  <span
                    class="about__icon"
                  >
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

        <picture>
          <img
            :src="feature.image.path"
            class="about__image"
            :alt="feature.image.alt"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  props: ['about']
}
</script>

<style></style>
