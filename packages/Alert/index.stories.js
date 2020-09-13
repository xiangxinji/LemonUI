// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import LeAlert from './src/index.vue';
import { renderByTemplate } from '../../utils/storybook';
import '../../src/styles/index.scss';

library.add(fas);

export default {
  title: '弹框',
};

const render = renderByTemplate('LeAlert', LeAlert);

export const customerType = () => render(`
    <LeAlert>这是一个令人深思的结局</LeAlert>
    <LeAlert type="success">这是一个令人深思的结局</LeAlert>
    <LeAlert type="warning">这是一个令人深思的结局</LeAlert>
    <LeAlert type="danger">这是一个令人深思的结局</LeAlert>
`);

export const hasDescription = render(`
    <LeAlert title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
    <LeAlert type="success" title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
    <LeAlert type="warning" title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
    <LeAlert type="danger" title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
`);

export const effects = render(`
    <LeAlert effect="dark" title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
    <LeAlert effect="dark" type="success" title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
    <LeAlert effect="dark" type="warning" title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
    <LeAlert effect="dark" type="danger" title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
`);

export const notClosing = render(`
    <LeAlert effect="dark" :closable="false" type="success" title="这是一个令人深思的结局" description="这一切的一切拥有着紧密的关联!!!"></LeAlert>
`);

export const customerCloseText = render(`
    <LeAlert close-text="知道了"> 这是一个令人深思的结局 </LeAlert>
`);

export const center = render(`
    <LeAlert center>这一定是一个无休止的谎言</LeAlert>
`);
