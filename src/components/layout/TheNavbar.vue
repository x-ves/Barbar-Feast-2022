<template>
    <nav class="nav">
        <div class="nav--backdrop" v-if="menuOpen" @click="toggleMenu"></div>
        <locale-switcher class="nav--localeSwitcher" @change="$emit('localeChange', $event)"></locale-switcher>
        <div class="nav--links" @click="toggleMenu">
            <localized-link class="nav--link" to="/">{{ $t("nav.home") }}</localized-link>
            <localized-link class="nav--link" to="/lineup">{{ $t("nav.lineup") }}</localized-link>
            <localized-link class="nav--link" to="/schedule">{{ $t("nav.schedule") }}</localized-link>
            <localized-link class="nav--link" to="/info">{{ $t("nav.info") }}</localized-link>
            <base-button class="nav--link" urlTo="https://www.ticketer.ee/barbar-feast-2022">{{ $t("nav.tickets") }}</base-button>
        </div>
        <span class="nav--icon" @click="toggleMenu">
            <font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
        </span>
    </nav>
</template>

<script>
import LocaleSwitcher from "../navbar/LocaleSwitcher.vue";
import LocalizedLink from "../navbar/LocalizedLink.vue";

export default {
    components: { LocaleSwitcher, LocalizedLink },
    data() {
        return {
            menuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            const navLinks = document.querySelector(".nav--links");
            const langSwitch = document.querySelector(".nav--localeSwitcher");
            const linkStyle = window.getComputedStyle(navLinks);
            const width = window.innerWidth;
            if (width < 768) {
                if (linkStyle.getPropertyValue("display") === "none") {
                this.menuOpen = true;
                navLinks.style.display = "flex";
                langSwitch.style.display = "block";
                } else {
                this.menuOpen = false;
                navLinks.style.display = "none";
                langSwitch.style.display = "none";
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    margin: 0;
    background: $secondary-background-color;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    position: fixed;
    z-index: 3;

    &--backdrop {
        background: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }


    &--localeSwitcher {
        display: none;
        z-index: 1;
    }

    &--links {
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
        z-index: 1;
    }

    &--link {
        text-transform: uppercase;
        text-decoration: none;
        color: $main-text-color;
        font-size: 1.2rem;
        letter-spacing: 1px;
        padding: 10px;
        transition: 0.3s all;
        border: none;

        &:hover {
          background-color: $main-background-color;
        }
    }

    &--icon {
        align-self: flex-end;
        cursor: pointer;
        padding: 10px;
        transition: all 0.4s;
        font-size: 1.2rem;
        z-index: 1;
    }
}

@media only screen and (min-width: 768px) {
  .nav {
    justify-content: space-between;
    flex-direction: row-reverse;

    &--localeSwitcher {
      display: block;
    }

    &--icon {
      display: none;
    }

    &--links {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    &--link {
        font-size: 1rem;
    }
  }
}

@media only screen and (min-width: 1024px) {
}

@media only screen and (min-width: 1440px) {
}
</style>