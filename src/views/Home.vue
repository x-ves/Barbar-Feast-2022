<template>
  <section class="home">
    <section class="welcome">
      <img id="feastPoster" alt="Barbar Feast 2022 poster" src="../assets/feast-graphics.webp">
      <base-card class="welcome--counter">
        <the-counter></the-counter>
        <base-button class="ticket--button" urlTo="https://www.ticketer.ee/barbar-feast-2022">
          {{ $t("buyTickets") }}
        </base-button>
      </base-card>
    </section>
    <section class="location">
      <div class="location__content">
        <div class="location__content--carousel">
          <the-image-carousel />
        </div>
        <div class="location__content--text">
        <base-title>{{ $t("location.title") }}</base-title>
          <p class="location__content--desc">
            <span v-html="$t('location.desc')"></span> <br /><br />
            {{ $t("location.event") }}
            <a
              href="https://www.facebook.com/events/330945968527636/"
              target="_blank"
              >{{ $t("location.eventlink") }}</a
            >
            <br />
            {{ $t("location.more") }}
            <a href="https://www.viikingitekyla.ee/" target="_blank">{{
              $t("location.link")
            }}</a
            > <br /><br />
          </p>
        </div>
      </div>
      <the-map />
    </section>
    <section class="transport">
      <the-transport-card>
        <template v-slot:img><img class="transportCard--img" src="/festivalibuss.webp" alt="Metal Travel Agency bus"></template>
        <template v-slot:title>{{ $t("bus.title") }}</template>
        <template v-slot:desc>{{ $t("bus.desc") }}</template>
      </the-transport-card>
      <the-transport-card>
        <template v-slot:img><img class="transportCard--img" src="/telkla.webp" alt=""></template>
        <template v-slot:title>{{ $t("camping.title") }}</template>
        <template v-slot:desc>{{ $t("camping.desc") }}</template>
      </the-transport-card>
      <the-transport-card id="parkingCard">
        <template v-slot:img><img class="transportCard--img" src="/parkla.webp" alt=""></template>
        <template v-slot:title>{{ $t("parking.title") }}</template>
        <template v-slot:desc>{{ $t("parking.desc") }}</template>
      </the-transport-card>
    </section>
    <section class="faq">
      <base-title>{{ $t("faq.title") }}</base-title>
      <the-FAQ></the-FAQ>
    </section>
    <section class="sponsors">
      <base-title>{{ $t("sponsors.title") }}</base-title>
      <div class="sponsors__wrapper">
        <a target="_blank" href="https://www.hbrebel.cz/en/"
          ><img
            class="sponsors--img"
            src="@/assets/Rebel-transparent.png"
            alt=""
            loading="lazy"
        /></a>
        <a target="_blank" href="https://www.fireballwhisky.com/"
          ><img
            class="sponsors--img"
            src="@/assets/Fireball-transparent.png"
            alt=""
            loading="lazy"
        /></a>
        <a target="_blank" href="https://www.facebook.com/barbarestonia"
          ><img
            class="sponsors--img"
            src="@/assets/Barbar-transparent-white.webp"
            alt=""
            loading="lazy"
        /></a>
        <a target="_blank" href="https://kabliku.com/"
          ><img
            class="sponsors--img"
            src="@/assets/Käbliku-transparent.png"
            alt=""
            loading="lazy"
        /></a>
      </div>
    </section>
  </section>
</template>

<script>
import TheCounter from "../components/layout/TheCounter.vue";
import TheImageCarousel from "../components/layout/TheImageCarousel.vue";
import TheFAQ from "../components/layout/TheFAQ.vue";
import TheTransportCard from "../components/layout/TheTransportCard.vue";

export default {
  name: 'Home',
  components: {
    TheCounter,
    TheImageCarousel,
    TheFAQ,
    TheTransportCard
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.6rem;
  width: 100%;
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &--counter {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    align-items: center;
  }
}

.ticket--button {
  width: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: 0.3s background;
}

.location {
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient($main-background-color, $secondary-background-color);

  a {
    color: $barbar-red;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      color: $barbar-red;
    }
  }

  &__content {
    padding: 1rem 0;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;

    &--carousel {
      width: 100%;
      align-self: center;
    }

    &--text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 97%;
      margin: 0 auto;
    }

    &--desc {
      margin: 0;
      padding: 1rem;
      width: fit-content;
      align-self: center;
    }
  }
}

.transport {
/*   padding: 2rem 0; */
  display: flex;
  flex-direction: column;
  width: 100%;
}

.transportCard {
  &--img {
    min-width: 18rem;
    height: 20rem;
    width: 100%;
    object-fit: cover;
  }
}

.faq {
  display: flex;
  flex-direction: column;
  padding: 2rem 0.5rem;
  width: 100%;
  background: radial-gradient($main-background-color, $secondary-background-color);
  &--title {
      color: $main-text-color;
      margin: 1rem;
      font-size: 2rem;
      text-align: center;
      text-transform: uppercase;
      background: linear-gradient(45deg, transparent 20%, $barbar-red 0, $barbar-red 80%, transparent 0);
  }
}

.sponsors {
  padding: 2rem 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  &--title {
      color: $main-text-color;
      margin: 1rem;
      font-size: 2rem;
      text-align: center;
      text-transform: uppercase;
      background: linear-gradient(45deg, transparent 20%, $barbar-red 0, $barbar-red 80%, transparent 0);
  }

  &--img {
    height: 10rem;
    margin: 1rem;
  }
}

#feastPoster {
  width: 100vw;
}

@media only screen and (min-width: 768px) {

  .ticket--button {
    width: 70%;
    align-self: center;
  }

  .transport {
    padding: 2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1.5rem auto;
    width: 100%;
    flex-wrap: wrap;

    #parkingCard {
      margin: 2rem 1rem 0 1rem;
      width: 93%;
    }
}
}


@media only screen and (min-width: 1024px) {
.welcome {
  flex-direction: row-reverse;
  justify-content: space-between;

    &--counter {
    display: flex;
    align-self: center;
    justify-self: center;
    margin: 0 auto;
    width: 45%;
  }
}

#feastPoster {
  width: 50vw;
}

.location {
  &__content {
    flex-direction: row-reverse;
    align-content: center;
    justify-content: center;
    width: 100%;

    &--carousel {
      width: 50%;
    }

    &--text {
      width: 47%;
    }
  }
}

  .transport {
    padding: 2rem 0;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    margin: 1.5rem auto;
    width: 100%;

  #parkingCard {
    margin: 0;
    width: 30%;
  }
}
}
</style>