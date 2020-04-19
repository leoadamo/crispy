<template>
  <button
    class="hamburguer"
    :class="active"
    @click="TOGGLE_MENU"
  >
    <span class="hamburguer__bar"></span>
    <span class="hamburguer__bar"></span>
    <span class="hamburguer__bar"></span>
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Hamburguer',
  computed: {
    ...mapGetters(['menuActive']),
    active() {
      return this.menuActive && 'hamburguer--active'
    }
  },
  methods: {
    ...mapActions(['TOGGLE_MENU'])
  }
}
</script>

<style></style>
