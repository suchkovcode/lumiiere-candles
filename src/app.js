import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./layouts/app.vue";
import components from "@/components/index";
import router from "@/router/router";

const app = createApp(App);
const pinia = createPinia();

components.forEach((component) => {
   app.component(component.name, component);
});

app.use(router).use(pinia).mount("#root");
