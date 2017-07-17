angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:2990/jira/rest/gadget/1.0/pickers/filters?fieldName=quickfind&query=&_=1476427874103').
        then(function(response) {
            $scope.greeting = response.data;
        });
});