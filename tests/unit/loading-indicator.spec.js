import { shallowMount } from '@vue/test-utils';
import LoadingIndicator from '../../src/components/LoadingIndicator/LoadingIndicator';

let wrapper;

describe('LoadingIndicator.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(LoadingIndicator);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
