<template>
  <section class="book-list">
    <div class="book-list__introduction">
      <h2 class="book-list__title">Hi there!</h2>
      <p class="book-list__text">Welcome to Book Browser!</p>
      <p class="book-list__text">
        Start searching for interesting books by typing in the search bar.
      </p>
    </div>
    <search-bar></search-bar>
    <div class="book-list__wrapper">
      <loading-indicator v-if="this.loading"></loading-indicator>
      <div v-if="books.length && !this.loading">
        <book-item
          v-for="(book, index) in books"
          v-bind:key="`${index}-${book.key}`"
          v-bind:title="book.title"
          v-bind:authors="book.authors"
          v-bind:covers="book.covers"
          v-bind:year="book.year"
        ></book-item>
      </div>
    </div>
  </section>
</template>

<script>
import SearchBar from '../SearchBar/SearchBar';

const LoadingIndicator = () => import('../LoadingIndicator/LoadingIndicator');
const BookItem = () => import('../BookItem/BookItem');

export default {
  name: 'BookList',
  components: {
    'search-bar': SearchBar,
    'loading-indicator': LoadingIndicator,
    'book-item': BookItem,
  },
  props: {
    books: Array,
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';

.book-list {
  padding: 2rem 0;

  &__wrapper {
    min-width: 100%;
    max-width: 75rem;
    max-height: 52.5rem;
    overflow-y: auto;
    padding: 2rem 0;
  }

  &__introduction {
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  &__title {
    color: $black;
  }

  &__text {
    color: $black;
  }
}
</style>
