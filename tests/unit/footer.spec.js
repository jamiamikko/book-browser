import { shallowMount } from '@vue/test-utils';
import TheFooter from '../../src/components/TheFooter/TheFooter';

let wrapper;

describe('TheFooter.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TheFooter);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
