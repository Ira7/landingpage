(function () {
    'use strict';

    angular
        .module('shell', ['common']);

    angular
        .module('shell')
        .config(function ($stateProvider) {

            $stateProvider.state('shell', {
                url: '',
                //abstract: true,
                views: {
                    '': {
                        template: '<costumer-form></costumer-form>'
                    }
                }
            });
            /* Add New States Above */

        });
})();
