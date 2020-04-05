<template>
  <div id="app">
    <BookModal v-if="modalOpen" v-bind:data="modalData" />
    <HeaderBlock />
    <main>
      <BookList v-bind:books="this.results" />
    </main>
    <FooterBlock />
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
    HeaderBlock,
    BookList,
    FooterBlock,
    BookModal,
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
