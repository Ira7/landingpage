(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * NavPrivate Object/function
     */
    function NavPrivate () {
        var vm = this;
        /***************** PRIVATE *******************/

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        /* @ngInject */
        function NavPrivateController() {
            console.log('NavPrivateController');
            var vm = this;
        }


        
        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
            },
            templateUrl: 'nav/directives/nav-private/nav-private.directive.html',
            link: _link,
            controller: NavPrivateController,
            controllerAs: 'vm'

        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('nav')
        .directive('navPrivate', NavPrivate );

})();
