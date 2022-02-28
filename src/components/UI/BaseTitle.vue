<template>
    <div class="title">
        <span class="title--bg-left"></span>
        <h1 class="title--text"><slot></slot></h1>
        <span class="title--bg-right"></span>
    </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &--text {
  color: $main-text-color;
  margin: 1rem 0;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  background: $barbar-red;
  min-width: 14rem;
  width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .title {
    &--text {
      width: 40rem;
    }

    &--bg-left {
      display: inline-block;
      border-top: 1.32rem solid transparent;
      border-bottom: 1.32rem solid $barbar-red;
      border-left: 1.32rem solid transparent;
      border-right: 1.32rem solid $barbar-red;
    }

    &--bg-right {
  /*     background: $barbar-red; */
      display: inline-block;
      border-top: 1.32rem solid $barbar-red;
      border-bottom: 1.32rem solid transparent;
      border-left: 1.32rem solid $barbar-red;
      border-right: 1.32rem solid transparent;
    }
  }
}
</style>