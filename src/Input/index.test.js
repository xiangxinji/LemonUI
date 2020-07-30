import { shallowMount } from '@vue/test-utils';
import Comp from './index.vue';

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}

describe('checked', () => {
  it('case one ', () => {
    const wrapper = getMountedComponent(Comp, {});
    expect(wrapper.text()).toEqual('这是一个input 组件');
  });
});
