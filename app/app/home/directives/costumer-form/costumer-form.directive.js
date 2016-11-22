(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CostumerForm Object/function
     */
    function CostumerForm() {


        function CostumerFormController() {

            var vm = this;
            vm.name = 'CostumerFormController';

            vm.data = {
                
            }


            vm.changeState = _changeState;


            function _init() {

            }

            _init();

        }

    }


    /***************** PRIVATE *******************/

    /**
     // add logic here
  

    /****************** PUBLIC *******************/
    var directive = {

        restrict: 'E',
        scope: {

        },
        templateUrl: 'home/directives/costumer-form/costumer-form.directive.html',
        controller: CostumerFormController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

}

    /* ANGULAR */
    angular
    .module('home')
    .directive('costumerForm', CostumerForm);

})();
