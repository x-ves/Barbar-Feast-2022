<template>
  <base-card class="FAQ">
    <details class="FAQ__options">
      <summary class="FAQ__options--question">{{ $t("faq.q1") }}</summary>
      <p class="FAQ__options--answer">{{ $t("faq.a1") }}</p>
    </details>
    <details class="FAQ__options">
      <summary class="FAQ__options--question">{{ $t("faq.q2") }}</summary>
      <p class="FAQ__options--answer" v-html="$t('faq.a2')"></p>
    </details>
    <details class="FAQ__options">
      <summary class="FAQ__options--question">{{ $t("faq.q3") }}</summary>
      <p class="FAQ__options--answer">{{ $t("faq.a3") }}</p>
    </details>
    <details class="FAQ__options">
      <summary class="FAQ__options--question">{{ $t("faq.q4") }}</summary>
      <p class="FAQ__options--answer">{{ $t("faq.a4") }}</p>
    </details>
    <details class="FAQ__options">
      <summary class="FAQ__options--question">{{ $t("faq.q5") }}</summary>
      <p class="FAQ__options--answer">{{ $t("faq.a5") }}</p>
    </details>
    <details class="FAQ__options">
      <summary class="FAQ__options--question">{{ $t("faq.q6") }}</summary>
      <p class="FAQ__options--answer">{{ $t("faq.a6") }}</p>
    </details>
    <details class="FAQ__options">
      <summary class="FAQ__options--question">{{ $t("faq.q7") }}</summary>
      <p class="FAQ__options--answer">{{ $t("faq.a7") }}</p>
    </details>
  </base-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
.FAQ {
  width: 97%;
  margin: 1rem auto;
  height: fit-content;
  padding: 0.5rem;

  &__options {
    width: 100%;
    &--question {
      padding: 0.5rem;
      color: $main-text-color;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.1s;
      text-align: left;
      border-bottom: 1px solid rgb(44, 44, 44);

      &:focus {
        outline: none;
      }

      &:hover {
        background-color: $barbar-red;
        color: $main-text-color;
      }
    }

    &[open] > &--question {
      background-color: $barbar-red;
      color: $main-text-color;
    }

    &--answer {
      text-align: left;
      margin: 0;
      padding: 0.5rem 1.5rem;
      color: $main-text-color;
    }
  }
}

@media only screen and (min-width: 768px) {
  .FAQ {
    width: 70%;
  }
}

@media only screen and (min-width: 1024px) {
  .FAQ {
    width:40%;
  }
}
</style>
