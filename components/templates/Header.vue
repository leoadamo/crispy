<template>
  <header class="header">
    <div class="container">
      <div
        class="header__wrapper"
      >
        <Logo />
        <Navigation />
        <Hamburguer />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/atoms/Logo'
import Navigation from '@/components/molecules/Navigation'
import Hamburguer from '@/components/atoms/Hamburguer'

export default {
  name: 'Header',
  components: {
    Logo,
    Navigation,
    Hamburguer
  }
}
</script>

<style></style>
