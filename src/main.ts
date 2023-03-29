import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import translations from "@/i18n/i18n";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap";

const i18n = createI18n({
  locale: "es", // lengua por defecto
  fallbackLocale: "es",
  legacy: false,
  messages: translations,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
