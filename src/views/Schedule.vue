<template>
  <div class="schedule">
      <base-title>{{ $t("nav.schedule") }}</base-title>
      <!--     <div class="construction">
      <h1>{{ $t("content.construction") }}</h1>
      <img src="/metalconstruction.gif" alt="" />
    </div> -->
      <div class="schedule__content">
        <div class="schedule__content--card">
          {{ $t("schedule.thursday") }}
          <h3>{{ $t("schedule.thursdayTitle") }}</h3>
          <ul>
            <li>
              <span class="bluetext">19:00</span> FÖÖNIKS
            </li>
            <li>
              <span class="bluetext">20:00</span> RATTLECAN PAINTJOB
            </li>
            <li>
              <span class="bluetext">21:00</span> FARADAY
            </li>
            <li>
              <span class="bluetext">22:00</span> SKY DOWN
            </li>
            <li>
              <span class="bluetext">23:00</span> VALEM VALE
            </li>
            <li>
              <span class="bluetext">00:00</span> SINGER VINGER
            </li>
          </ul>
        </div>
        <div class="schedule__content--card">
          {{ $t("schedule.friday") }}
          <h3>{{ $t("schedule.fridayTitle") }}</h3>
          <ul>
            <li>
              <span class="bluetext">16:00</span> BARBAR FEAST BATTLE VÕITJA
            </li>
            <li>
              <span class="bluetext">17:00</span> RAEV
            </li>
            <li>
              <span class="bluetext">18:00</span> TANKIST
            </li>
            <li>
              <span class="bluetext">19:00</span> MÖRT
            </li>
            <li>
              <span class="bluetext">20:00</span> BESTIA
            </li>
            <li>
              <span class="bluetext">21:00</span> UNTSAKAD
            </li>
            <li>
              <span class="bluetext">22:00</span> HUKKUNUD HINGED
            </li>
            <li>
              <span class="bluetext">23:00</span> J.M.K.E.
            </li>
            <li>
              <span class="bluetext">00:00</span> DND
            </li>
          </ul>
        </div>
        <div class="schedule__content--card">
          {{ $t("schedule.saturday") }}
          <h3>{{ $t("schedule.saturdayTitle") }}</h3>
          <ul>
            <li>
              <span class="bluetext">13:00</span> RÄPINA JACK
            </li>
            <li>
              <span class="bluetext">14:00</span> BARBAR FEAST BATTLE VÕITJA
            </li>
            <li>
              <span class="bluetext">15:00</span> NUCLEAR MONARCH
            </li>
            <li>
              <span class="bluetext">16:00</span> DEFORMATION
            </li>
            <li>
              <span class="bluetext">17:00</span> RED ZEPPELIN (LED ZEPPELIN TRIBUTE)
            </li>
            <li>
              <span class="bluetext">18:00</span> KILLHALL (FIN/EST)
            </li>
            <li>
              <span class="bluetext">19:00</span> BLACK ROYAL (FIN)
            </li>
            <li>
              <span class="bluetext">20:00</span> EVESTUS
            </li>
            <li>
              <span class="bluetext">21:00</span> AUGUST URR
            </li>
            <li>
              <span class="bluetext">22:00</span> THOU SHELL OF DEATH
            </li>
            <li>
              <span class="bluetext">23:00</span> MANDOTERROR
            </li>
            <li>
              <span class="bluetext">00:00</span> KORPIKLAANI (FIN)
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "schedule",
  metaInfo() {
    return {
      meta: [
        {
          name: "robots",
          content: "noindex, follow"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

.link {
  color: $barbar-red;
  text-decoration: none;

  & :hover {
    color: $barbar-red;
    text-decoration: underline;
  }
}

.construction {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
  height: 28.5rem;

  h1 {
    font-size: 1.5rem;
  }
}

.bluetext {
  color: $barbar-red;
}

.schedule {
  padding: 3rem 0;
  background: url("/noise.png");
  width: 80%;

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem auto;
    width: 95%;

    &--card {
      padding: 1rem 0;
      width: 95%;
      text-align: center;
      transition: all 0.3s ease;
      display: block;
      background: $secondary-background-color;
      margin: 0.5rem;
      position: relative;
      font-weight: 600;
      font-size: 1rem;
      box-shadow: 9px 10px 22px -8px $box-shadow-color;
      display: flex;
      flex-direction: column;
/*       align-items: center; */

      ul {
        list-style: none;
        text-align: left;
        margin: 1rem 2rem;
        padding: 0;
      }
    }
  }

  h3 {
    font-size: 1.5rem;
    margin: 0.2rem auto 1rem auto;
    border-bottom: 1px solid var(--secondary-text-color);
    width: fit-content;
    color: var(--secondary-text-color);
  }

  img {
    width: 20rem;
  }
}

@media only screen and (min-width: 768px) {
  .border {
    border: 1rem dashed var(--darkest-of-the-dark);
  }

  .schedule {
    img {
      min-width: fit-content;
    }

    &__content {
      flex-direction: row;
      flex-wrap: wrap;

      &--card {
        font-size: 1.1rem;
        height: fit-content;
        width: 95%;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .schedule {
    &__content {
      flex-wrap: nowrap;
      &--card {
        height: 28rem;
        overflow: auto;
        width: 32%;
      }
    }
  }
}
</style>
