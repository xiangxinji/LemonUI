import { mount } from '@vue/test-utils';
import Icon from '../../packages/Icon';

describe('测试 Icon 组件功能', () => {
  it('Icon 组件 能否渲染出Dom', () => {
    const wrapper = mount(Icon, {
      propsData: {
        icon: 'home',
      },
    });
    expect(wrapper.find('.lemon__icon')).not.toBeNull();
  });

  it('Icon 自定义颜色', () => {
    const wrapper = mount(Icon, {
      propsData: {
        icon: 'home',
        color: 'red',
      },
    });
    expect(wrapper.find('svg').element.style.color).toEqual('red');
  });

  it('Icon 自定义大小', () => {
    const wrapper = mount(Icon, {
      propsData: {
        icon: 'home',
        color: 'red',
        size: 30,
      },
    });
    expect(wrapper.find('svg').element.style.color).toEqual('red');
    expect(wrapper.props('size')).toEqual(30);
  });
});
