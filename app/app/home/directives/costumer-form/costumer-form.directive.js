(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CostumerForm Object/function
     */
    function CostumerForm () {

        /***************** PRIVATE *******************/

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'home/directives/costumer-form/costumer-form.directive.html',
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('home')
        .directive('costumerForm', CostumerForm );

})();
