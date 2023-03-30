<template>
  <div class="container">
    <h1>{{ t("contactPage.title") }}</h1>
    <p>{{ t("contactPage.subtitle") }}</p>
    <form class="form" action="https://formspree.io/f/mjvdavod" method="POST">
      <div class="form__container">
        <label for="nombre">{{ t("contactPage.form.label_name") }}</label>
        <input type="text" class="form__input" id="nombre" name="name" />

        <label for="email">{{ t("contactPage.form.label_email") }}</label>
        <input type="email" class="form__input" id="email" name="email" />

        <label for="mensaje">{{ t("contactPage.form.label_message") }}</label>
        <textarea
          class="form__input form__input--message"
          id="mensaje"
          name="message"
        ></textarea>

        <input type="submit" value="Enviar" class="form__cta" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped lang="scss">
.container {
  height: 73.2vh;
  display: grid;
  place-content: center;
  margin: 0 auto !important;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: $colorPrimary;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    width: 85%;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .form {
    width: 75% !important;
    border: 2px solid $colorPrimary;
    margin: 0 auto;
    max-width: 425px !important;
    border-radius: 1em;
    padding: 1.5em 1.5em 2em 1.5em;

    .form__container {
      width: 100%;
      display: grid;
      gap: 1em;
      grid-auto-columns: 100%;

      .form__input {
        padding: 0.5em 1em;
        border: 2px solid $colorPrimary;
        border-radius: 0.5em;
        font-size: 1rem;
        font-weight: 400;

        &:focus {
          outline: none;
        }
      }

      .form__input--message {
        resize: none;
        margin-bottom: 1.5em;
      }

      .form__cta {
        background-color: $colorPrimary;
        color: $colorText2;
        border: none;
        border-radius: 0.5em;
        padding: 0.5em 1em;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: $colorHover;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    p {
      text-align: center !important;
    }
  }
}

@media (max-width: 425px) {
  .container {
    .form {
      width: 90% !important;
    }
  }
}

@media (min-width: 320px) {
  .container {
    h1 {
      width: 80%;
      margin: 0 auto;
    }

    p {
      width: 80%;
      margin: 12px auto;
    }

    .form {
      width: 85%;
      max-width: 600px;
    }
  }
}
</style>
