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
/// <reference path="../../../../../../sandbox.ui.main/app/students/routes/route.js" />

// describe the element to be tested.
describe("sandbox.route", function() {

    var route, location;

    //inject the containing module
    beforeEach(module('sandbox'));

    //inject the dependencies
    it('Initialize', inject(function($route, $location) {
        route = $route;
        location = $location;

        //ensure that angularjs elements are properly injected.
        expect(route).toBeDefined();
        expect(location).toBeDefined();
    }));
    
    //
    //the "real" tests begin here.
    //
    
    // test controllers.

    it('defines the correct controller for the "/" route.', function() {
        expect(route.routes['/'].controller).toBe('studentListCtrl');
    });
    
    it('defines the correct controller for the "/:id" route.', function () {
        expect(route.routes['/:id'].controller).toBe('studentDetailCtrl');
    });
    
    // test partials/templates.
    
    it('defines the correct url for the "/:id" route.', function () {
        expect(route.routes['/:id'].templateUrl).toBe('App/Students/Partials/studentDetail.html');
    });

    it('defines the correct url for the "/" route.', function () {
        expect(route.routes['/'].templateUrl).toBe('App/Students/Partials/studentList.html');
    });

    it('defines a default route.', function () {
        expect(route.routes[null].redirectTo).toEqual('/');        
    });
})

