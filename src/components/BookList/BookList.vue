<template>
  <section class="book-list">
    <div class="book-list__introduction">
      <h2>Hi there!</h2>
      <p>Welcome to Book Browser!</p>
      <p>
        Start searching for interesting books by typing in the search bar.
      </p>
    </div>
    <SearchBar />
    <div class="book-list__wrapper">
      <p v-if="this.loading">Loading...</p>
      <div v-if="books.length && !this.loading">
        <Book
          v-for="book in books"
          v-bind:key="book.key"
          v-bind:title="book.title"
          v-bind:authors="book.authors"
          v-bind:covers="book.covers"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SearchBar from '../SearchBar/SearchBar';
import Book from '../Book/Book';

import store from '../../store/store';

export default {
  name: 'BookList',
  store,
  props: {
    books: Array,
  },
  components: {
    SearchBar,
    Book,
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
  padding: 2rem 1rem;
  border-bottom: 2px solid $gray-3;

  &__wrapper {
    width: 80%;
    margin: 0 auto;
    max-width: 75rem;
  }

  &__introduction {
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>
