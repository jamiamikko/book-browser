<template>
  <div id="app">
    <Modal v-if="modalOpen" v-bind:data="modalData" />
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

const Modal = () => import('./components/Modal/Modal');

export default {
  name: 'App',
  store,
  components: {
    Header,
    BookList,
    Footer,
    Modal,
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
