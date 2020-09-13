import LeButton from './src/index.vue';
import { renderByTemplate } from '../../utils/storybook';
import '../../src/styles/index.scss';

export default {
  title: '按钮',
};

const render = renderByTemplate('LeButton', LeButton);

export const customerType = () => render(`
    <LeButton> default button</LeButton>
    <LeButton type="primary"> primary  button</LeButton>
    <LeButton type="success"> success  button</LeButton>
    <LeButton type="warning"> warning  button</LeButton>
    <LeButton type="danger"> danger  button</LeButton>
`);

export const customerSize = () => render(`
    <LeButton> default size </LeButton>
    <LeButton size="small"> small size </LeButton>
    <LeButton size="mini"> mini size </LeButton>
`);

export const round = () => render(`
    <LeButton round> round button </LeButton>
    <LeButton round type="primary"> round primary button </LeButton>
`);
