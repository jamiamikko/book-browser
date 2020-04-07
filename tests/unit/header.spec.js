import { shallowMount } from '@vue/test-utils';
import TheHeader from '../../src/components/TheHeader/TheHeader';

let wrapper;

describe('TheHeader.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TheHeader);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
