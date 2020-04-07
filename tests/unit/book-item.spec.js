import { shallowMount } from '@vue/test-utils';
import BookItem from '../../src/components/BookItem/BookItem';

let wrapper;

describe('BookItem.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BookItem, {
      propsData: {
        title: 'title',
        authors: ['author'],
        covers: {
          thumbnail: 'thumbnail.jpg',
          large: 'large.jpg',
        },
        year: 1234,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
