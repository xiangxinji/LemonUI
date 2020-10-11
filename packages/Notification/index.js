import Notification from './src/index.vue';
import NotificationManager from './src/notification.js';

Notification.install = function install(Vue) {
  const NotificationConstruct = Vue.extend(Notification);
  const Notice = (props) => {
    const instance = new NotificationConstruct({
      propsData: props,
    });
    instance.vm = instance.$mount();
    instance.vm.top = 0;
    document.documentElement.appendChild(instance.vm.$el);
    instance.vm.notificationManager = NotificationManager.push(instance.vm);
    return instance;
  };
  Vue.prototype.$notice = Notice;
};

export default Notification;
