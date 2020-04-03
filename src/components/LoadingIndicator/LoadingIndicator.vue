<template>
  <div class="loading-indicator">
    <div class="loading-indicator__wheel"></div>
    <div class="loading-indicator__text-wrapper">
      <span class="loading-indicator__text">Please wait..</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  &__wheel {
    animation: spin 1s infinite linear;
    border: 2px solid rgba(44, 76, 255, 0.5);
    border-left: 4px solid $blue;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    margin-bottom: 0.6rem;
  }

  &__text {
    color: $blue;
    font-size: 0.8rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
