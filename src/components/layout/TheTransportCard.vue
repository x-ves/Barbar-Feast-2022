<template>
    <base-card class="card">
        <div class="card--text">
            <slot name="img"></slot>
            <base-title><slot name="title"></slot></base-title>
            <p><slot name="desc"></slot></p>
        </div>
    </base-card>
</template>

<style lang="scss" scoped>
  .card {
    padding: 0.5rem;
    &--text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
        min-width: 18rem;
        width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    .card {
        width: 45%;
    }
  }

  @media only screen and (min-width: 1024px) {
      .card {
          width: 30%;
      }
  }
</style>