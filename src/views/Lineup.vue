<template>
  <section class="lineup">
    <h1>This is a lineup page</h1>
    <div class="lineup--cards">
      <base-card>Band 1</base-card>
      <base-card>Band 2</base-card>
      <base-card>Band 3</base-card>
      <base-card>Band 4</base-card>
      <base-card>Band 5</base-card>
      <base-card>Band 6</base-card>
      <base-card>Band 7</base-card>
      <base-card>Band 8</base-card>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .lineup {
    display: flex;
    flex-direction: column;

    &--cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
