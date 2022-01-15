<template>
  <div class="counter">
    <h3 class="counter__title">{{ $t("counter.gates") }}</h3>
    <div class="counter__time">
      <div class="counter__time__days">
        <span class="counter__time__num">{{ displayDays }}</span>
        <span>{{ $t("counter.days") }}</span>
      </div>
      <div class="counter__time__hours">
        <span class="counter__time__num">{{ displayHours }}</span>
        <span>{{ $t("counter.hours") }}</span>
      </div>
      <div class="counter__time__minutes">
        <span class="counter__time__num">{{ displayMinutes }}</span>
        <span>{{ $t("counter.minutes") }}</span>
      </div>
      <div class="counter__time__seconds">
        <span class="counter__time__num">{{ displaySeconds }}</span>
        <span>{{ $t("counter.seconds") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    }
  },
  mounted() {
    this.showRemainingTime();
  },
  methods: {
    // if the number is less than 10, make it have a 0 in front (f.e 09, 08, 07...);
    formatNum: num => (num < 10 ? "0" + num : num),

    showRemainingTime() {
      const timer = setInterval(() => {
        const now = new Date();
        const deadline = new Date("July 7 2022 18:00:00 GMT+0300");
        const difference = deadline.getTime() - now.getTime();

        if (difference < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(difference / this._days);
        const hours = Math.floor((difference % this._days) / this._hours);
        const minutes = Math.floor((difference % this._hours) / this._minutes);
        const seconds = Math.floor(
          (difference % this._minutes) / this._seconds
        );

        this.displaySeconds = this.formatNum(seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  flex-direction: column;
  margin: 0;
  align-self: center;
  width: fit-content;
  padding: 0.5rem;
  width: 100%;

  &__title {
    color: $main-text-color;
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  &__time {
    display: flex;
    justify-content: center;

    &__days,
    &__hours,
    &__minutes,
    &__seconds {
      display: flex;
      flex-direction: column;
      padding: 0.25rem;
      margin: 0.15rem;
      background: linear-gradient($main-background-color, $secondary-background-color);
      box-shadow: 0px 0px 3px $box-shadow-color;
      color: var(--main-text-color);
      border-radius: 3px;

      & span:nth-of-type(2) {
        letter-spacing: 1px;
        color: var(--main-text-color);
        font-size: 0.9rem;
      }
    }

    &__num {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .counter {
      display: flex;
      flex-direction: column;

      &__title {
        margin: 0 0 0.5rem 0;
        font-size: $heading-font-size;
        font-weight: 500;
      }

      &__time {
        display: flex;
        justify-content: center;

        &__days,
        &__hours,
        &__minutes,
        &__seconds {
          display: flex;
          flex-direction: column;
          align-content: center;
          margin: 0.25rem;
          padding: 0.5rem;

          & span:nth-of-type(2) {
            letter-spacing: 1px;
            font-size: 1rem;
          }
        }

        &__num {
          font-size: 2rem;
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
}

@media only screen and (min-width: 1440px) {
}
</style>
