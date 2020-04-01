<template>
  <header class="header">
    <h1 class="header__title">Book Browser</h1>
    <SearchBar />
  </header>
</template>
<script>
import SearchBar from '../SearchBar/SearchBar';

export default {
  name: 'Header',
  components: {
    SearchBar
  }
};
</script>
<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';

.header {
  display: flex;
  align-items: center;

  height: 3rem;
  padding: 0.5rem 1rem;

  &__title {
    font-size: 1.875rem;
  }
}
</style>
