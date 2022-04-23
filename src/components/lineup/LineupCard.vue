<template>
    <base-card @click="$refs.LineupModal.openModal()">
      <img class="lineup--img" :src="imgUrl" />
      <div class="lineup--cardText">
        <h3>{{ bandName }}</h3>
        <span>({{ genre }})</span>
      </div>
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
        <base-title>{{ bandName }}</base-title>
        <span>({{ genre }})</span>
      </template>

      <template v-slot:body>
        <p class="modal--desc" v-if="bandName === 'J.M.K.E.'">{{ $t("bands.JMKE") }}</p>
        <p class="modal--desc" v-else>{{ $t("bands." + bandName) }}</p>
      </template>

      <template v-slot:footer>
        <div class="modal--socials">
          <a
            class="modal--socials--icon"
            target="_blank"
            v-if="siteUrl"
            :href="siteUrl"
            ><font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon
          ></a>
          <a
            class="modal--socials--icon"
            target="_blank"
            v-if="facebookUrl"
            :href="facebookUrl"
            ><font-awesome-icon
              :icon="['fab', 'facebook-square']"
            ></font-awesome-icon
          ></a>
          <a
            class="modal--socials--icon"
            target="_blank"
            v-if="spotifyUrl"
            :href="spotifyUrl"
            ><font-awesome-icon :icon="['fab', 'spotify']"></font-awesome-icon
          ></a>
          <a
            class="modal--socials--icon"
            target="_blank"
            v-if="bandcampUrl"
            :href="bandcampUrl"
            ><font-awesome-icon :icon="['fab', 'bandcamp']"></font-awesome-icon
          ></a>
        </div>
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
      cursor: pointer;
      transition: 0.3s background-color ease-in-out;
      display: flex;
      flex-direction: column;
      margin: 0.5rem;
      width: 19rem;

      &:hover {
        background: $barbar-red;
      }
    }

    &--img {
      max-width: 20rem;
      height: 14rem;
      background: $main-background-color;
      object-fit: cover;
    }

    &--cardText {
      display: flex;
      flex-direction: column;
      margin: 0.5rem;

      h3 {
        margin: 0;
      }
      span {
        margin: 0;
        width: 18rem;
      }
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