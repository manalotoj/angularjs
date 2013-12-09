// Use IDE to drag-n-drop references

// jasmine must be the first reference
/// <reference path="../../../../../scripts/jasmine/jasmine.js" />

// add angular files (order matters)
/// <reference path="../../../../../scripts/angular.js" />
/// <reference path="../../../../../scripts/angular-mocks.js" />
/// <reference path="../../../../../scripts/angular-resource.js" />
/// <reference path="../../../../../scripts/angular-route.min.js" />

// reference elements to be tested along with necessary dependencies
/// <reference path="../../../../../../sandbox.ui.main/app/students/students.js" />
/// <reference path="../../../../../../sandbox.ui.main/app/students/controllers/studentlistctrl.js" />


// describe the element to be tested.
describe("sandbox.studentListCtrl", function () {
    var $scope = null;
    var ctrl = null;

    // define stubbed data
    var students = [
        { Id: 1, firstName: "John", lastName: "Smith" },
        { Id: 1, firstName: "Julius", lastName: "Erving" },
        { Id: 1, firstName: "Bernard", lastName: "King" },
        { Id: 1, firstName: "Hakeem", lastName: "Olajuwan" },
    ];

    var mockStudentResource = {
        getStudents: function(id) {
            return students;
        }
    };

    // inject containing module
    beforeEach(module('sandbox'));

    // inject scope and controller
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        // define the controller and inject dependencies
        ctrl = $controller('studentListCtrl', {
            $scope: $scope,
            studentResource: mockStudentResource
        });
    }));

    // test is very simple as the controller under test does very little.
    it("sets $scope.students property.", function () {
        expect($scope.students).toBeDefined();
        expect($scope.students).toEqual(students);
    });
})