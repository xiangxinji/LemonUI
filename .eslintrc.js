module.exports = {
  // 当前为根配置文件
  env: {
    browser: true,
    es6: true,
  },
  // 优先使用 aribnb 和 eslint-plugin-vue中的essential  规则
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
  ],
  // 可以在这里定义全局变量， 例如 document
  globals: {
    describe: true,
    it: true,
    expect: true,
  },
  // 转换器的参数
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  // 加入 eslint-plugin-vue插件
  plugins: [
    'vue',
  ],
  // 自定义规则
  rules: {
    // 关闭这个 no-console的规则
    'no-console': 'off',
    'prefer-spread': 'off',
    'max-len': 0,
    'no-plusplus': 0,
    'no-mixed-operators': 0,
    'no-restricted-syntax': 0,
    'no-prototype-builtins': 0,
    'min-len': 0,
    'no-param-reassign' : 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './build/build.js',
      },
    },
  },
};
