import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BookList from '../../src/components/BookList/BookList';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import LoadingIndicator from '../../src/components/LoadingIndicator/LoadingIndicator';
import BookItem from '../../src/components/BookItem/BookItem';

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({ state: { loading: false } });

let wrapper;

describe('BookList.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BookList, {
      propsData: {
        books: [],
      },
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

  it('has child components', () => {
    expect(wrapper.find(SearchBar)).toBeTruthy();
    expect(wrapper.find(LoadingIndicator)).toBeTruthy();
    expect(wrapper.find(BookItem)).toBeTruthy();
  });
});
