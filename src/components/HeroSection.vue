<template>
  <div class="header">
    <!--Content before waves-->
    <div class="inner-header flex">
      <div class="content">
        <div class="row">
          <div class="container-text col-md-6">
            <span>{{ t("heroSection.title") }} 👋🏼</span>
            <h3>{{ t("heroSection.subtitle") }}</h3>
            <p>{{ t("heroSection.content") }}</p>
            <button class="btn btn-secondary">
              {{ t("heroSection.button2") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--Waves Container-->
    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped lang="scss">
.header {
  position: relative;
  text-align: center;
  background: $colorPrimary;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  width: 100%;
  display: flex;
  align-items: center;

  .row {
    text-align: center;
    width: 80%;
    height: auto;
    margin: 0 auto;

    .container-text {
      margin: auto;
      span {
        font-size: 3rem;
        font-weight: 500;
        color: $colorText2;
        margin-bottom: 12px;
      }

      h3 {
        margin-bottom: 12px;
        font-size: 2.5rem;
        font-weight: 500;
        color: $colorText2;
      }

      p {
        font-size: 1.5rem;
        font-weight: 300;
        color: $colorText2;
        margin-bottom: 12px;
      }

      .btn {
        font-size: 14px;
        font-weight: 300;
        color: white;
        margin-right: 12px;
        padding: 8px 16px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scale(1.05);
        }
      }

      .btn-secondary {
        background: $colorPrimary;
        border: 2px solid $colorText2;
        color: $colorText2;
      }
    }
  }
}
/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .container-text {
    width: 100%;
    padding: 0;
  }
  .waves {
    height: 40px;
    min-height: 40px;
  }
}
</style>
