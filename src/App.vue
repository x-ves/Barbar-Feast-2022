<template>
  <TheNavbar />
  <router-view/>
  <TheFooter />
</template>

<script>
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">

*, *::before, *::after {
  box-sizing: border-box;
}

::selection {
  background: rgba(0, 0, 0, 0.3);
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  color: $main-text-color;
  background: $main-background-color;
  font-size: $main-font-size;
}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 1024px) {}
</style>
