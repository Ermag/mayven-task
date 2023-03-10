import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia'
import './plugins/axios';
import { i18n } from './plugins/i18n';
import App from './App.vue'
import router from './router';
import { APP_CONFIG } from './config';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme */
import './theme/variables.css';
import './theme/fonts.css';
import './theme/app.css';

// Plugins
import '@capacitor-community/camera-preview'

// Create the app store using Pinia
const pinia = createPinia();

// Setup the Vue App
const app = createApp(App)
  .use(IonicVue)
  .use(pinia)
  .use(router)
  .use(i18n)
  .use(VueAxios, axios);

// Set providers
app.provide('axios', app.config.globalProperties.axios);
app.provide('$config', APP_CONFIG);

router.isReady().then(() => {
  app.mount('#app');
});
