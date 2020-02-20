<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <Description />
      <Address />
      <QuickLinks />
      <Newsletter />
    </div>
    <Copy />
  </footer>
</template>

<script>
import Description from '@/components/molecules/Description'
import Address from '@/components/molecules/Address'
import QuickLinks from '@/components/molecules/QuickLinks'
import Newsletter from '@/components/molecules/Newsletter'
import Copy from '@/components/molecules/Copy'

export default {
  name: 'Footer',
  components: {
    Description,
    Address,
    QuickLinks,
    Newsletter,
    Copy
  }
}
</script>

<style></style>
