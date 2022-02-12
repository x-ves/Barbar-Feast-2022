<template>
  <TheNavbar />
  <router-view />
  <TheFooter />
</template>

<script>
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheFooter from "./components/layout/TheFooter.vue";

import { setDocumentLang, setDocumentTitle } from "@/util/i18n/document.js";

export default {
  components: {
    TheNavbar,
    TheFooter
  },
  mounted() {
    this.$watch("$i18n.locale", (newLocale, oldLocale) => {
      if (newLocale === oldLocale) {
        return
      }
      setDocumentLang(newLocale),
      setDocumentTitle(this.$t("app.title"))
    }, {immediate: true})
  }
}
</script>

<style lang="scss">

*, *::before, *::after {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

::selection {
  background: rgba(0, 0, 0, 0.3);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  background: url("./assets/noise.webp");
  background-color: $main-background-color;
  color: $main-text-color;
  font-size: $main-font-size;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
}

::-webkit-scrollbar {
  background: rgb(40, 40, 40);
  width: 0.75rem;

  &-thumb {
    background: rgb(30, 30, 30);

    &:hover {
      background: rgb(25, 25, 25);
    }
  }
}

.overflow-hidden {
  overflow: hidden;
}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 1024px) {}
</style>
