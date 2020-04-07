<template>
  <header class="header">
    <h1 class="header__title">Book Browser</h1>
  </header>
</template>
<script>
export default {
  name: 'TheHeader',
};
</script>
<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_mixins.scss';

.header {
  display: flex;
  align-items: center;
  background-color: $grayDark;
  height: 4rem;
  padding: 0.5rem 1rem;

  &__title {
    margin: 0;
    font-size: 1.5rem;
    color: $white;

    @include media-min($mobile-bp) {
      font-size: 1.875rem;
    }
  }
}
</style>
