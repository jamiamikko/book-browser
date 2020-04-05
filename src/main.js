import Vue from 'vue';
import App from './App.vue';
import store from './store/store';

import './style.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

const link = document.createElement('link');
link.href =
  'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap';

link.rel = 'stylesheet';
link.async = true;

document.getElementsByTagName('head')[0].appendChild(link);
