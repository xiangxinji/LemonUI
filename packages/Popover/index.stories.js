import Popover from './src/index.vue';
import Button from '../Button/index';
import '../../src/styles/index.scss';

export default {
  title: '弹出框',
};

export const baseUsage = () => ({
  components: {
    [Popover.name]: Popover,
    [Button.name]: Button,
  },
  template: `
    <div style="padding:300px;">
    <le-popover>
      <le-button> Click Me</le-button>
    </le-popover>
    </div>
  `,
});

export const placement = () => ({
  components: {
    [Popover.name]: Popover,
    [Button.name]: Button,
  },
  template: `
    <div style="padding:300px;">
    <le-popover placement="bottom">
      <le-button> Click Me boottom</le-button>
    </le-popover>
    <le-popover placement="left">
      <le-button> Click Me left </le-button>
    </le-popover>
    <le-popover placement="right">
      <le-button> Click Me right </le-button>
    </le-popover>
    </div>
  `,
});
