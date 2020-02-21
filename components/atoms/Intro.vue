<template>
  <div class="hero__inner">
    <h1 class="title">
      {{ content.title }}
      <br />
      <strong
        class="title title--strong"
      >
        {{ content.highlighted }}
      </strong>
    </h1>
    <p
      class="hero__inner__intro description"
    >
      {{ content.intro }}
    </p>

    <div class="btn-wrapper">
      <n-link
        v-for="button in content.buttons"
        :key="button.name"
        class="btn"
        :class="
          button.type === 'primary'
            ? 'btn--primary'
            : 'btn--secondary'
        "
        :to="button.path"
      >
        {{ button.inner }}
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: ['content']
}
</script>

<style></style>
