import LeMenu from './src/menu.vue';
import LeMenuItem from './src/menu-item.vue';
import LeSubMenu from './src/submenu.vue';

import { renderByComponents } from '../../utils/storybook';
import '../../src/styles/index.scss';

const render = renderByComponents({
  LeMenu, LeMenuItem, LeSubMenu,
});
export default {
  title: '菜单',
};

export const baseUsage = render(`
  <LeMenu>
    <LeMenuItem index="1">我的面板</LeMenuItem>
    <LeMenuItem index="2">我的工作台</LeMenuItem>
    <LeMenuItem index="3">待处理事项</LeMenuItem>
  </LeMenu>
`);

export const Model = render(`
  <div>
    <span>水平</span>
      <LeMenu>
        <LeMenuItem index="1">处理中心</LeMenuItem>
        <LeMenuItem index="2">我的工作台</LeMenuItem>
        <LeMenuItem index="3">订单管理</LeMenuItem>
        <LeMenuItem index="4">用户管理</LeMenuItem>
        <LeMenuItem index="5">2</LeMenuItem>
        <LeMenuItem index="6" disabled>3</LeMenuItem>
      </LeMenu>
       <div style="margin-top:30px;"></div>
       <span>垂直</span>
      <LeMenu model="horizontal">
        <LeMenuItem index="1">处理中心</LeMenuItem>
        <LeMenuItem index="2">我的工作台</LeMenuItem> 
        <LeMenuItem index="3">订单管理</LeMenuItem>
        <LeMenuItem index="4">用户管理</LeMenuItem>
        <LeMenuItem index="5">2</LeMenuItem>
        <LeMenuItem index="6" disabled>3</LeMenuItem>
      </LeMenu>
  </div>
`);

export const submenu = () => render(`
  <div>
     <div style="margin-top:30px;"></div>
       <span>垂直</span>
       <LeMenu model="horizontal">
        <LeMenuItem index="1">处理中心</LeMenuItem>
        <LeMenuItem index="2">我的工作台</LeMenuItem>
        <LeMenuItem index="3">订单管理</LeMenuItem>
        <LeSubMenu index="4">
            <span slot="title">订单处理4-0</span>
            <LeMenuItem index="4-1">订单处理4-1</LeMenuItem>
            <LeMenuItem index="4-2">订单处理4-2</LeMenuItem>
        </LeSubMenu>
        <LeSubMenu index="5">
            <span slot="title">订单处理5-0</span>
            <LeMenuItem index="5-1">订单处理5-1</LeMenuItem>
            <LeMenuItem index="5-2">订单处理5-2</LeMenuItem>
            <LeSubMenu index="5-3">
                <span slot="title">订单处理5-3-0</span>
                 <LeMenuItem index="5-3-1">订单处理5-3-1</LeMenuItem>
                 <LeMenuItem index="5-3-2">订单处理5-3-2</LeMenuItem>
            </LeSubMenu>
        </LeSubMenu>
      </LeMenu>
  </div>
`);
