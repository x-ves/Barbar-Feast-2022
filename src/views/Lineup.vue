<template>
  <section class="lineup">
    <h1 class="lineup--heading">{{ $t("lineup.title") }}</h1>
    <section class="lineup--content">
    <LineupFilter class="lineup--filter" @change-filter="setFilters"/>
    <div class="lineup--cards">
      <lineup-card
        v-for="band in filteredBands"
        :key="band"
        :bandName="band.bandName"
        :genre="band.genre"
        :imgUrl="band.imgUrl"
        :vidUrl="band.vidUrl"
        :siteUrl="band.siteUrl"
        :facebookUrl="band.facebookUrl"
        :spotifyUrl="band.spotifyUrl"
        :bandcampUrl="band.bandcampUrl"
      />
      <p class="lineup--message" v-if="!filtersActive">{{ $t("errors.noFilters") }}</p>
    </div>
    </section>
  </section>
</template>

<script>
import LineupFilter from "@/components/lineup/LineupFilter.vue";
import LineupCard from "@/components/lineup/LineupCard.vue";

export default {
  components: { LineupCard, LineupFilter },
  data() {
    return {
      activeFilters: {
        punk: true,
        metal: true,
        rock: true
      }
    }
  },
  computed: {
    filteredBands() {
      const bands = this.$store.getters["bands"];
      return bands.filter(band => {
        if (this.activeFilters.punk && band.tags.includes("punk")) {
          return true;
        }
        if (this.activeFilters.metal && band.tags.includes("metal")) {
          return true;
        }
        if (this.activeFilters.rock && band.tags.includes("rock")) {
          return true;
        }
        return false;
      })
    },
    filtersActive() {
      if (!this.activeFilters.punk && !this.activeFilters.metal && !this.activeFilters.rock) {
        return false;
      }
      return true;
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  }
}
</script>

<style lang="scss" scoped>
  .lineup {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
    width: 100%;

    &--heading {
      font-size: $heading-font-size;
      text-transform: uppercase;
      margin: 0.5rem;
      width: 16rem;
      background: linear-gradient(45deg, transparent 20%, $barbar-red 0, $barbar-red 80%, transparent 0);
    }

    &--content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &--cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }


@media only screen and (min-width: 768px) {}


@media only screen and (min-width: 1024px) {
  .lineup {
    &--content {
      width: 95%;
      margin: 1rem 0;
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-evenly;
    }

    &--filter {
      width: 30%;
    }

    &--message {
      margin: 5rem auto;
      font-size: 1.5rem;
    }

    &--cards {
      justify-content: flex-start;
      width: 70%;
    }
  }
}
</style>