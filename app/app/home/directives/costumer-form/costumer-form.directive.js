(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CostumerForm Object/function
     */

    function CostumerForm() {


        function CostumerFormController(dataService) {

            var vm = this;
            vm.name = 'CostumerFormController';

            vm.data = {
                
            };


        function _SentEmail(){
            var url = '';
            var data = vm.data;
            dataService.post(url,data)
                .then(function(){
                    console.log('success');
                    vm.data = {

                    };
                }, function failure(){
                    console.log('failure');
                });
        }

         vm.submitForm = _SentEmail;


            function _init() {

            }

            _init();

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
    angular.module('home')
        .directive('costumerForm', CostumerForm);

})();