angular.module('sandbox')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'App/Students/Partials/studentList.html',
                controller: 'studentListCtrl'
            }).
            when('/:id', {
                templateUrl: 'App/Students/Partials/studentDetail.html',
                controller: 'studentDetailCtrl'
            }).
            when('/students', {
                templateUrl: 'App/Students/Partials/studentList.html',
                controller: 'studentListCtrl'
            }).
            otherwise({ redirectTo: '/' });
    })