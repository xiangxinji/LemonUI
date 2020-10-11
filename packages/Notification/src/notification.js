class NotificationManager {
  constructor(index) {
    this.index = index;
    this.instances = [];
  }

  getIndex() {
    return this.index;
  }

  push(notification) {
    const { height } = window.getComputedStyle(notification.$el);
    const h = window.parseInt(height.split('px')[0], 10);
    const result = { instance: notification, index: this.index, height: h };
    this.instances.push(result);
    this.resetTopSize();
    this.index += 1;
    this.mt = 10;
    return result;
  }

  get(notification) {
    const i = this.instances.findIndex((item) => item.instance === notification);
    return i !== -1 ? this.instances[i] : null;
  }

  remove(notification) {
    const i = this.instances.findIndex((item) => item.instance === notification);
    if (i !== -1) {
      this.instances.splice(i, 1);
      this.resetTopSize();
    }
  }

  resetTopSize() {
    let pre = null;
    this.instances.forEach((ins, index) => {
      if (index === 0) {
        ins.instance.top = (this.mt) || 10;
      } else {
        ins.instance.top = (pre.instance.top + pre.height + this.mt) || 0;
      }
      pre = ins;
    });
  }
}

export default new NotificationManager(2000);
