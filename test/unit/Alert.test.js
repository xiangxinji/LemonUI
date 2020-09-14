import { mount } from '@vue/test-utils';
import Alert from '../../packages/Alert';

describe('测试Alert基础功能', () => {
  it('Alert组件是否渲染出Dom', () => {
    const wrapper = mount(Alert);
    expect(wrapper.find('div')).not.toBeNull();
  });

  it('Alert组件是否可以传入type', () => {
    const wrapper = mount(Alert, {
      propsData: {
        type: 'success',
      },
    });
    expect(wrapper.find('type__success')).not.toBeNull();
  });

  it('Alert组件描述信息是否正常', () => {
    const wrapper = mount(Alert, {
      propsData: {
        description: '这是一个测试description box',
      },
    });
    expect(wrapper.find('.description-box')).not.toBeNull();
  });

  it('Alert 组件的 effect 主题,是否正常', () => {
    const wrapper = mount(Alert, {
      propsData: {
        effect: 'dark',
      },
    });
    expect(wrapper.find('.effect__dark')).not.toBeNull();
  });

  it('Alert 组件是否可以自定义传入关闭文本', () => {
    const wrapper = mount(Alert, {
      propsData: {
        closeText: '关闭',
      },
    });
    expect(wrapper.find('.close-wrapper span').text()).toEqual('关闭');
  });

  it('Alert 组件是否可以正常关闭', async () => {
    const wrapper = mount(Alert);
    await wrapper.find('.close-wrapper').trigger('click');
    // 此时透明度为0
    expect(wrapper.element.style.opacity).toEqual('0');
  });

  it('Alert 组件的 center 属性是否可以使用', () => {
    const wrapper = mount(Alert, {
      propsData: {
        center: true,
      },
    });
    expect(wrapper.find('center')).not.toBeNull();
  });
});
