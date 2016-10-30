'use strict';
// 这里是RequestJS的内容
define(['app'] , function(app){
    alert("app ==> " + app);
    var injectParams = ['$scope'];
    var controller = function ($scope) {
        console.log("$scope ==> " + $scope);
    };
    controller.$inject = injectParams;
    app.register.controller('ff14Controller', controller);
});