<template>
    <section class="info">
        <h1 class="info--heading">{{ $t("info.title") }}</h1>
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

    &--heading {
      font-size: $heading-font-size;
      text-transform: uppercase;
      margin: 0.5rem;
      width: 16rem;
      background: linear-gradient(45deg, transparent 20%, $barbar-red 0, $barbar-red 80%, transparent 0);
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