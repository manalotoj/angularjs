//TODO:jqm change this to a provider so that rootUrl can be configured.
angular.module('sandbox')
    .factory('studentResource', ['$resource', function ($resource) {

        var studentResource = {};

        var students = [
            {
                "id": "1",
                "firstName": "John",
                "lastName": "Smith",
                "PhoneNumber": "4805551212",
                "email": "johnsmith@mail.com"
            },
            {
                "id": "2",
                "firstName": "James",
                "lastName": "Smith",
                "PhoneNumber": "2125551212",
                "email": "jamessmith@mail.com"
            },
            {
                "id": "3",
                "firstName": "Eddie",
                "lastName": "George",
                "PhoneNumber": "4805551212",
                "email": "eddiegeorge@mail.com"
            },
            {
                "id": "4",
                "firstName": "Hakeem",
                "lastName": "Olajuwan",
                "PhoneNumber": "4805551212",
                "email": "hakeemolajuwan@mail.com"
            },          
            {
                "id": "5",
                "firstName": "Kyrie",
                "lastName": "Irving",
                "PhoneNumber": "4805551212",
                "email": "kyrieirving@mail.com"
            }];

        studentResource.getStudents = function (id) {
            // make believe you're getting students by InstitutionId (?)
            return students;
        };

        studentResource.getStudent = function (id) {
            return students[id-1];
        };

        studentResource.update = function (id) {
            // do nothing for now.
            console.log('begin studentResource.update');
        };

        studentResource.create = function (student) {
            // do nothing for now.
            console.log('begin studentResource.create');
        };

        return studentResource;
    }]);