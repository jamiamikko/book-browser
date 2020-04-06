<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper" @click="closeModal">
        <div class="modal__container" @click.stop>
          <button class="modal__close-button" @click="closeModal" v-focus>
            <close-icon></close-icon>
            <span class="modal__close-label">Close modal</span>
          </button>
          <div class="modal__image-wrapper" v-lazyload>
            <img
              class="modal__image"
              alt=""
              v-bind:data-src="data.covers.large"
            />
          </div>
          <div class="modal__information-wrapper">
            <h2 class="modal__title">
              {{ data.title }} -
              <span v-if="data.year">
                {{ data.year }}
              </span>
              <span v-else>
                Year unknown
              </span>
            </h2>
            <p class="modal__authors">{{ data.authors | joinList }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import store from '../../store/store';
import joinList from '../../filters/joinList';
import lazyload from '../../directives/lazyload';
import focus from '../../directives/focus';
import CloseIcon from 'vue-material-design-icons/Close';

export default {
  name: 'BookModal',
  store,
  directives: {
    lazyload,
    focus,
  },
  filters: {
    joinList,
  },
  props: {
    data: Object,
  },
  components: {
    'close-icon': CloseIcon,
  },
  mounted() {
    document.body.classList.add('modal-open');
  },
  destroyed() {
    document.body.classList.remove('modal-open');
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
@import '../../assets/scss/_placeholders.scss';

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
    transition: all 0.3s ease;
    box-shadow: 0 0.25rem 0.75rem $gray-4;
    max-height: calc(100vh - 2rem);
  }

  &__image {
    max-height: 30rem;
  }

  &__image-wrapper {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  &__information-wrapper {
    padding: 1rem 0.5rem;
    margin: 0 1rem 1rem 1rem;
  }

  &__title {
    margin: 0 0 0.75rem;
    font-size: 1.4rem;
  }

  &__authors {
    font-size: 1rem;
  }

  &__close-button {
    border: none;
    background: none;
    padding: 0;
    font-size: 1.75rem;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;
    color: $gray-6;

    &:hover,
    &:focus {
      color: $blue;
    }
  }

  &__close-label {
    @extend %visually-hidden;
  }
}
</style>
