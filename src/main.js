import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-nq6cgd3w773e7fxn.us.auth0.com",
    client_id: "ABzoL7M4BtDtDTA9R4OdLzyHtoXGA4Zl",
    redirect_uri: window.location.origin
  })
);

app.mount('#app');
