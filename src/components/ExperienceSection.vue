<template>
  <div class="container">
    <div class="content-experience">
      <h1>{{ t("experienceSection.title") }}</h1>
      <div class="job first-job">
        <div class="job-tile">
          <h4>{{ t("experienceSection.jobs.job1.title") }}</h4>
          <p>{{ t("experienceSection.jobs.job1.date") }}</p>
          <p>{{ t("experienceSection.jobs.job1.company") }}</p>
        </div>
        <div class="job-description">
          <p>{{ t("experienceSection.jobs.job1.description.p1") }}</p>
          <p>{{ t("experienceSection.jobs.job1.description.p2") }}</p>
          <p>{{ t("experienceSection.jobs.job1.description.p3") }}</p>
        </div>
      </div>
      <div class="job second-job">
        <div class="job-tile">
          <h4>{{ t("experienceSection.jobs.job2.title") }}</h4>
          <p>{{ t("experienceSection.jobs.job2.date") }}</p>
          <p>{{ t("experienceSection.jobs.job2.company") }}</p>
        </div>
        <div class="job-description">
          <p>{{ t("experienceSection.jobs.job2.description.p1") }}</p>
        </div>
      </div>
      <div class="job third-job">
        <div class="job-tile">
          <h4>{{ t("experienceSection.jobs.job3.title") }}</h4>
          <p>{{ t("experienceSection.jobs.job3.date") }}</p>
          <p>{{ t("experienceSection.jobs.job3.company") }}</p>
        </div>
        <div class="job-description">
          <p>{{ t("experienceSection.jobs.job3.description.p1") }}</p>
        </div>
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
  max-width: 1036px !important;
  margin: 0 auto;
  margin-top: 120px;

  .content-experience {
    margin: 0 auto;
    margin-bottom: 120px !important;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    h1 {
      font-size: 24px;
      margin-bottom: 8px !important;
      font-weight: bold;
      margin-bottom: 16px !important;
      color: $colorPrimary;
    }

    .job {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: center;

      .job-tile {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 20px;

        h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        p {
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 10px;
        }
      }

      .job-description {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        p {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.5;
          margin-bottom: 8px;
        }
      }
    }

    .second-job {
      margin: 32px 0;
    }

    .third-job {
      h4 {
        width: 80%;
      }
    }
  }
}

@media (max-width: 1024px) {
  .container {
    width: 1016px !important;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 530px !important;
    .content-experience {
      width: 100%;
      padding: 0 20px;

      .job {
        flex-direction: column;
        justify-content: start;

        .job-tile {
          width: 100%;
          justify-content: center;
        }

        .job-description {
          width: 100%;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .container {
    margin-top: 80px;
    width: 395px !important;
  }
}

@media (max-width: 375px) {
  .container {
    width: 355px !important;

    .third-job {
      h4 {
        width: 100% !important;
      }
    }
  }
}

@media (max-width: 320px) {
  .container {
    width: 301px !important;
  }
}
</style>
