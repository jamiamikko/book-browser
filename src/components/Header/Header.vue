<template>
  <header class="header">
    <div class="header__title-wrapper">
      <h1 class="header__title">Book Browser</h1>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  components: {},
};
</script>
<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_mixins.scss';

.header {
  display: flex;
  align-items: center;
  background-color: $gray-6;
  height: 4rem;
  padding: 0.5rem 1rem;

  &__title {
    font-size: 1.5rem;
    color: $white;

    @include media-min($mobile-bp) {
      font-size: 1.875rem;
    }
  }

  &__title-wrapper {
    min-width: 30%;
  }
}
</style>
