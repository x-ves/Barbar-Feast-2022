<template>
  <section class="home">
    <section class="welcome">
      <img id="feastPoster" alt="Barbar Feast 2022 poster" src="../assets/feast-graphics.jpg">
      <div class="welcome--counter">
        <base-card>
          <the-counter></the-counter>
          <base-button>TICKETS</base-button>
        </base-card>
        </div>
    </section>
    <section class="news">
      <base-card>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.

        Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.
      </base-card>
      <base-card>
        The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
      </base-card>
      <base-card>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos impedit nemo voluptates dolorum id molestias et harum nesciunt eum illum consequuntur, inventore quibusdam non eveniet dignissimos quaerat quam? Iusto, eius.
        Dolore, minus, soluta quam vel, sed quod tempore sint inventore placeat temporibus voluptate culpa corporis reprehenderit obcaecati veniam officia vero? Illo dolores mollitia velit, iure cum dicta molestiae eaque debitis.
        Exercitationem sapiente vero, quasi eius optio delectus nulla magnam modi, architecto dolores rem aliquid eveniet, suscipit quam. Laudantium est minima obcaecati, quis autem temporibus provident ad, reprehenderit suscipit saepe non!
      </base-card>
    </section>
  </section>
</template>

<script>
import TheCounter from "../components/layout/TheCounter.vue";

export default {
  name: 'Home',
  components: {
    TheCounter
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.6rem;
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;

  &--counter {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

#feastPoster {
  width: 100%;
}

@media only screen and (min-width: 768px) {

}


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

.news {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  background: $secondary-background-color;
}

}
</style>