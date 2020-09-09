/**
 * @标题: 调用方法进行聚焦
 * @描述:
 * @作者: xiangxinji
 * @其他:
 * @时间: 2020-09-07
 */
export default function (ref) {
  return {
    methods: {
      focus() {
        const refCom = this.$refs[ref];
        if (refCom) {
          refCom.focus();
        }
      },
    },
  };
}
