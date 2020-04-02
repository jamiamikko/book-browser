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

.header {
  display: flex;
  align-items: center;
  background-color: $gray-6;
  height: 3rem;
  padding: 0.5rem 1rem;

  &__title {
    font-size: 1.875rem;
    color: $white;
  }

  &__title-wrapper {
    min-width: 30%;
  }
}
</style>
