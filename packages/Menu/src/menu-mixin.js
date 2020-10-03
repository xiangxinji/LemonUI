export default {
  inject: ['menuContext'],

  computed: {
    /**
     *  自动计算 formitem 或者 submenu-title slot 的 padding 值
     *  计算依据: 根据submenu 的数量进行计算 (只有垂直才进行计算)
     */
    paddingStyle() {
      if (this.menuContext === null || this.menuContext.mode === 'horizontal') return {};
      let pl = 20;
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'le.menu') {
        if (parent.$options.componentName === 'le.submenu') {
          pl += 20;
        }
        parent = parent.$parent;
      }
      return {
        paddingLeft: `${pl}px`,
      };
    },
  },
};
