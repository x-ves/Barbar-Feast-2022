<template>
  <section class="lineup">
    <h1>This is a lineup page</h1>
    <div class="lineup--cards">
      <base-card>
      <div class="lineup--img"></div>
      <h3>Band 1</h3>
      </base-card>
      <base-card>
      <div class="lineup--img"></div>
      <h3>Band 2</h3>
      </base-card>
      <base-card>
      <div class="lineup--img"></div>
      <h3>Band 3</h3>
      </base-card>
      <base-card>
      <div class="lineup--img"></div>
      <h3>Band 4</h3>
      </base-card>
      <base-card>
      <div class="lineup--img"></div>
      <h3>Band 5</h3>
      </base-card>
      <base-card>
      <div class="lineup--img"></div>
      <h3>Band 6</h3>
      </base-card>
      <base-card>
      <div class="lineup--img"></div>
      <h3>Band 7</h3>
      </base-card>
      <base-card>
      <div class="lineup--img"></div>
      <h3>Band 8</h3>
      </base-card>
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

      .baseCard {
        padding: 0;
      }
    }

    &--img {
      width: 300px;
      height: 200px;
      background: $main-background-color;
    }
  }
</style>
