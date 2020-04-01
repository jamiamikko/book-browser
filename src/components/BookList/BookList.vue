<template>
  <section class="book-list">
    <div class="book-list__wrapper">
      <Book
        v-for="book in books"
        v-bind:key="book.cover_i"
        v-bind:title="book.title_suggest"
      />
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
.book-list {
  border-bottom: 1px solid black;
  padding: 2rem 1rem;

  &__wrapper {
    width: 80%;
    margin: 0 auto;
    max-width: 75rem;
  }
}
</style>
