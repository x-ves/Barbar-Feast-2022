<template>
    <nav class="nav">
        <router-link class="nav--link" to="/">Home</router-link>
        <span class="nav--link--separator"></span>
        <router-link class="nav--link" to="/lineup">Lineup</router-link>
        <base-button>TICKETS</base-button>
        <NavbarCounter />
    </nav>
</template>

<script>
import NavbarCounter from "../counters/NavbarCounter.vue";

export default {
    components: { NavbarCounter }
}
</script>

<style lang="scss" scoped>
.nav {
    margin: 0;
    background: $secondary-background-color;
    width: 100%;
    padding: 0.5rem;

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