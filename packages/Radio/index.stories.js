import '../../src/styles/index.scss';
import RadioGroup from '../RadioGroup';
import Radio from './src';

export default {
  title: '单选',
};

export const baseUasge = () => ({
  components: {
    LeRadio: Radio,
    LeRadioGroup: RadioGroup,
  },
  data() {
    return {
      value: '1',
    };
  },
  template: `
   <div>
       <LeRadioGroup v-model="value">
         <LeRadio value="1" label="点我1"></LeRadio>
         <LeRadio value="2" label="点我2"></LeRadio>
         <LeRadio value="3" label="点我3"></LeRadio>
       </LeRadioGroup>
   </div>
  `,
});
