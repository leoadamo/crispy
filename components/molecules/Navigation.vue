<template>
  <nav
    class="navigation"
    :class="active"
  >
    <ul class="navigation__list">
      <li
        v-for="link in menuLinks"
        :key="link.id"
        class="navigation__item"
      >
        <n-link
          class="navigation__item__link"
          :title="link.title"
          :to="link.path"
        >
          {{ link.name }}
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
    ...mapGetters([
      'menuActive',
      'menuLinks'
    ]),
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
