/**
 * @标题: 校验方法, 直接将值进行传入
 * @描述:
 * @作者: xiangxinji
 * @其他:
 * @时间: 2020-09-12
 */
import {
  isPhone, isNumber, isDef, isTruthy,
  isRequired, isStr,
} from '@/helpers/validate';

export const checkTypes = (type, data) => {
  switch (type) {
    case 'number':
      return isNumber(data);
    case 'phone':
      return isPhone(data);
    default:
      return true;
  }
};
/**
 *
 * @param v
 * @param trimModel = true 表示将对字符串值进行trim() , false 表示不裁剪
 */
export default (rule, data) => {
  if (isDef(rule.required) && !isRequired(data)) {
    return rule;
  }
  if (isDef(rule.type) && !checkTypes(rule.type)) {
    return rule;
  }
  if (isRequired(rule.minLength) && isStr(data) && data.length < rule.minLength) {
    return rule;
  }
  if (isRequired(rule.maxLength) && isStr(data) && data.length > rule.maxLength) {
    return rule;
  }
  // minLength 和 maxLength 同时存在
  if (isRequired(rule.maxLength) && isRequired(rule.minLength)) {
    // eslint-disable-next-line no-mixed-operators,max-len
    if (isStr(data) && data.length < rule.minLength || isStr(data) && data.length > rule.maxLength) {
      return rule;
    }
  }
  if (isRequired(rule.length) && isStr(data) && data.length !== rule.length) {
    return rule;
  }
  return null;
};
