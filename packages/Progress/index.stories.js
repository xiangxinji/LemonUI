import Progress from './src';
import Button from '../Button/src/index.vue';
import '../../src/styles/index.scss';

export default {
  title: '进度条',
};

export const baseUsage = () => ({
  components: {
    LeProgress: Progress,
    LeButton: Button,
  },
  data() {
    return {
      d: 30,
    };
  },
  template: `
   <div>
     <le-button size="small" @click="d += 10">加一点</le-button>
     <le-button size="small" @click="d -= 10">减一点</le-button>
     <le-progress :percentage="d"></le-progress>
     <le-progress :percentage="d" theme="danger"></le-progress>
     <le-progress :percentage="d" theme="warning"></le-progress>
     <le-progress :percentage="d" theme="success"></le-progress>
     <le-progress :percentage="d" theme="info"></le-progress>
     <le-progress :percentage="d" theme="light"></le-progress>
     <le-progress :percentage="d" theme="dark"></le-progress>
   </div>
  `,
});

export const strokeWidth = () => ({
  components: {
    LeProgress: Progress,
  },
  template: `
    <le-progress :percentage="20" :stroke-width="10"></le-progress>
  `,
});

export const format = () => ({
  components: {
    LeProgress: Progress,
  },
  template: `      
    <le-progress :percentage="20" :format="v => v+ '%工作进度'"></le-progress>
  `,
});

export const textInside = () => ({
  components: {
    LeButton: Button,
    LeProgress: Progress,
  },
  data() {
    return {
      d: 0,
    };
  },
  template: `
      <div>
        <le-button size="small" @click="d += 10">加一点</le-button>
        <le-button size="small" @click="d -= 10">减一点</le-button>
        <le-progress :percentage="d" :text-inside="true" :stroke-width="27"></le-progress>
      </div>
  `,
});

export const type = () => ({
  components: {
    LeButton: Button,
    LeProgress: Progress,
  },
  data() {
    return {
      d: 70,
    };
  },
  template: `      
    <div style="padding:10px;">
      <le-button size="small" @click="d += 10">加一点</le-button>
      <le-button size="small" @click="d -= 10">减一点</le-button>
      <le-progress :percentage="d" type="circle"></le-progress>
    </div>
  `,
});

export const radius = () => ({
  components: {
    LeButton: Button,
    LeProgress: Progress,
  },
  data() {
    return {
      d: 70,
    };
  },
  template: `      
    <div style="padding:10px;">
      <le-button size="small" @click="d += 10">加一点</le-button>
      <le-button size="small" @click="d -= 10">减一点</le-button>
      <le-progress :percentage="d" type="circle" :radius="100"></le-progress>
    </div>
  `,
});

export const circleStrokeWidth = () => ({
  components: {
    LeButton: Button,
    LeProgress: Progress,
  },
  data() {
    return {
      d: 70,
    };
  },
  template: `      
    <div style="padding:10px;">
      <le-button size="small" @click="d += 10">加一点</le-button>
      <le-button size="small" @click="d -= 10">减一点</le-button>
      <le-progress :percentage="d" type="circle" :radius="100" :stroke-width="10"></le-progress>
    </div>
  `,
});

export const circleTextInside = () => ({
  components: {
    LeButton: Button,
    LeProgress: Progress,
  },
  data() {
    return {
      d: 70,
    };
  },
  template: `      
    <div style="padding:10px;">
      <le-button size="small" @click="d += 10">加一点</le-button>
      <le-button size="small" @click="d -= 10">减一点</le-button>
      <le-progress :text-inside="true" :percentage="d" type="circle" :radius="100" :stroke-width="10"></le-progress>
    </div>
  `,
});



export const circlePrimaryColor = () => ({
  components: {
    LeButton: Button,
    LeProgress: Progress,
  },
  data() {
    return {
      d: 70,
    };
  },
  template: `      
    <div style="padding:10px;">
      <le-button size="small" @click="d += 10">加一点</le-button>
      <le-button size="small" @click="d -= 10">减一点</le-button>
      <le-progress :text-inside="true" :percentage="d" type="circle" :radius="100" :stroke-width="10" color="cyan"></le-progress>
    </div>
  `,
});
