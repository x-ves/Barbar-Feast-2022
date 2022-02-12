<template>
  <section class="home">
    <section class="welcome">
      <img id="feastPoster" alt="Barbar Feast 2022 poster" src="../assets/feast-graphics.webp">
      <base-card class="welcome--counter">
        <the-counter></the-counter>
        <base-button class="ticket--button">{{ $t("nav.tickets") }}</base-button>
      </base-card>
    </section>
    <section class="location">
      <div class="location__content">
        <div class="location__content--carousel">
          <the-image-carousel />
        </div>
        <div class="location__content--text">
          <h1 class="location__content--title">{{ $t("location.header") }}</h1>
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
    <section class="bus">
      <img class="bus--img" src="/festivalibuss.webp" alt="Metal Travel Agency bus">
      <div class="bus--text">
        <h3 class="bus--title">Metal Travel Agency</h3>
        <p>FESTIVALIKÜLASTAJAID SÕIDUTAB LIINIL TLN-VK-TLN <a target="_blank" href="https://metaltravel.net/">METAL TRAVEL AGENCY</a> (täpne info peatselt)</p>
      </div>
    </section>
    <section class="faq">
      <h3 class="faq--title">{{ $t("faq.title") }}</h3>
    </section>
    <section class="sponsors">
      <h3 class="sponsors--title">{{ $t("sponsors.title") }}</h3>
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

export default {
  name: 'Home',
  components: {
    TheCounter,
    TheImageCarousel
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
  }
}

.ticket--button {
  width: 100%;
  font-weight: 600;
}

.location {
  width: 100%;
  padding: 1rem 0 0 0;
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

.bus {
  display: flex;
  flex-direction: column-reverse;

  &--title {
      color: $main-text-color;
      margin: 1rem;
      font-size: 2rem;
      text-align: center;
      text-transform: uppercase;
      background: linear-gradient(45deg, transparent 20%, $barbar-red 0, $barbar-red 80%, transparent 0);
  }

  &--img {
    min-width: 20rem;
    width: 100%;
  }
}

.faq {
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
  .welcome {
    &--counter {
      width: 70%;
    }
  }

  .ticket--button {
    width: 70%;
    align-self: center;
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

}
</style>