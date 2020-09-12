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

export const baseValidate = () => ({
  components: {
    LeForm: Form,
    LeFormItem: FormItem,
    LeButton: Button,
  },
  data() {
    return {
      formData: {
        username: 'a',
        password: '123456',
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名' },
          { maxLength: 10, minLength: 2, message: '2-10的用户名' },
        ],
        password: { required: true, message: '请输入密码' },
      },
    };
  },
  methods: {
    validator() {
      this.$refs.leform.validate();
    },
  },
  template: ` 
   <div style="padding:10px;">
     <LeButton @click="validator">调用验证</LeButton>
     <LeForm ref="leform" :rules="formRules" :model="formData">
       <LeFormItem label="用户名" prop="username"></LeFormItem>
       <LeFormItem label="密码" prop="password"></LeFormItem>
     </LeForm>
   </div>
  `,
});

export const customerValidateFunction = () => ({
  components: {
    LeForm: Form,
    LeFormItem: FormItem,
    LeButton: Button,
  },
  data() {
    const validatorUserName = (r, v, cb) => {
      setTimeout(() => {
        cb(v === 'admin' ? null : new Error('没找到这个用户名'));
      }, 1000);
    };
    return {
      formData: {
        username: 'a',
        password: '123456',
      },
      formRules: {
        username: [
          { validator: validatorUserName },
          { minLength: 2, maxLength: 10, message: '请输入合理的密码' },
        ],
        password: { required: true, message: '请输入密码' },
      },
    };
  },
  methods: {
    validator() {
      this.$refs.leform.validate().then(() => {
        console.log('校验成功');
      }).catch(() => {
        console.log('校验失败');
      });
    },
  },
  template: ` 
   <div style="padding:10px;">
     <LeButton @click="validator">调用验证</LeButton>
     <input type="text" v-model="formData.username">
     <LeForm ref="leform" :rules="formRules" :model="formData">
       <LeFormItem label="用户名" prop="username">{{  formData.username }}</LeFormItem>
       <LeFormItem label="密码" prop="password">{{  formData.password }}</LeFormItem>
     </LeForm>
   </div>
  `,
});
