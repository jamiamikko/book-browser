<template>
  <section class="book-list">
    <div class="book-list__wrapper">
      <div v-if="books.length">
        <Book
          v-for="book in books"
          v-bind:key="`${book.author_key[0]}-${book.key}`"
          v-bind:title="book.title_suggest"
        />
      </div>
      <div class="book-list__introduction" v-else>
        <h2>Hi there!</h2>
        <p>Welcome to Book Browser!</p>
        <p>
          Start searching for interesting books by typing in the search bar.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Book from '../Book/Book';

export default {
  name: 'BookList',
  props: {
    books: Array
  },
  components: {
    Book
  }
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
  }
}
</style>
