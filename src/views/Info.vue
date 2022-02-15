<template>
    <section class="info">
        <h1 class="title">{{ $t("info.title") }}</h1>
        <section class="info--content">
        <the-map></the-map>
        </section>
    </section>
</template>


<style lang="scss" scoped>
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    width: 100%;

    .title {
      width: 16rem;
    }

    &--content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }


@media only screen and (min-width: 768px) {}


@media only screen and (min-width: 1024px) {
  .info {
    &--content {
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-evenly;
    }
  }
}
</style>