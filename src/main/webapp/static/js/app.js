/**
 * Created by zkl on 2016/10/29.
 */
'use strict';
define([], function () {
    //alert("app");
    //var app = {
    //    a:1
    //};
    // 如果没有返回值，那么就不能够被调用
    //alert(app);
    // 这里的返回值可以在其他的界面中使用
    //return app;
    console.log("----------!!```-----------");
    var test;
    var app = angular.module('app',['ngRoute' , 'ngAnimate']);

    app.config(['$routeProvider',

            function($routeProvider ){
                console.log("test ==> " );
                //var route = routeResolverProvider.route;
                //console.log("test ==> " + route);
                $routeProvider.when('/ff14',{
                    templateUrl:'/static/views/ff14/ff14.html',
                    controller:'ff14Controller',
                    controllerAs:'controller'
                }).otherwise({redirectTo: ''});

            }]);
    console.log("test ==> " + test);

    app.run(['$rootScope', '$location',
        function ($rootScope, $location) {
            console.log("test ==> run ==》 " + $rootScope );
            // 当一切都准备好以后，这里可以执行

        }]);

    return app;
});