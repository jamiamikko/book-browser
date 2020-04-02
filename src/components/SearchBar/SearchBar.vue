<template>
  <div
    class="search-bar__wrapper"
    v-bind:class="{ 'search-bar__wrapper--results-found': hasResults }"
  >
    <div class="search-bar__container">
      <input
        class="search-bar__input"
        placeholder="Search by the title of the book"
        aria-placeholder="Search by the title of the book"
        type="text"
        v-model="filter"
        @change="searchByFilter"
      />
    </div>
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
        filter: new RegExp(/^[A-Za-z0-9 ]+$/),
      },
    };
  },
  computed: {
    hasResults() {
      return this.$store.state.books.length > 0;
    },
  },
  methods: {
    validString(string) {
      return this.validations.filter.test(string);
    },
    emptyString(string) {
      return string.length === 0;
    },
    searchByFilter() {
      if (this.emptyString(this.filter)) {
        store.dispatch('RESET_BOOKS');
      }

      if (this.validString(this.filter)) {
        const payload = {
          filter: this.filter,
        };
        store.dispatch('FETCH_BOOKS', payload);
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';

.search-bar {
  &__wrapper {
    padding-bottom: 0.5rem;

    &--results-found {
      box-shadow: 0 0.75rem 0.75rem rgba(182, 182, 182, 0.1);
    }
  }

  &__container {
    width: 30%;
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
