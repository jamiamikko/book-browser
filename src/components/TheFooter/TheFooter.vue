<template>
  <footer class="footer">
    <div class="footer__content-wrapper">
      <h3 class="footer__title">Book Browser</h3>
      <p class="footer__text">Mikko Jämiä 2020</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_mixins.scss';

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $white;

  &__content-wrapper {
    padding: 1rem 2rem;
    text-align: center;
  }

  &__title {
    font-size: 1rem;
    margin: 0 0 0.1rem;
  }

  &__text {
    font-size: 0.75rem;
  }
}
</style>
