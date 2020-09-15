import { mount } from '@vue/test-utils';
import Switch from '../../packages/Switch';

describe('测试 Swit 组件的基本功能', () => {
  it('是否成功渲染 , 是否可以正常使用', async () => {
    const wrapper = mount(Switch);
    expect(wrapper.classes('lemon-switch')).toBeTruthy();
    await wrapper.trigger('click');
    expect(wrapper.classes('is-checked')).toBeFalsy();
  });
});
