<template>
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
      <button class="btn btn--primary">
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
            :icon="['fab', 'twitter']"
          />
        </a>
      </li>

      <li class="footer__brand">
        <a
          class="footer__icon"
          href="#"
        >
          <font-awesome-icon
            :icon="['fab', 'dribbble']"
          />
        </a>
      </li>

      <li class="footer__brand">
        <a
          class="footer__icon"
          href="#"
        >
          <font-awesome-icon
            :icon="['fab', 'pinterest']"
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
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>

<style></style>
