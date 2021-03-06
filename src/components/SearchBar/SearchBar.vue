<template>
  <div
    class="search-bar__wrapper"
    v-bind:class="{ 'search-bar__wrapper--results-found': hasResults }"
  >
    <div class="search-bar__container">
      <label for="search" class="search-bar__label">Search</label>
      <input
        class="search-bar__input"
        placeholder="Search by the title of the book"
        aria-placeholder="Search by the title of the book"
        type="text"
        v-model="filter"
        id="search"
        @change="searchByFilter"
      />
      <button
        class="search-bar__button"
        v-bind:class="{ 'search-bar__button--disabled': !filter.length }"
        v-bind:disabled="!filter.length"
        @click="searchByFilter"
      >
        Search
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
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
        this.$store.dispatch('RESET_BOOKS');
      }

      if (this.validString(this.filter)) {
        const payload = {
          filter: this.filter,
        };

        this.$store.dispatch('FETCH_BOOKS', payload);
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_placeholders.scss';
@import '../../assets/scss/_mixins.scss';

.search-bar {
  &__wrapper {
    padding: 0 1rem 0.5rem 1rem;

    &--results-found {
      box-shadow: 0 0.75rem 0.75rem rgba(182, 182, 182, 0.1);
    }
  }

  &__container {
    display: flex;
    margin: 0 auto 2rem auto;
    width: 100%;
    flex-direction: column;

    @include media-min($mobile-bp) {
      flex-direction: row;
      width: 50%;
    }

    @include media-min($tablet-bp) {
      width: 30%;
    }
  }

  &__label {
    @extend %visually-hidden;
  }

  &__input {
    height: 2.5rem;
    width: 100%;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    color: $black;
    margin-bottom: 1rem;
    border: 1px solid $gray;

    @include media-min($mobile-bp) {
      height: 2rem;
      margin-right: 1rem;
      margin-bottom: 0;
    }

    &::placeholder {
      color: $grayDark;
    }
  }

  &__button {
    background-color: $blue;
    color: $white;
    height: 2.5rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;

    @include media-min($mobile-bp) {
      height: 2rem;
    }

    &:not(.search-bar__button--disabled) {
      &:hover,
      &:focus {
        background-color: $white;
        color: $blue;
        border: 1px solid $gray;
      }
    }

    &--disabled {
      background-color: $grayDark;
      cursor: auto;
    }
  }
}
</style>
