import Vue from 'vue';
import Router from 'vue-router';
import ChaosForm from './components/chaos-form/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: ChaosForm,
    },
  ],
});
