import Vue from 'vue';

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

if (NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
