import { defineAsyncComponent } from 'vue';
import { createWebHistory, createMemoryHistory, createRouter } from 'vue-router';

const lazyload = (component = () => {}) => defineAsyncComponent({
  loader: component,
  loadingComponent: '<h1>Loading...</h1>',
});

const history = SSR === 'true' ? createMemoryHistory() : createWebHistory();
const HomePage = lazyload(() => import('pages/HomePage'));
const PageNotFound = lazyload(() => import('pages/PageNotFound'));

export default createRouter({
  history,
  routes: [
    { path: '/', exact: true, component: HomePage },
    { path: '/404', exact: true, component: PageNotFound },
  ],
});
