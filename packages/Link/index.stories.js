import LeLink from './src/index.vue';

import { renderByTemplate } from '../../utils/storybook';
import '../../src/styles/index.scss';

export default {
  title: '链接',
};

const render = renderByTemplate('LeLink', LeLink);

export const customerType = render(`
    <LeLink>默认链接</LeLink>
    <LeLink type="primary">主要链接</LeLink>
    <LeLink type="success">成功链接</LeLink>
    <LeLink type="info">信息链接</LeLink>
    <LeLink type="warning">警告链接</LeLink>
    <LeLink type="danger">危险链接</LeLink>
`);

export const underline = render(`
    <LeLink :underline="false" href="https://www.baidu.com">百度链接</LeLink>
`);

export const href = render(`
    <LeLink  href="https://www.baidu.com">百度链接</LeLink>
`);
