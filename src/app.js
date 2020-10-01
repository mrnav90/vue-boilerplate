import { createApp } from 'vue';

const App = {
  data() {
    return {
      name: 'Gregg',
    };
  },
  template: '<h1>Hello {{ name }}</h1>',
};

createApp(App).mount('#app');

if (NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
