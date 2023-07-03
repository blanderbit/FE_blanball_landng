import { createI18n } from "vue-i18n";
import UA_LANGUAGE from "../i18n/ua/index";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "ua",
    globalInjection: true,
    messages: {
      ua: UA_LANGUAGE
    }
  });
  vueApp.use(i18n);
});
