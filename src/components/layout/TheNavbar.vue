<template>
    <nav class="nav">
        <div class="nav--backdrop" v-if="menuOpen" @click="toggleMenu"></div>
        <div class="nav--links">
            <router-link class="nav--link" to="/">{{ $t("nav.home") }}</router-link>
            <span class="nav--link--separator"></span>
            <router-link class="nav--link" to="/lineup">{{ $t("nav.lineup") }}</router-link>
            <base-button>{{ $t("nav.tickets") }}</base-button>
        </div>
        <NavbarCounter />
        <locale-switcher @change="$emit('localeChange', $event)"></locale-switcher>
    </nav>
</template>

<script>
import NavbarCounter from "../navbar/NavbarCounter.vue";
import LocaleSwitcher from "../navbar/LocaleSwitcher.vue";

export default {
    components: { NavbarCounter, LocaleSwitcher }
}
</script>

<style lang="scss" scoped>
.nav {
    margin: 0;
    background: $secondary-background-color;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    justify-content: space-evenly;

    &--link {
        padding: 0.5rem;
        text-transform: uppercase;
        text-decoration: none;
        color: $main-text-color;

    &--separator::before {
        content: "★";
        transform: rotate(180deg);
        z-index: -1;
        vertical-align: middle;
        display: inline-block;
    }
    }
}

#navbarCounter {
    padding: 0.5rem;
}
</style>