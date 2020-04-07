import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';
import TheHeader from '../../src/components/TheHeader/TheHeader';
import BookList from '../../src/components/BookList/BookList';
import TheFooter from '../../src/components/TheFooter/TheFooter';
import BookModal from '../../src/components/BookModal/BookModal';

let wrapper;

describe('App.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has child components', () => {
    expect(wrapper.find(TheHeader)).toBeTruthy();
    expect(wrapper.find(BookList)).toBeTruthy();
    expect(wrapper.find(TheFooter)).toBeTruthy();
    expect(wrapper.find(BookModal)).toBeTruthy();
  });
});
