<template>
  <section id="home">
    <section class="welcome">
      <img id="feastPoster" alt="Barbar Feast 2022 poster" src="../assets/feast-graphics.jpg">
      <div class="welcome--counter">
        <base-card>
          <p>This section will include a counter until opening of gates. And a button to buy tickets.</p>
          <base-button>TICKETS</base-button>
        </base-card></div>
    </section>
    <section>
    <base-card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut debitis, neque incidunt maxime aspernatur nihil sit saepe possimus eveniet? Aliquid ad dignissimos obcaecati unde repudiandae ducimus facilis reiciendis laudantium.</base-card>
    <base-card> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit quasi, voluptatibus laboriosam, impedit magnam voluptates inventore doloremque praesentium ratione sed. Vero quisquam voluptatibus reprehenderit dolorem veritatis nobis beatae quidem!
  Voluptates, incidunt fugit in illo autem dolore pariatur explicabo facere magni ut. Nesciunt nulla unde ex voluptatibus minima! Enim laborum sit blanditiis at exercitationem quae, voluptatibus dolorum accusantium neque aliquid. </base-card>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#feastPoster {
  width: 100%;
}

@media only screen and (min-width: 768px) {}


@media only screen and (min-width: 1024px) {
.welcome {
  flex-direction: row-reverse;

    &--counter {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

#feastPoster {
  width: 50%;
}

}
</style>