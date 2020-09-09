import Form from './Form.vue';
import FormItem from './FormItem.vue';
import Button from '../Button/index.vue';

const render = (data, template) => ({
  components: {
    LeForm: Form,
    LeFormItem: FormItem,
    LeButton: Button,
  },
  data() {
    return data;
  },
  template,
});

export default {
  title: '表单',
};

export const labelPosition = () => render({ align: 'left' }, `
    <LeForm :label-position="align">
        <LeButton type="primary" @click="align = 'left'">对齐方式 left </LeButton>
        <LeButton type="primary" @click="align = 'right'">对齐方式 right </LeButton>
        <LeButton type="primary" @click="align = 'top'">对齐方式 top </LeButton>
       <div style="padding:20px; ">
          <LeFormItem label="用户名">
              <input type="text" style="height:40px;">
          </LeFormItem>
          <LeFormItem label="密码">
             <input type="text" style="height:40px;">
          </LeFormItem>
        </div>
    </LeForm> 
  `);

export const labelWidth = () => render({ labelWidth: '120px' }, `
  <LeForm label-width="200px">
    <LeFormItem label="用户名">
        1111
    </LeFormItem>
    <LeFormItem label="密码">
        2222
    </LeFormItem>
  </LeForm>
`);

export const inline = () => render({}, `
  <LeForm inline>
    <LeFormItem label="用户名">
        1111
    </LeFormItem>
    <LeFormItem label="密码">
        2222
    </LeFormItem>
  </LeForm>
`);
