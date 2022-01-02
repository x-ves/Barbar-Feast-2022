<template>
  <section class="lineup">
    <h1 class="lineup--heading">LINEUP</h1>
    <section class="lineup--content">
    <LineupFilter class="lineup--filter" @change-filter="setFilters"/>
    <div class="lineup--cards">
      <base-card v-for="band in filteredBands" :key="band">
      <img class="lineup--cards--img" :src="band.imgUrl" />
      <h3>{{ band.bandName }}</h3>
      </base-card>
      <p class="lineup--message" v-if="!filtersActive">Choose at least one Filter!</p>
    </div>
    </section>
  </section>
</template>

<script>
import LineupFilter from "@/components/lineup/LineupFilter.vue";

export default {
  components: { LineupFilter },
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
        if (this.activeFilters.punk && band.genres.includes("punk")) {
          return true;
        }
        if (this.activeFilters.metal && band.genres.includes("metal")) {
          return true;
        }
        if (this.activeFilters.rock && band.genres.includes("rock")) {
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
    padding: 1rem;
    width: 100%;

    &--heading {
      font-size: $heading-font-size;
      margin: 0.5rem;
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

      .baseCard {
        padding: 0;
      }

      &--img {
        width: 300px;
        height: 200px;
        background: $main-background-color;
        object-fit: cover;
      }

      h3 {
        margin: 0.5rem;
      }
    }
  }


@media only screen and (min-width: 768px) {}


@media only screen and (min-width: 1024px) {
  .lineup {
    &--content {
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-evenly;
    }

    &--cards {
      justify-content: flex-start;
      width: 70%;
    }

    &--filter {
      width: 30%;
    }

    &--message {
      margin: 5rem auto;
    }
  }
}
</style>