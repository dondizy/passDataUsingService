var app = angular.module('myApp', []);

app.controller('controller1',['$scope', 'shareDataService', function($scope, shareDataService){
    $scope.hello="Controller One";
    console.log(`${$scope.hello} is working`);

    $scope.input="Input from controller one";
    shareDataService.addList($scope.input);
}]);

app.controller('controller2', ['$scope', 'shareDataService', function($scope, shareDataService){
    $scope.hello="Controller Two";
    console.log(`${$scope.hello} is working`);

    $scope.output = shareDataService.getList();
}]);

app.service('shareDataService', function(){
    var myList = [];

    var addList = function(newObj){
        myList.push(newObj);
    }

    var getList = function(){
        return myList[0];
    }
    
    return {
        addList: addList,
        getList: getList
    };
});
