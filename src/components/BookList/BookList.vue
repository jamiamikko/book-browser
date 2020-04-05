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
      <LoadingIndicator v-if="this.loading" />
      <div v-if="books.length && !this.loading">
        <BookItem
          v-for="(book, index) in books"
          v-bind:key="`${index}-${book.key}`"
          v-bind:title="book.title"
          v-bind:authors="book.authors"
          v-bind:covers="book.covers"
          v-bind:year="book.year"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SearchBar from '../SearchBar/SearchBar';
import store from '../../store/store';

const LoadingIndicator = () => import('../LoadingIndicator/LoadingIndicator');
const BookItem = () => import('../BookItem/BookItem');

export default {
  name: 'BookList',
  store,
  props: {
    books: Array,
  },
  components: {
    SearchBar,
    LoadingIndicator,
    BookItem,
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
    overflow-x: hidden;
    padding: 2rem 0;
  }

  &__introduction {
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
}
</style>
