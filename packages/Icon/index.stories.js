// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import LeIcon from './src/index.vue';
import { renderByTemplate } from '../../utils/storybook';
import '../../src/styles/index.scss';

library.add(fas);

export default {
  title: '图标',
};

const render = renderByTemplate('LeIcon', LeIcon);

export const customer = render(`
    <LeIcon icon="home"></LeIcon>
    <LeIcon icon="car"></LeIcon>
`);

export const customerColor = render(`
    <LeIcon icon="home" color="red"></LeIcon>
`);

export const customerSize = render(`
    <LeIcon icon="home" :size="30"></LeIcon>
`);
