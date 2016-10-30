/**
 * Created by zkl on 2016/10/29.
 */
'use strict';
// 1.第一步执行
require.config({
    // 设定一个基本路径，读取所有的JS文件
    baseUrl:'/static/js'
});
console.log("11111");
// 第二部执行
require(
    // 这里这样的写法会通过/static/js/app.js 文件进行执行
    // 这里默认所有的文件都是JS类型的，所以不需要添加任何的后缀名
    //['app','test']
    // 以上为测试内容
    // ============================
    ['app' , 'test'],
    function(){
        angular.bootstrap(document, ['app']);
    }
);
console.log("22222");
