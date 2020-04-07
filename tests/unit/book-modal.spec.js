import { shallowMount } from '@vue/test-utils';
import BookModal from '../../src/components/BookModal/BookModal';

let wrapper;

describe('BookModal.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BookModal, {
      propsData: {
        data: {
          title: 'title',
          authors: ['author'],
          covers: {
            thumbnail: 'thumbnail.jpg',
            large: 'large.jpg',
          },
          year: 1234,
        },
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
