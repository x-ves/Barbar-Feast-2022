<template>
  <footer class="footer">
      <img
        src="@/assets/Barbar-transparent.webp"
        alt="BarBar logo"
        loading="lazy"
      />
      <div class="footer__contacts">
        <h3>{{ $t("footer.msg") }}</h3>
        <br />
        <p>
          {{ $t("footer.phone") }}:
          <strong><a href="tel:+37258377788">+372 5837 7788</a></strong> <br />
          {{ $t("footer.mail") }}:
          <strong
            ><a href="mailto:info@barbarrockclub.com"
              >info@barbarrockclub.com</a
            ></strong
          >
        </p>
        <div class="footer__clubsocials">
          <span class="socsp"
            ><font-awesome-icon
              class="footer__socials__icon"
              :icon="['fab', 'facebook-square']"
            ></font-awesome-icon
            ><a href="https://www.facebook.com/barbarestonia/" target="_blank"
              >@barbarestonia</a
            ></span
          >
          <span class="socsp"
            ><font-awesome-icon
              class="footer__socials__icon"
              :icon="['fab', 'instagram']"
            ></font-awesome-icon
            ><a href="https://www.instagram.com/barbarestonia/" target="_blank"
              >@barbarestonia</a
            ></span
          >
          <span class="socsp"
            ><font-awesome-icon
              class="footer__socials__icon"
              :icon="['fab', 'facebook-square']"
            ></font-awesome-icon
            ><a href="https://www.facebook.com/barbaramfiteater" target="_blank"
              >@barbaramfiteater</a
            ></span
          >
        </div>
      </div>
      <div class="footer__socials">
        <span class="socsp"
          ><font-awesome-icon
            class="footer__socials__icon"
            :icon="['fas', 'calendar-check']"
          ></font-awesome-icon
          ><a
            href="https://www.facebook.com/events/330945968527636/"
            target="_blank"
            >Barbar Feast 2022</a
          ></span
        >
        <span class="socsp"
          ><font-awesome-icon
            class="footer__socials__icon"
            :icon="['fab', 'facebook-square']"
          ></font-awesome-icon
          ><a href="https://www.facebook.com/barbarfeast/" target="_blank"
            >@barbarfeast</a
          ></span
        >
        <span class="socsp"
          ><font-awesome-icon
            class="footer__socials__icon"
            :icon="['fab', 'instagram']"
          ></font-awesome-icon
          ><a href="https://www.instagram.com/barbarfeast/" target="_blank"
            >@barbarfeast</a
          ></span
        >
      </div>
      <a target="_blank" href="https://xves.rocks"
        ><img
          style="position: fixed; right: 1px; bottom: 1px; width: 35px; height: 35px; transform: rotate(-45deg);"
          src="@/assets/1.webp"
          alt=""
      /></a>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  width: 100%;
  padding: 1.5rem;
  background: $secondary-background-color;
  color: var(--main-text-color);
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1.5;
  font-size: 1rem;

  img {
    width: 200px;
    height: 200px;
  }

  &__contacts {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      text-align: center;
      margin-bottom: 0;
    }

    p {
      text-align: center;
      margin: 0;
      width: 18rem;
    }

    a {
      text-decoration: none;
      color: var(--main-text-color);
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__clubsocials {
    margin: 0.5rem 0 0.25rem 0;
    width: 18rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    & span:nth-of-type(2) {
      margin-left: 0.5rem;
    }
  }

  .socsp {
    margin: 0.15rem 0.3rem;
    display: flex;
    align-items: center;
  }

  &__socials {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;
    width: fit-content;
    height: 5rem;

    a {
      text-decoration: none;
      color: var(--main-text-color);
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }

    &__icon {
      margin-right: 0.25rem;
      font-size: 1.25rem;
    }
  }
}

@media only screen and (min-width: 768px) {
  .footer {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
    }

    &__socials {
      margin: 0;
      align-items: flex-start;
    }

    &__contacts {
      width: 50%;

      h3 {
        margin: 0;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .footer {
    flex-direction: row;

    img {
      height: 125px;
      width: 125px;
    }

    &__clubsocials {
      width: fit-content;

      span {
        margin-left: 0.5rem;
      }
    }

    &__contacts {
      width: fit-content;
    }
  }
}

@media only screen and (min-width: 1440px) {
}
</style>
