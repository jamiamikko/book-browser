<template>
  <div class="search-bar__wrapper">
    <input
      class="search-bar__input"
      placeholder="Search by the title of the book"
      aria-placeholder="Search by the title of the book"
      type="text"
      v-model="filter"
      @change="searchByFilter"
    />
  </div>
</template>
<script>
import store from '../../store/store';

export default {
  name: 'SearchBar',
  store,
  data() {
    return {
      filter: '',
      validations: {
        filter: new RegExp(/^[A-Za-z0-9 ]+$/)
      }
    };
  },
  methods: {
    validString(string) {
      return this.validations.filter.test(string);
    },
    searchByFilter() {
      if (this.validString(this.filter)) {
        const payload = {
          filter: this.filter
        };
        store.dispatch('FETCH_BOOKS', payload);
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';

.search-bar {
  &__wrapper {
    width: 50%;
    margin: 0 auto 2rem auto;
  }

  &__input {
    height: 1.75rem;
    width: 100%;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    color: $black;
  }
}
</style>
