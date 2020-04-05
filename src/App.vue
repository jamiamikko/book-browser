<template>
  <div id="app">
    <book-modal v-if="modalOpen" v-bind:data="modalData"></book-modal>
    <the-header></the-header>
    <main>
      <book-list v-bind:books="this.results"></book-list>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader/TheHeader';
import BookList from './components/BookList/BookList';
import TheFooter from './components/TheFooter/TheFooter';
import store from './store/store';

const BookModal = () => import('./components/BookModal/BookModal');

export default {
  name: 'App',
  store,
  components: {
    'the-header': TheHeader,
    'book-list': BookList,
    'the-footer': TheFooter,
    'book-modal': BookModal,
  },
  computed: {
    results() {
      return this.$store.state.books;
    },
    modalOpen() {
      return this.$store.state.modal.open;
    },
    modalData() {
      return this.$store.state.modal.data;
    },
  },
};
</script>
