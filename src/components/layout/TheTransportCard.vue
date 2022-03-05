<template>
    <base-card class="card">
        <slot name="img"></slot>
        <div class="card--text">
            <base-title><slot name="title"></slot></base-title>
            <p><slot name="desc"></slot></p>
        </div>
    </base-card>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column-reverse;
    &--text {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
    }
    img {
        min-width: 18rem;
        width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    .card {
        flex-direction: column;
        width: 45%;
    }
  }

  @media only screen and (min-width: 1024px) {
      .card {
          width: 30%;
      }
  }
</style>