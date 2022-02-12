<template>
  <div class="slider">
    <transition-group class="slider__slides" tag="div">
      <div v-for="slide in slides" class="slide" :key="slide">
        <span class="slide--author">📸 {{ slide.author }}</span>
        <img class="slide--img" :src="slide.imgUrl" loading="lazy" />
      </div>
    </transition-group>
    <div class="slider__controls">
      <button class="slider__controls--button" @click="previous">◀</button>
      <button class="slider__controls--button" @click="next">▶</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
            imgUrl: "/fortstage-lochlainn.jpg",
            author: "Lochlainn Warren"
        },
        {
            imgUrl: "/riverstage-lochlainn.jpg",
            author: "Lochlainn Warren"
        },
        {
            imgUrl: "/j6gi-JalmarV2in.jpg",
            author: "Jalmar Väin"
        },
        {
            imgUrl: "/linnusetorn-JalmarV2in.jpg",
            author: "Jalmar Väin"
       },
       {
           imgUrl: "/hundikuut-Madis.jpg",
           author: "Madis Velström"
       }
      ],
      timer: null
    };
  },

  mounted() {
    this.startRotation();
  },

  methods: {
    startRotation() {
      this.timer = setInterval(this.next, 5000);
    },
    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    resetRotation() {
      this.stopRotation();
      this.startRotation();
    },
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
      this.resetRotation();
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
      this.resetRotation();
    }
  }
};
</script>

<style lang="scss">
.slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

&__slides {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    min-height: 24em;
}

&__controls {
    height: 24em;
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;

    &:hover &--button {
      opacity: 1;
    }

    &--button {
      opacity: 0;
      transition: all 0.3s;
      border: none;
      background: rgba(0, 0, 0, 0);
      color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      font-size: 1.25rem;
      width: 2.5rem;
      outline: none;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}

.slide {
    display: flex;
/*     align-content: center;
    justify-content: center; */
    transition: 0.2s ease;
    min-width: 100%;

    &--img {
        object-fit: cover;
        height: 24em;
        width: 100%;
        filter: grayscale(25%);
        justify-self: center;
        align-self: center;
    }

  &--author {
    opacity: 0.7;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.9rem;
    position: absolute;
    display: flex;
    align-self: flex-end;
    z-index: 5;
    width: fit-content;
  }

  &:first-of-type,
  &:last-of-type {
    opacity: 0;
  }
}

@media only screen and (min-width: 768px) {
  .slider {
        &__slides {
        width: 40em;
        min-height: 28em;
        }
        &__controls {
        width: 40em;
        height: 28em;
        }
    }

    .slide {
        &--img {
          height: 28em;
          width: 40em;
        }
    }
}

@media only screen and (min-width: 1024px) {
  .slider {
    margin: 1rem auto;

    &__slides {
      min-width: 30em;
      min-height: 24em;
      width: 30rem;
    }

    &__controls {
      min-width: 30em;
      min-height: 28em;
      width: fit-content;
    }
  }

  .slide {
      &--img {
        min-height: 24em;
        min-width: 30em;
      }

      &--author {
          position: absolute;
      }
    }
}
</style>