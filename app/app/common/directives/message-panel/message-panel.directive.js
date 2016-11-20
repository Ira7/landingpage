(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
    * MessagePanel
     */
    function MessagePanel() {

        /***************** PRIVATE *******************/

        /* @ngInject */
        function MessagePanelController(messageService) {
            var vm = this;

            vm.model = messageService.model;

        }

        /**
         * Directives link function
         */
        // function _link(scope, iElem, iAttrs, controllers) {
        //     // add logic here
        // }

        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            replace: true,
            // scope: {

            // },
            templateUrl: 'common/directives/message-panel/message-panel.directive.html',
            //link: _link,
            controller: MessagePanelController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('common')
        .directive('messagePanel', MessagePanel);

})();
