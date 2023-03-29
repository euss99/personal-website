<template>
  <div class="container">
    <div class="content-education">
      <h1>{{ t("educationSection.title") }}</h1>
      <div class="education-1">
        <h4>{{ t("educationSection.school1.title") }}</h4>
        <p>{{ t("educationSection.school1.date") }}</p>
        <p>{{ t("educationSection.school1.school") }}</p>
      </div>
      <div class="line"></div>
      <div class="education-2">
        <h4>{{ t("educationSection.school2.title") }}</h4>
        <p>{{ t("educationSection.school2.date") }}</p>
        <p>{{ t("educationSection.school2.school") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped lang="scss">
.container {
  max-width: 1004px !important;
  margin: 0 auto;
  margin-top: 120px;
  .content-education {
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px !important;
      color: $colorPrimary;
    }

    .education-1 {
      h4 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      p {
        font-size: 16px;
        margin-bottom: 8px;
      }
    }
    .line {
      width: 100%;
      border-bottom: dashed 2px $colorPrimary; /* Cambiamos la propiedad background-color por border-bottom y establecemos border-style en dashed */
      margin: 30px 0;
    }

    .education-2 {
      h4 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      p {
        font-size: 16px;
        margin-bottom: 8px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .container {
    width: 980px !important;
  }
}

@media (max-width: 768px) {
  .container {
    width: 500px !important;
    margin-top: 100px;
  }
}

@media (max-width: 425px) {
  .container {
    margin-top: 80px;
    width: 360px !important;
  }
}

@media (max-width: 375px) {
  .container {
    width: 320px !important;
  }
}

@media (max-width: 320px) {
  .container {
    width: 276px !important;
  }
}
</style>
