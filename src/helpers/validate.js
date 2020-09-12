export const isDef = (v) => v !== null && v !== undefined;

export const isNotDef = (v) => !isDef(v);

export const isObj = (v) => Object.prototype.toString.call(v) === '[object Object]';

export const isArr = (v) => Array && Array.isArray(v);

export const isStr = (v) => typeof v === 'string';

export const isNumber = (v) => typeof v === 'number';

export const isFunc = (v) => typeof v === 'function';

export const isError = (v) => Object.prototype.toString.call(v) === '[object Error]';

export const isPhone = (v) => !/^1[3456789]\d{9}$/.test(v);

export const isRequired = (v) => isDef(v) && v !== '';

export const isTruthy = (v) => v === true;

export const isFalsy = (v) => v === false;
