<template>
  <nav
    class="navigation"
    :class="active"
  >
    <ul class="navigation__list">
      <li class="navigation__item">
        <n-link
          class="navigation__item__link"
          href="#"
          title="Return to home page"
          to="/"
        >
          Home
        </n-link>
      </li>
      <li class="navigation__item">
        <n-link
          class="navigation__item__link"
          href="#"
          title="Explore more about us"
          to="/about"
        >
          About Us
        </n-link>
      </li>
      <li class="navigation__item">
        <n-link
          class="navigation__item__link"
          href="#"
          title="Keep yourself informed about our services"
          to="/services"
        >
          Services
        </n-link>
      </li>
      <li class="navigation__item">
        <n-link
          class="navigation__item__link"
          href="#"
          title="Access our product's gallery"
          to="/gallery"
        >
          Gallery
        </n-link>
      </li>
      <li class="navigation__item">
        <n-link
          class="navigation__item__link"
          href="#"
          title="Access our blog"
          to="/blog"
        >
          Blog
        </n-link>
      </li>
      <li class="navigation__item">
        <n-link
          class="navigation__item__link"
          href="#"
          title="Contact Us"
          to="/contact"
        >
          Contact Us
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters(['menuActive']),
    active() {
      return (
        this.menuActive &&
        'navigation--active'
      )
    }
  }
}
</script>

<style></style>
