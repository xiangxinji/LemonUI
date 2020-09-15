import { mount } from '@vue/test-utils';
import Link from '../../packages/Link';

describe('测试 Link 标签的基础功能', () => {
  it('Link 是否成功渲染出DOM', () => {
    const wrapper = mount(Link);
    expect(wrapper.element).not.toBeNull();
    expect(wrapper.classes('lemon__link')).toBeTruthy();
    expect(wrapper.classes('link-underline')).toBeTruthy();
    expect(wrapper.classes('link-type-default')).toBeTruthy();
  });

  it(' Link 取消下划线', () => {
    const wrapper = mount(Link, {
      propsData: {
        underline: false,
      },
    });
    expect(wrapper.classes('link-underline')).toBeFalsy();
  });

  it('测试 Link default slot ', async () => {
    const wrapper = mount(Link, {
      slots: {
        default: '<div>点我</div>',
      },
    });
    expect(wrapper.find('div').text()).toEqual('点我');
  });
});
