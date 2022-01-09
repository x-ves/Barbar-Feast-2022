<template>
    <base-card @click="$refs.LineupModal.openModal()">
      <img class="lineup--img" :src="imgUrl" />
      <h3>{{ bandName }}</h3>
    </base-card>
    <lineup-modal ref="LineupModal" class="modal">
        <template v-slot:header>
        <iframe
          v-if="vidUrl"
          class="modal--vid"
          width="560"
          height="315"
          :src="vidUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        />
        <img class="modal--Img" v-else :src="imgUrl" />
        <h3>{{ bandName }}</h3>
        <span>({{ genre }})</span>
      </template>

      <template v-slot:body>
        <p class="modal--desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aliquam sunt sed tempore, reprehenderit consequatur doloremque vitae fugiat pariatur nostrum laudantium inventore impedit sit delectus consectetur odit saepe perspiciatis voluptates?</p>
      </template>

      <template v-slot:footer>

      </template>
    </lineup-modal>
</template>

<script>
import LineupModal from "./LineupModal.vue";

export default {
    components: { LineupModal },
    props: [
                "imgUrl",
                "bandName",
                "genre",
                "vidUrl",
                "siteUrl",
                "facebookUrl",
                "spotifyUrl",
                "bandcampUrl"
            ],
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.lineup {

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

.modal {
  &--img {
    margin: 0 auto;
    width: 100%;
    object-fit: cover;
  }

  &--vid {
    margin: 0 auto;
  }

  &--desc {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.25rem;

    h3 {
      margin: 0;
      padding: 0;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
}


@media only screen and (min-width: 768px) {
    .modal {
        &--img {
            object-fit: contain;
        }
    }
}

@media only screen and (min-width: 1024px) {
}
</style>