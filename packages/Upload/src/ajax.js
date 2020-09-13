import { isDef, isNotDef } from '@/helpers/validate';

function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to post ${action} ${xhr.status}`;
  }

  const err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}
// todo 将request body 转成json 对象
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

export default function upload(option) {
  if (isNotDef(XMLHttpRequest)) {
    return;
  }
  const xhr = new XMLHttpRequest();
  const { action } = option;
  // todo 如果 xhr 支持upload 属性, 将会调用 onprogress 钩子
  // todo 我们可以在这里面算出百分比
  if (isDef(xhr.upload)) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }
  // todo 此处并不是追加文件,而是依赖数据,你可以自定义
  const formData = new FormData();
  if (isDef(option.data)) {
    Object.keys(option.data).forEach((name) => {
      formData.append(name, option.data[name]);
    });
  }
  // todo 这里才是添加file
  formData.append(option.filename, option.file, option.file.name);
  xhr.onerror = function error(e) {
    option.onError(e);
  };

  // eslint-disable-next-line consistent-return
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }
    option.onSuccess(getBody(xhr));
  };
  // 建立连接
  xhr.open('post', action, true);
  // 如果需要传递cookie 信息,并且xhr 支持
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
  // 将options的headers 选项添加到 xhr 中
  const headers = option.headers || {};
  for (const item in headers) {
    if (headers.hasOwnProperty(item) && isDef(headers[item])) {
      xhr.setRequestHeader(item, headers[item]);
    }
  }
  xhr.send(formData);
  // eslint-disable-next-line consistent-return
  return xhr;
}
