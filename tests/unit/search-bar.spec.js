import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SearchBar from '../../src/components/SearchBar/SearchBar';

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({ state: { books: [] } });

let wrapper;

describe('SearchBar.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchBar, {
      store,
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
