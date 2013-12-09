angular.module('sandbox')
    .controller('studentDetailCtrl', ['$scope', 'studentResource', '$routeParams',
        function ($scope, studentResource, $routeParams) {

            $scope.student = {};
            $scope.student = studentResource.getStudent($routeParams.id);

            console.log($scope.student);
        }]);