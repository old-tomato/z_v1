/**
 * Created by zkl on 2016/10/29.
 */
'use strict';
require.config({
    // 设定一个基本路径，读取所有的JS文件
    baseUrl:'/static/js'
});
require(
    // 这里这样的写法会通过/static/js/app.js 文件进行执行
    // 这里默认所有的文件都是JS类型的，所以不需要添加任何的后缀名
    ['app','test']
);
