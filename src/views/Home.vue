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
          <h1 class="title">{{ $t("location.header") }}</h1>
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
            >. <br /><br />
          </p>
        </div>
      </div>
      <the-map />
    </section>
    <section class="transport">
      <base-card class="transport__bus">
        <img class="transport__bus--img" src="/festivalibuss.webp" alt="Metal Travel Agency bus">
        <div class="transport__bus--text">
          <h1 class="title">Metal Travel Agency</h1>
          <p>FESTIVALIKÜLASTAJAID SÕIDUTAB LIINIL TLN-VK-TLN <a target="_blank" href="https://metaltravel.net/" rel="noreferrer">METAL TRAVEL AGENCY</a> (täpne info peatselt)</p>
        </div>
      </base-card>
      <base-card class="transport__parking">
        <div class="transport__parking--text">
          <h1 class="title">{{ $t("parking.title") }}</h1>
          <p>{{ $t("parking.desc") }}</p>
        </div>
      </base-card>
      <base-card class="transport__third">
        <div class="transport__third--text">
          <h1 class="title">{{ $t("third.title") }}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque praesentium modi, consequatur assumenda mollitia alias nulla optio eveniet, deleniti fugit, excepturi officia dolore. Ullam culpa magni tempora officiis veritatis?</p>
        </div>
      </base-card>
    </section>
    <section class="faq">
      <h1 class="title">{{ $t("faq.title") }}</h1>
      <the-FAQ></the-FAQ>
    </section>
    <section class="sponsors">
      <h1 class="title">{{ $t("sponsors.title") }}</h1>
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
        <a target="_blank" href="https://www.facebook.com/roaddevilmc"
          ><img
            class="sponsors--img"
            src="@/assets/Road-Devil-transparent.png"
            alt=""
            loading="lazy"
        /></a>
        <a target="_blank" href="https://www.facebook.com/barbarestonia"
          ><img
            class="sponsors--img"
            src="@/assets/Barbar-transparent.webp"
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

export default {
  name: 'Home',
  components: {
    TheCounter,
    TheImageCarousel,
    TheFAQ
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
  }
}

.ticket--button {
  width: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.location {
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
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
      width: 97%;
      margin: 0 auto;
    }

    &--title {
      color: $main-text-color;
      margin: 1rem;
      font-size: 2rem;
      text-align: center;
      text-transform: uppercase;
      background: linear-gradient(45deg, transparent 20%, $barbar-red 0, $barbar-red 80%, transparent 0);
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
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  &__bus {
    &--img {
      min-width: 18rem;
      width: 100%;
    }

    &--text {
      padding: 0.5rem;
      a {
        color: $barbar-red;
        text-decoration: none;
      }
    }
  }

  &__parking {
    padding: 0.5rem;
  }
}

.faq {
  padding: 2rem 0;
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
  padding: 2rem 0;
  &--title {
      color: $main-text-color;
      margin: 1rem;
      font-size: 2rem;
      text-align: center;
      text-transform: uppercase;
      background: linear-gradient(45deg, transparent 20%, $barbar-red 0, $barbar-red 80%, transparent 0);
  }

  &--img {
    width: 10rem;
  }
}

#feastPoster {
  width: 100%;
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

    &__bus {
      width: 45%;
      &--img {
        min-width: 18rem;
        width: 100%;
      }
    }

    &__parking {
      width: 45%;
    }

    &__third {
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
  width: 50%;
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
      width: 50%;
    }
  }
}

  .transport {
    padding: 2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1.5rem auto;
    width: 100%;
    flex-wrap: wrap;

    &__bus {
      width: 30%;
      &--img {
        min-width: 18rem;
        width: 100%;
      }
    }

    &__parking {
      width: 30%;
    }

    &__third {
      width: 30%;
      margin: 0;
    }
}
}
</style>