import Input from './src';

export default {
  title: '输入框',
};

const render = (template) => ({
  components: {
    LeInput: Input,
  },
  data() {
    return {
      value: '123',
    };
  },
  template,
});

export const baseUsage = () => render(`
     <div>
        {{ value }}
        <le-input v-model="value"></le-input>
     </div>
`);

export const type = render(`
  <div>
    <div>
        type = text {{ value }}
        <hr />
        <le-input type="text" v-model="value"></le-input>
    </div>
    <div>
        type = textarea {{ value }}
        <hr />
        <le-input type="textarea" v-model="value" style="width:410px;" :rows="6"></le-input>
    </div>
     <div>
        type = password {{ value }}
        <hr />
        <le-input type="password" v-model="value"></le-input>
    </div>
  </div>
`);

export const maxLengthOrMinLength = render(`
  <div>
    {{value }}
    <le-input v-model="value" :max-length="10" :min-length="3"/>
  </div>
`);

export const placeholder = render(`
  <div>
    <le-input v-model="value" placeholder="请输入"></le-input>
  </div>
`)

export const disabled = render(`
  <div>
    <div>
      type = text {{ value }} 
      <le-input v-model="value" disabled></le-input>
    </div>
    <div>
       type = textarea {{ value }} 
       <le-input type="textarea" v-model="value" disabled></le-input>
    </div>
  </div>  
`);

export const resize = render(`
  <div>
    <le-input type="textarea" v-model="value" resize="horizontal"></le-input>
    <le-input type="textarea" v-model="value" resize="both"></le-input>
  </div>
`);

export const readOnly = render(`
  <div>
    type = text 
    <le-input v-model="value" readonly></le-input>
    <hr />
    type = textarea 
    <le-input v-model="value" readonly type="textarea"></le-input>
  </div>
`);
