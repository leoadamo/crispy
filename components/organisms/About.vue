<template>
  <section class="about">
    <div class="container">
      <h2 class="title title--tp2">
        About Us
      </h2>

      <div class="about__wrapper">
        <div class="about__content">
          <h3 class="subtitle">
            Enjoy The Greatest Preasure
            In Our Hotel!
          </h3>

          <p
            class="description description--tp2"
          >
            Suspendisse id felis sed
            felis tincidunt finibus.
            Nulla sed justo tellus.
            Donec ut felis ante. Quisque
            ac sapien quis orci pulvinar
            finibus quis eu urna. onec
            consequat sapien ut leo
            cursus rhoncus. Nullam dui
            mi, vulputate ac metus
            semper Nullam dui mi.
            Vestibulum ipsum primis in
            faucibus orci luctus et
            ultrices posuere cubilia
            Curae; Curabitur quis.
          </p>

          <ul class="about__list">
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
            src="/images/about-image-1.jpg"
            class="about__image"
            alt="A picture of a nice recipient"
          />
        </picture>
      </div>

      <div class="about__wrapper">
        <div
          class="about__content about__content--right"
        >
          <h3 class="subtitle">
            A Tasty And Healthy Crispy
            That We Serve For You.
          </h3>

          <p
            class="description description--tp2"
          >
            Suspendisse id felis sed
            felis tincidunt finibus.
            Nulla sed in justo inter
            tellus. Donec ut felis ante.
            Quisque acin sapien quis
            orci pulvinar finibus quis
            urna. onec consequat sapien
            ut leo cursus rhoncus.
            Nullam dui mi, vulputate ac
            quis eu urna Quisque quis eu
            urna lorem elit. Quisque ac
            sapien quis orci pulvinar
            finibus quis eu urna Quisque
            Suspendisse id felis sed
            felis tincidunt finibus.
            Nulla sed justo tellus.
            Donec ut felis ante ipsum.
          </p>
        </div>

        <picture>
          <img
            src="/images/about-image-2.jpg"
            class="about__image"
            alt="A picture of a nice recipient"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style></style>
