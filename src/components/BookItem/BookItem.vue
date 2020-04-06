<template>
  <div class="book">
    <div class="book__cover-wrapper" @click="openModal" v-lazyload>
      <img alt="" class="book__cover" v-bind:data-src="covers.thumbnail" />
    </div>
    <div class="book__info-wrapper" tabindex="0">
      <p class="book__title">{{ title }}</p>
      <p class="book__authors">
        {{ authors | joinList }}
      </p>
      <p class="book__year">
        <span v-if="year">
          {{ year }}
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
import joinList from '../../filters/joinList';
import lazyload from '../../directives/lazyload';

export default {
  name: 'BookItem',
  store,
  directives: {
    lazyload,
  },
  filters: {
    joinList,
  },
  props: {
    title: String,
    authors: Array,
    covers: Object,
    year: Number,
  },
  methods: {
    openModal() {
      const payload = {
        title: this.title,
        authors: this.authors,
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
@import '../../assets/scss/_mixins.scss';

.book {
  display: flex;
  min-height: 4rem;
  box-shadow: 0 0.25rem 0.75rem $gray;
  margin: 0 auto 1rem auto;
  padding: 2rem 1rem;
  width: 90%;

  @include media-min($tablet-bp) {
    width: 50%;
  }

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
    color: $black;
  }

  &__authors {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    color: $black;
  }
  &__year {
    font-size: 0.75rem;
    color: $black;
  }
}
</style>
