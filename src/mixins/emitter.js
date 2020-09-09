/**
 * 向下传递事件(只传递第一个匹配的)
 * @param componentName
 * @param eventName
 * @param params
 */
function broadcast(componentName, eventName, params = []) {
  this.$children.forEach((child) => {
    const name = child.$options.componentName;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName, params]);
    }
  });
}
export default {

  methods: {
    broadcast,
    /**
     * 自定义事件冒泡
     * @param componentName
     * @param eventName
     * @param params
     */
    dispatch(componentName, eventName, params = []) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;
      while (parent && (name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
  },
};
