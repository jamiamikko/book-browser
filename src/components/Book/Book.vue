<template>
  <div class="book">
    {{ this.title }}
  </div>
</template>
<script>
export default {
  name: 'Book',
  props: {
    title: String
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.book {
  width: 100%;
  min-height: 4rem;
  box-shadow: 0 0.25rem 0.75rem $gray-4;
  margin-bottom: 1rem;
  padding: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
