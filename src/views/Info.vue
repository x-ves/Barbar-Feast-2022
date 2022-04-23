<template>
    <section class="info">
      <base-title>{{ $t("info.title") }}</base-title>
        <section class="info__content">
          <base-card class="activities">
          <p class="activities--intro">{{ $t("activities.intro") }}</p>
          <ul class="activities__list">
            <li class="activities__list--item" v-for="activity in activities" :key="activity"><span class="activity--name">{{ activity.name }}</span> - {{ activity.desc }}</li>
          </ul>
        </base-card>
        </section>
    </section>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          name: this.$t("activities.market.title"),
          desc: this.$t("activities.market.desc")
        },
        {
          name: this.$t("activities.tentshop.title"),
          desc: this.$t("activities.tentshop.desc")
        },
        {
          name: this.$t("activities.splash.title"),
          desc: this.$t("activities.splash.desc")
        },
        {
          name: this.$t("activities.axe.title"),
          desc: this.$t("activities.axe.desc")
        },
        {
          name: this.$t("activities.boat.title"),
          desc: this.$t("activities.boat.desc")
        },
        {
          name: this.$t("activities.extra.title"),
          desc: this.$t("activities.extra.desc")
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0.5rem 0 0.5rem;
    width: 100%;
    font-weight: 500;
    text-align: left;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  .activities {
    width: 95%;
    margin: 1.5rem 0;

    &--intro {
      padding: 0 1rem;
    }

    &__list {
      margin: 0;
      padding: 0.5rem;
      &--item {
        margin: 0;
        padding: 0.5rem;
        background: $main-background-color;
        list-style-type: none;
        border-left: 2px dashed $main-background-color;
        border-right: 2px dashed $main-background-color;

        &:last-child {
          border-bottom: 2px dashed $main-background-color;
        }

        &:nth-child(2n) {
          background: $secondary-background-color;
        }
      }
    }

    .activity--name {
      font-weight: 700;
      color: $barbar-red;
    }
  }


@media only screen and (min-width: 768px) {}


@media only screen and (min-width: 1024px) {
  .activities {
    width: 65%;
    padding: 1rem;
  }

}
</style>