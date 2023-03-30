<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <img
        class="logo"
        src="../assets/img/logo-white.png"
        alt="Logo web page"
        width="34"
        height="32"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleCollapsed"
      >
        <!-- Change icon -->
        <template v-if="collapsed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2rem"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </template>
        <template v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2rem"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </template>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="responsive-list nav justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">{{
              t("navbar.link1")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">{{
              t("navbar.link2")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">{{
              t("navbar.link3")
            }}</router-link>
          </li>
          <li class="lenguage nav-item dropdown">
            <select v-model="locale">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

// Toggle the navbar when the screen is small.
const collapsed = ref(true);
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};

// Watch for changes in the locale and save it to localStorage.
watch(locale, (): void => {
  localStorage.setItem("lang", locale.value);
});
</script>

<style scoped lang="scss">
.navbar {
  background: $colorPrimary;
  justify-content: center !important;
  padding: 8px 0px !important;

  .container {
    margin: 0px auto !important;
    padding: 0px 12px !important;
    .logo {
      margin: 4px 12px !important;
    }

    .navbar-toggler {
      border: none !important;

      &:focus {
        box-shadow: none !important;
        border: none !important;
      }
    }

    .nav-link {
      padding: 8px 16px !important;
    }

    div {
      a {
        color: $colorText2;

        &:hover {
          color: black !important;
        }
      }
    }

    .lenguage {
      top: 7px !important;
      height: 22px !important;

      select {
        border-radius: 5px;
        margin-left: 16px;
        background: none;
        border: none !important;
        color: $colorText2;
        cursor: pointer;

        option {
          color: $colorText1;
        }

        &:hover {
          color: black !important;
        }

        &:focus {
          outline: none !important;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .container {
    padding: 0px 8% !important;
    margin: 0 6% !important;

    .responsive-list {
      width: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 0px 0px 0px 0px !important;
      padding: 0px 0px 0px 0px !important;
      list-style: none !important;

      li {
        margin: 0px 0px 0px 0px !important;
        padding: 0px 0px 0px 0px !important;
        width: 100% !important;
        text-align: center !important;
      }

      .lenguage {
        margin-bottom: 16px !important;
      }
    }
  }
}
</style>
