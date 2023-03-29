<template>
  <div class="container">
    <div class="project-content">
      <h1>{{ t("projectsPage.title") }}</h1>
      <p>{{ t("projectsPage.description") }}</p>
      <div class="projects-grid">
        <!-- Project 1 -->
        <div class="pro pro__1 mt-4">
          <div class="pro__img">
            <img src="https://i.imgur.com/xP4RBoN.png" alt="Cashflow" />
          </div>
          <div class="pro__text">
            <h3>{{ t("projectsPage.projects.project1.title") }}</h3>
            <p>{{ t("projectsPage.projects.project1.description") }}</p>
            <div class="stack">
              <p>Vue.js</p>
              <p>JavaScript</p>
            </div>
            <div class="links">
              <a target="_blanck" href="https://github.com/euss99/CashFlow">
                {{ t("projectsPage.code") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a
                target="_blanck"
                href="https://cashflow-urielsolis.netlify.app/"
              >
                {{ t("projectsPage.demo") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- Project 2 -->
        <div class="pro pro__1">
          <div class="pro__text">
            <h3>{{ t("projectsPage.projects.project2.title") }}</h3>
            <p>{{ t("projectsPage.projects.project2.description") }}</p>
            <div class="stack">
              <p>Svelte</p>
              <p>JavaScript</p>
            </div>
            <div class="links">
              <a target="_blanck" href="https://github.com/euss99/Catstagram">
                {{ t("projectsPage.code") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a target="_blanck" href="https://catstagram-uriel.netlify.app/">
                {{ t("projectsPage.demo") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="pro__img">
            <img src="https://i.imgur.com/XoAxaQV.png" alt="Cashflow" />
          </div>
        </div>
        <!-- Project 3 -->
        <div class="pro pro__1">
          <div class="pro__img">
            <img src="https://i.imgur.com/XkUW3gO.png" alt="Flappy Bird" />
          </div>
          <div class="pro__text">
            <h3>{{ t("projectsPage.projects.project3.title") }}</h3>
            <p>{{ t("projectsPage.projects.project3.description") }}</p>
            <div class="stack">
              <p>Typescript</p>
              <p>SCSS</p>
            </div>
            <div class="links">
              <a target="_blanck" href="https://github.com/euss99/Flappy-Bird">
                {{ t("projectsPage.code") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a target="_blanck" href="https://euss99.github.io/Flappy-Bird/">
                {{ t("projectsPage.demo") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- Project 4 -->
        <div class="pro pro__1">
          <div class="pro__text">
            <h3>{{ t("projectsPage.projects.project4.title") }}</h3>
            <p>{{ t("projectsPage.projects.project4.description") }}</p>
            <div class="stack">
              <p>Typescript</p>
              <p>SCSS</p>
            </div>
            <div class="links">
              <a target="_blanck" href="https://github.com/euss99/weather-app">
                {{ t("projectsPage.code") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a target="_blanck" href="https://weather-app-euss.netlify.app/">
                {{ t("projectsPage.demo") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="pro__img">
            <img src="https://i.imgur.com/LIzPBdn.png" alt="Weayher App" />
          </div>
        </div>
        <!-- Project 5 -->
        <div class="pro pro__1">
          <div class="pro__img">
            <img src="https://i.imgur.com/KcfkDtj.png" alt="Mi primer juego" />
          </div>
          <div class="pro__text">
            <h3>{{ t("projectsPage.projects.project5.title") }}</h3>
            <p>{{ t("projectsPage.projects.project5.description") }}</p>
            <div class="stack">
              <p>JavaScript</p>
              <p>CSS</p>
            </div>
            <div class="links">
              <a
                target="_blanck"
                href="https://github.com/euss99/videoJuego-JavaScript"
              >
                {{ t("projectsPage.code") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a
                target="_blanck"
                href="https://euss99.github.io/videoJuego-JavaScript/"
              >
                {{ t("projectsPage.demo") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- Project 5 -->
        <div class="pro pro__1">
          <div class="pro__text">
            <h3>{{ t("projectsPage.projects.project6.title") }}</h3>
            <p>{{ t("projectsPage.projects.project6.description") }}</p>
            <div class="stack">
              <p>JavaScript</p>
              <p>CSS</p>
            </div>
            <div class="links">
              <a
                target="_blanck"
                href="https://github.com/euss99/calculadoraBasica"
              >
                {{ t("projectsPage.code") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <a
                target="_blanck"
                href="https://euss99.github.io/calculadoraBasica/"
              >
                {{ t("projectsPage.demo") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="pro__img">
            <img
              src="https://i.imgur.com/f9t9IO0.png"
              alt="Calculadora básica"
            />
          </div>
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
  height: auto;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 100px;
  max-width: 1070px;
  padding: 0 40px;

  .project-content {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 28px;
      font-weight: bold;
      color: $colorPrimary;
      margin-bottom: 12px;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    .projects-grid {
      display: grid;
      gap: 80px;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      height: auto;
      width: 100%;

      .pro {
        display: flex;
      }

      .pro__1 {
        flex-direction: row;
        gap: 80px;
        height: 400px;
        padding: 20px;

        .pro__img {
          border-radius: 17px;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
          height: auto;
          overflow: hidden;
          width: 530px;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }

        .pro__text {
          display: flex;
          flex-direction: column;
          height: auto;
          justify-content: center;
          text-align: center;
          width: 300px;

          h3 {
            font-size: 17px;
            font-weight: bold;
            margin-bottom: 20px;
            text-transform: uppercase;
          }

          p {
            color: #767676;
            font-size: 17px;
            font-weight: 400;
            text-align: center;
            text-transform: none;
          }

          .stack {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 10px;

            p {
              color: $colorText1;
              border-radius: 8px;
              font-weight: 600;
              padding: 10px 13px;
            }
          }

          .links {
            align-items: center;
            display: flex;
            gap: 10px;
            justify-content: space-evenly;
            margin-top: 30px;

            a {
              color: #2d2e32;
              font-size: 17px;
              font-weight: 500;
              gap: 5px;
              text-decoration: none;

              &:hover {
                color: $colorPrimary;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1020px) {
  .container {
    .project-content {
      .projects-grid {
        .pro__1 {
          flex-direction: column !important;
          gap: 30px;
          height: 750px;
          margin: 0 auto;
          width: fit-content;
          max-width: 530px;

          .pro__img {
            width: 100%;
            order: -1 !important;
          }

          .pro__text {
            margin: 0 auto;

            .links {
              justify-content: center;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .pro__1 {
    height: 700px !important;
  }
}

@media (max-width: 425px) {
  .pro__1 {
    height: 600px !important;
  }
}

@media (max-width: 375px) {
  .container {
    .project-content {
      .projects-grid {
        .pro__1 {
          padding: 0 5px !important;
        }
      }
    }
  }
}

@media (max-width: 320px) {
  .container {
    .project-content {
      .projects-grid {
        .pro__1 {
          height: 550px !important;

          .pro__img {
            max-width: 240px;
            width: 100%;
          }

          .pro__text {
            max-width: 240px;
            margin: 0 auto;

            .links {
              justify-content: center;
            }
          }
        }
      }
    }
  }
}
</style>
