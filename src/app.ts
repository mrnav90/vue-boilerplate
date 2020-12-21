import 'reflect-metadata';
import { createApp } from 'vue';
import HomePage from './pages/HomePage.vue';

createApp(HomePage).mount('#app');

if (NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
