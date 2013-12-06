angular.module('sandbox.common')
    .factory('bootstrapper', function () {
        console.log('boostrapper loaded.');

        var bootstrapper = {};

        // application settings
        bootstrapper.appSettings =
            { "apiRootUrl": "http://local.sandbox.com" };

        // currently intended to be written out/injected server-side; still subject to change.
        bootstrapper.I18NResource = {
            "culture": "en-US"
            , "items": {
                'UNIVERSITY_NAME_LABEL': 'University Name',
                'STUDENT_NAME_LABEL': 'Student Name'
            }
        };

        return bootstrapper;
    });