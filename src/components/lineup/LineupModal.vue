<template>
  <transition name="fade">
    <section class="modal" v-if="modalIsOpen">
      <div class="modal--backdrop" @click="closeModal()" />
        <section class="modal--dialog">
          <section class="modal--header">
          <button type="button" class="modal--close" @click="closeModal()">
            <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
          </button>
          <slot name="header"></slot>
          </section>

        <section class="modal--body">
          <slot name="body"></slot>
        </section>

        <section class="modal--footer">
          <button class="arrowButton" @click="closeModal()">
            <font-awesome-icon
              :icon="['fas', 'long-arrow-alt-left']"
            ></font-awesome-icon>
          </button>
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
          <slot name="footer"></slot>
        </section>
      </section>
    </section>
  </transition>
</template>


<script>
export default {
  data() {
    return {
      modalIsOpen: false
    };
  },
  methods: {
    openModal() {
      this.modalIsOpen = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    closeModal() {
      this.modalIsOpen = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }
};
</script>

<style lang="scss">
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;

  iframe {
    max-width: 100%;
  }

  &--backdrop {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &--dialog {
    background: $secondary-background-color;
    position: relative;
    width: fit-content;
    max-width: 600px;
    margin: 5rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;

    @media screen and (max-width: 992px) {
      width: 95%;
    }
  }

  .arrowButton {
    color: var(--secondary-text-color);
    border: none;
    background: transparent;
    font-size: 2.5rem;
    height: 1rem;
    width: fit-content;
    outline: none;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--hover-text-color);
    }
  }

  .modal {
    &--socials {
      width: fit-content;
      display: flex;
      justify-content: space-evenly;

      &--icon {
        color: var(--secondary-text-color);
        font-size: 1.5rem;
        margin: 0 0.15rem;
        cursor: pointer;
        transition: color 0.2s;
        vertical-align: middle;

        &:hover {
          color: var(--hover-text-color);
        }
      }
    }
  }

  &--close {
    align-self: flex-end;
    position: absolute;
    width: 35px;
    height: 35px;
    border: none;
    color: rgba(253, 253, 253, 0.7);
    background: rgba(255, 255, 255, 0.1);
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    outline: none;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      color: rgba(253, 253, 253, 1);
    }
  }

  &--header {
    display: flex;
    flex-direction: column;

    h3 {
      margin: 0.5rem 0 0 0;
      font-size: 2rem;
      text-transform: uppercase;
      color: var(--secondary-text-color);
      text-align: center;
    }

    span {
      margin: 0;
      text-align: center;
      text-transform: capitalize;
    }

    img {
      height: 18rem;
    }
  }

  &--body {
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    width: 90%;
    align-self: center;
  }

  &--footer {
    display: flex;
    justify-content: space-between;
    height: 1.7rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
