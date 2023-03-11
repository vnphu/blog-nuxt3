import { ObserveVisibility } from "vue-observe-visibility";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use("observe-visibility", ObserveVisibility);
});
