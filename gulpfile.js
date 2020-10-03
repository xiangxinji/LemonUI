/**
 * @标题: gulp部署工具
 * @说明: 前端部署部署工具
 * @作者:xxj
 * @时间 2020/9/22
 */
const gulp = require('gulp'); // 引入gulp
const sftp = require('gulp-sftp-up4'); // 引入 gulp-sftp-up4
const envs = require('./deploy/envs.js');

let publishTargets = process.env.target;
if (publishTargets.indexOf(',')) {
  publishTargets = publishTargets.split(',');
} else {
  publishTargets = [publishTargets];
}
publishTargets.forEach((taskName) => {
  gulp.task(taskName, () => gulp.src('storybook-static/**') // 要部署的文件目录
    .pipe(sftp(envs[taskName])));
});
