/**
 * Created by zkl on 2016/10/29.
 */
'use strict';
// 这里定义APP,因为APP存在返回值，所以当前可以调用到APP中的内容
//define(['app'] , function (app) {
    //alert(app.a);
//define([] , function () {
//    // 定义一个叫做routeResolverServices的模块
//    angular.module('routeResolverServices',[]);
//});
define(['app'] , function(app){
    app.controller('testController' , function ($scope) {
        console.log("scope ==> " + $scope);

        var self = this;
        self.alert = function () {
            alert("test");
        }

    });
});