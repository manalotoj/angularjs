angular.module('sandbox')
    .controller('studentListCtrl', ['$scope', 'studentResource', function ($scope, studentResource) {
        $scope.students = studentResource.getStudents('3LR');

        $scope.edit = function () {
            console.log('contactController.edit');
            $scope.editMode = true;
        };

        $scope.save = function () {
            console.log('contactController.save');
            $scope.editMode = false;
        };
    }]);