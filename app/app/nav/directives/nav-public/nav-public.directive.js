(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * NavPublic Object/function
     */
    function NavPublic () {

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
            replace: true,
            scope: {

            },
            templateUrl: 'nav/directives/nav-public/nav-public.directive.html',
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('nav')
        .directive('navPublic', NavPublic );

})();
