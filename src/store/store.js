import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const initialState = {
  books: [],
  loading: false,
  modal: {
    open: false,
    data: null,
  },
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions,
  modules: {},
});
