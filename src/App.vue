<template>
  <div id="app">
    <book-modal v-if="modalOpen" v-bind:data="modalData"></book-modal>
    <header-block></header-block>
    <main>
      <book-list v-bind:books="this.results"></book-list>
    </main>
    <footer-block></footer-block>
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import BookList from './components/BookList/BookList';
import FooterBlock from './components/FooterBlock/FooterBlock';
import store from './store/store';

const BookModal = () => import('./components/BookModal/BookModal');

export default {
  name: 'App',
  store,
  components: {
    'header-block': HeaderBlock,
    'book-list': BookList,
    'footer-block': FooterBlock,
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
