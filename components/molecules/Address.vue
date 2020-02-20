<template>
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
      64d canal street TT 3356 Newyork,
      NY.
    </p>

    <p class="footer__description">
      <span>
        <font-awesome-icon
          :icon="['fas', 'phone-alt']"
        />
      </span>
      +1(12) 123 456 789
    </p>

    <p class="footer__description">
      <span>
        <font-awesome-icon
          :icon="['fas', 'envelope']"
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
</template>

<script>
export default {
  name: 'Address'
}
</script>

<style></style>
