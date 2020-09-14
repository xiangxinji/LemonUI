import { mount } from '@vue/test-utils';
import Button from '../../packages/Button';

describe('测试Button组件的基础功能', () => {
  it('Button 组件的默认 classes ', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes('lemon__button')).toBeTruthy();
    expect(wrapper.classes('button-type-default')).toBeTruthy();
    expect(wrapper.classes('button-size-medium')).toBeTruthy();
    // 不存在 round 类
    expect(wrapper.classes('button-round')).not.toBeTruthy();
  });
  it('Button 组件是否可以使用type ', () => {
    const wrapper = mount(Button, {
      propsData: {
        type: 'primary',
      },
    });
    expect(wrapper.find('.button-type-primary')).not.toBeNull();
  });

  it('Button 组件是否可以使用 size ', () => {
    const wrapper = mount(Button, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper.find('.button-size-small')).not.toBeNull();
  });

  it('Button 组件是否可以变成圆角', () => {
    const wrapper = mount(Button, {
      propsData: {
        round: true,
      },
    });
    expect(wrapper.find('.button-round')).not.toBeNull();
  });
});
