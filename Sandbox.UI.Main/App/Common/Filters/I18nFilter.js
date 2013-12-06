angular.module('sandbox.common')
    .filter('i18nLookup', ['bootstrapper', function (bootstrapper) {
        return function (key) {            
            var resource = bootstrapper.i18nResource.items;

            var result = 'KEY NOT FOUND';
            console.log(typeof resource[key] != 'undefined');
            if (typeof resource[key] != 'undefined' && resource[key] != '') {
                result = resource[key];
            }
            console.log(result);
            return result;
        };
    }]);