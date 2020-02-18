<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__info">
        <h4 class="footer__title">
          <font-awesome-icon
            :icon="['fas', 'utensils']"
          />
          Crispy
        </h4>

        <p class="footer__description">
          Onec Consequat sapien ut
          cursus rhoncus. Nullam dui mi,
          vulputate ac metus semper quis
          luctus sed.
        </p>

        <h5 class="footer__subtitle">
          Trusted by
          <span
            class="footer__subtitle footer__subtitle--trusted"
          >
            500+ People
          </span>
        </h5>
      </div>

      <div class="footer__info">
        <h4 class="footer__title">
          Address Info
        </h4>
        <p class="footer__description">
          <span>
            <font-awesome-icon
              :icon="[
                'fas',
                'map-marker-alt'
              ]"
            />
          </span>
          64d canal street TT 3356
          Newyork, NY.
        </p>

        <p class="footer__description">
          <span>
            <font-awesome-icon
              :icon="[
                'fas',
                'phone-alt'
              ]"
            />
          </span>
          +1(12) 123 456 789
        </p>

        <p class="footer__description">
          <span>
            <font-awesome-icon
              :icon="[
                'fas',
                'envelope'
              ]"
            />
          </span>
          <a
            class="footer__link"
            href="#"
            title="Contact Us by e-mail"
          >
            info@example.com
          </a>
        </p>
      </div>

      <div class="footer__info">
        <h4 class="footer__title">
          Quick Links
        </h4>
        <ul>
          <li>
            <a
              class="footer__link"
              href="#"
            >
              Order Online
            </a>
          </li>
          <li>
            <a
              class="footer__link"
              href="#"
            >
              Healthy Crispy
            </a>
          </li>
          <li>
            <a
              class="footer__link"
              href="#"
            >
              Support Helpline
            </a>
          </li>
          <li>
            <a
              class="footer__link"
              href="#"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__info">
        <h4 class="footer__title">
          Subscribe Us
        </h4>

        <p class="footer__description">
          Subscribe to our newsletter
        </p>

        <form
          action="#"
          class="footer__newsletter"
        >
          <input
            id="email"
            class="footer__input"
            type="email"
            name="EMAIL"
            placeholder="Enter your email here"
          />
          <button
            class="btn btn--orange"
          >
            Subscribe
          </button>
        </form>

        <ul class="footer__social">
          <li class="footer__brand">
            <a
              class="footer__icon"
              href="#"
            >
              <font-awesome-icon
                :icon="[
                  'fab',
                  'facebook-f'
                ]"
              />
            </a>
          </li>

          <li class="footer__brand">
            <a
              class="footer__icon"
              href="#"
            >
              <font-awesome-icon
                :icon="[
                  'fab',
                  'twitter'
                ]"
              />
            </a>
          </li>

          <li class="footer__brand">
            <a
              class="footer__icon"
              href="#"
            >
              <font-awesome-icon
                :icon="[
                  'fab',
                  'dribbble'
                ]"
              />
            </a>
          </li>

          <li class="footer__brand">
            <a
              class="footer__icon"
              href="#"
            >
              <font-awesome-icon
                :icon="[
                  'fab',
                  'pinterest'
                ]"
              />
            </a>
          </li>

          <li class="footer__brand">
            <a
              class="footer__icon"
              href="#"
            >
              <font-awesome-icon
                :icon="[
                  'fab',
                  'google-plus-g'
                ]"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="footer__copy">
      © 2019 Crispy. All Rights Reserved
      | Design by W3 Layouts
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style></style>
