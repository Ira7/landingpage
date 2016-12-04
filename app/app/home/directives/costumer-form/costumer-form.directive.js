(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CostumerForm Object/function
     */

    function CostumerForm() {


        function CostumerFormController(dataService) {

            var vm = this;
            var services = [];
            vm.name = 'CostumerFormController';
            vm.data = {
                "company": "",
                "email": "",
                "firstName": "",
                "lastName": "",
                "phone": "",
                "promo": "",
                "role": "",
                "azure": "",
                "cloud": "",
                "office": "",
                "academy": "",
                "dynamics": "",
                "digital": ""
            };


            function _SentEmail() {
                var url = 'http://pw-conference-api.azurewebsites.net/sendemail';
                var data = vm.data;
                var header = 'Content-Type: application/json';

                dataService.post(url, data, header)
                    .then(function () {
                        console.log('success');
                         vm.data = {
                "company": "",
                "email": "",
                "firstName": "",
                "lastName": "",
                "phone": "",
                "promo": "",
                "role": "",
                "azure": "",
                "cloud": "",
                "office": "",
                "academy": "",
                "dynamics": "",
                "digital": "",
                "approved": ""
            };
                    }, function failure() {
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