<template>
  <footer>
    <div class="container">
      <div class="responsive row p-4 pb-2 text-white">
        <div class="col-xs-12 col-md-6 col-lg-2">
          <img
            src="@/assets/img/logo-white.png"
            alt="Logo Web Page"
            class="logo"
            width="46"
            height="46"
          />
        </div>
        <div class="col-xs-12 col-md-6 col-lg-2">
          <div class="item-hover mb-2">
            <router-link class="item text-white text-decoration-none" to="/"
              >{{ t("footerSection.link1") }}
            </router-link>
          </div>
          <div class="mb-2">
            <router-link
              class="item text-white text-decoration-none"
              to="/projects"
              >{{ t("footerSection.link2") }}
            </router-link>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="mb-2">
            <router-link
              class="item text-white text-decoration-none"
              to="/contact"
              >{{ t("footerSection.link3") }}
            </router-link>
          </div>
          <div class="responsive-item mb-2 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
              />
            </svg>

            <p class="m-0 ms-2">euss99@hotmail.com</p>
          </div>
          <div class="responsive-item mb-2 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <p class="m-0 ms-2">+52 999-471-2387</p>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="mb-2">
            <div class="mb-2">
              <p>{{ t("footerSection.link6") }}</p>
            </div>
            <div class="mb-2">
              <a href="https://www.facebook.com/urielsoliss">
                <img
                  src="@/assets/img/facebook.png"
                  alt="Icon Facebook"
                  width="36"
                  height="36"
                />
              </a>
              <a href="https://www.instagram.com/uriel139/">
                <img
                  src="@/assets/img/instagram.png"
                  alt="Icon Instagram"
                  class="ms-2"
                  width="36"
                  height="36"
                />
              </a>
              <a href="https://www.linkedin.com/in/euss/">
                <img
                  src="@/assets/img/linkedin.png"
                  alt="Icon LinkedIn"
                  class="ms-2"
                  width="36"
                  height="36"
                />
              </a>
              <a href="https://github.com/euss99">
                <img
                  src="@/assets/img/github.png"
                  alt="Icon GitHub"
                  class="ms-2"
                  width="36"
                  height="36"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="copy col-xs-12">
          <p>Copyright © 2023. All rights are reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

watch(locale, (): void => {
  localStorage.setItem("lang", locale.value);
});
</script>

<style scoped lang="scss">
footer {
  background: $colorPrimary;

  @media (max-width: 575px) {
    .logo {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    div {
      div {
        margin-bottom: 16px;
      }
    }
    .responsive {
      text-align: center;
      margin: 0;
    }
    .responsive-item {
      justify-content: center;
    }
  }

  div {
    div {
      a {
        img {
          transition: 0.3s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .item {
    &:hover {
      color: $colorText1 !important;
    }
  }

  .container {
    margin: 0 auto !important;
    .copy {
      border-top: 1px solid $colorText2;
      font-size: small;
      margin-top: 40px;

      p {
        margin-top: 8px;
      }
    }
  }
}
</style>
