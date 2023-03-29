<template>
  <div class="container">
    <div class="about-me">
      <div class="about-me__img">
        <img
          class="img-content"
          src="../assets/img/personalImg.jpeg"
          alt="Personal Img"
        />

        <div class="spinning-text-wrapper">
          <div class="spinning-text">
            <p>
              <span
                v-for="(letter, i) in text"
                :key="i"
                :style="{ transform: `rotate(${deg * i}deg)` }"
                >{{ letter }}</span
              >
            </p>
          </div>
          <img src="../assets/img/emoji.png" alt="Emoji" />
        </div>
      </div>
      <div class="about-me__text">
        <h1>{{ t("aboutSection.title") }}</h1>
        <p>{{ t("aboutSection.content.sectionP1") }}</p>
        <p>{{ t("aboutSection.content.sectionP2") }}</p>
        <p>{{ t("aboutSection.content.sectionP3") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const text = ref("FRONT-END DEVELOPER WEB ");
const length = text.value.length;
const deg = 360 / length;
</script>

<style scoped lang="scss">
.container {
  padding: 0 !important;
  margin-top: 120px;

  .about-me {
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .about-me__img {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .img-content {
        width: 425px;
        border-radius: 16px;
        object-fit: cover;
      }

      .spinning-text-wrapper {
        position: absolute;
        bottom: 0;
        left: 73%;
        transform: translateY(23%);
        width: 175px;
        height: 175px;
        background-color: white;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-weight: bold;

        .spinning-text {
          position: absolute;
          width: 100%;
          height: 100%;
          margin: 0;
          animation: spin 50s linear infinite;

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          span {
            position: absolute;
            top: 0;
            left: 50%;
            transform-origin: 0 87.5px;
          }
        }

        img {
          width: 70px;
          height: 70px;
        }
      }
    }

    .about-me__text {
      max-width: 475px;
      margin-left: 86px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 24px;
        margin-bottom: 8px !important;
        font-weight: bold;
        margin-bottom: 24px;
        color: $colorPrimary;
      }

      p {
        font-size: 16px;
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 8px;
      }
    }
  }
}

@media (max-width: 991px) {
  .about-me {
    flex-direction: column;
    align-items: center;

    .about-me__img {
      margin-bottom: 24px;

      .img-content {
        width: 100%;
      }

      .spinning-text-wrapper {
        left: 50%;
        transform: translate(-50%, 23%);
      }
    }

    .about-me__text {
      margin-left: 0 !important;
      margin-top: 24px;
      max-width: 100%;
    }
  }
}

@media (max-width: 590px) {
  .about-me {
    .about-me__img {
      margin-bottom: 0px !important;
      .img-content {
        width: 80% !important;
      }
      .spinning-text-wrapper {
        display: none !important;
      }
    }

    .about-me__text {
      width: 80% !important;
    }
  }
}
</style>
