<template>
  <div class="book">
    <div class="book__cover-wrapper" @click="openModal">
      <img class="book__cover" v-bind:src="this.covers.thumbnail" />
    </div>
    <div class="book__info-wrapper">
      <p class="book__title">{{ this.title }}</p>
      <p class="book__authors">
        <span v-if="authors">
          {{ authorsToString }}
        </span>
        <span v-else>
          Author unknown
        </span>
      </p>
      <p class="book__year">
        <span v-if="year">
          {{ this.year }}
        </span>
        <span v-else>
          Year unknown
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import store from '../../store/store';

export default {
  name: 'Book',
  store,
  props: {
    title: String,
    authors: Array,
    covers: Object,
    year: Number,
  },
  computed: {
    authorsToString() {
      return this.authors.join(', ');
    },
  },
  methods: {
    openModal() {
      const payload = {
        title: this.title,
        authors: this.authorsToString,
        covers: this.covers,
        year: this.year,
      };

      this.$store.dispatch('OPEN_MODAL', payload);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.book {
  display: flex;
  min-height: 4rem;
  box-shadow: 0 0.25rem 0.75rem $gray-4;
  margin: 0 auto 1rem auto;
  padding: 2rem 1rem;
  width: 50%;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__cover-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  &__info-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  &__title {
    font-weight: bold;
  }

  &__authors {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
  &__year {
    font-size: 0.75rem;
  }
}
</style>
