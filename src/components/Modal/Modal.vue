<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper" @click="closeModal">
        <div class="modal__container" @click.stop>
          <div class="modal__image-wrapper">
            <img v-bind:src="this.data.covers.large" />
          </div>
          <div class="modal__information-wrapper">
            <h2 class="modal__title">{{ data.title }} - {{ data.year }}</h2>
            <p class="modal__authors">{{ data.authors }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import store from '../../store/store';

export default {
  name: 'Modal',
  store,
  props: {
    data: Object,
  },
  methods: {
    closeModal() {
      this.$store.dispatch('CLOSE_MODAL');
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.modal {
  &__mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: opacity 0.3s ease;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__container {
    background-color: $white;
    margin: 0 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
    max-width: 20rem;
    box-shadow: 0 0.25rem 0.75rem $gray-4;
  }

  &__image-wrapper {
    display: flex;
    justify-content: center;
  }

  &__information-wrapper {
    padding: 1rem 0.5rem;
  }

  &__title {
    margin: 0 0 0.75rem;
    font-size: 1.4rem;
  }

  &__authors {
    font-size: 1rem;
  }
}
</style>
