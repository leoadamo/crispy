<template>
  <section class="about">
    <div class="container">
      <h2 class="title title--tp2">
        {{ data.title }}
      </h2>

      <div
        v-for="feature in data.features"
        :key="feature.id"
        class="about__wrapper"
      >
        <div
          class="about__content"
          :class="
            feature.content === 'right'
              ? 'about__content--right'
              : ''
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
            <li class="about__item">
              <div class="about__inner">
                <div
                  class="about__circle"
                >
                  <span
                    class="about__icon"
                  >
                    <font-awesome-icon
                      :icon="[
                        'fas',
                        'birthday-cake'
                      ]"
                    />
                  </span>
                </div>
                Healthy
              </div>
            </li>

            <li class="about__item">
              <div class="about__inner">
                <div
                  class="about__circle"
                >
                  <span
                    class="about__icon"
                  >
                    <font-awesome-icon
                      :icon="[
                        'fas',
                        'rocket'
                      ]"
                    />
                  </span>
                </div>
                Spicy &amp; Hot
              </div>
            </li>

            <li class="about__item">
              <div class="about__inner">
                <div
                  class="about__circle"
                >
                  <span
                    class="about__icon"
                  >
                    <font-awesome-icon
                      :icon="[
                        'fas',
                        'utensils'
                      ]"
                    />
                  </span>
                </div>
                Crunchy
              </div>
            </li>

            <li class="about__item">
              <div class="about__inner">
                <div
                  class="about__circle"
                >
                  <span
                    class="about__icon"
                  >
                    <font-awesome-icon
                      :icon="[
                        'fas',
                        'coffee'
                      ]"
                    />
                  </span>
                </div>
                Reciepe
              </div>
            </li>
          </ul>
        </div>

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
  props: ['data']
}
</script>

<style></style>
