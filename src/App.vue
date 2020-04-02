<template>
  <div id="app">
    <Header />
    <main>
      <BookList v-bind:books="this.results" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import Footer from './components/Footer/Footer';
import store from './store/store';

export default {
  name: 'App',
  store,
  components: {
    Header,
    BookList,
    Footer
  },
  computed: {
    results() {
      return this.$store.state.books;
    }
  },
  created() {
    // if (!this.$store.state.books.length) {
    //   store.dispatch('GET_BOOKS');
    // }
  }
};
</script>

<style lang="scss"></style>
