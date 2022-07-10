<template>
  <transition name="fade">
    <div class="modal" v-if="showModal">
      <div class="modal__backdrop" @click="closeModal()" />

      <base-card class="modal__dialog">
        <div class="modal__header">
          <button type="button" class="modal__close" @click="closeModal()">
            <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
          </button>
          <img
            src="@/assets/Barbar-transparent.webp"
            alt="Barbar Rockclub's logo, an accordion playing skeleton"
            style="width: 20rem; align-self: center;"
          />
        </div>

        <div class="modal__body">
          <h1>{{ $t("thx.header") }}</h1>
          <p v-html="$t('thx.content')"></p>
        </div>
      </base-card>
    </div>
  </transition>
</template>

<script>
export default {
  name: "thxModal",
  data() {
    return {
      showModal: true
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.showModal = true;
      document.querySelector("body").classList.add("overflow-hidden");
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

  &__backdrop {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__dialog {
    background: linear-gradient(var(--card-bg-hover), var(--card-bg-color));
    position: relative;
    width: fit-content;
    max-width: 600px;
    margin: 5rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    box-shadow: 0px 0px 30px 3px var(--darkest-of-the-dark);

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

  &__close {
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

  h1 {
    margin: 0.5rem 0 0 0;
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    text-align: center;
  }

  &__header {
    display: flex;
    flex-direction: column;

    span {
      margin: 0;
      text-align: center;
      text-transform: capitalize;
    }

    img {
      height: 18rem;
    }
  }

  &__body {
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    width: 90%;
    align-self: center;
  }

  &__footer {
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
