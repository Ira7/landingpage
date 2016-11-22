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
                "xrm": false,
                "academy": false,
                "hybridApp": false,
                "responsiveApp": false,
                "makeSense": false
            };

            function _setServices(service) {
                switch (service) {
                    case "xrm": vm.data[service] = !vm.data[service];
                        break;
                    case "academy": vm.data[service] = !vm.data[service];
                        break;
                    case "hybridApp": vm.data[service] = !vm.data[service];
                        break;
                    case "responsiveApp": vm.data[service] = !vm.data[service];
                        break;
                    case "makeSense": vm.data[service] = !vm.data[service];
                        break;
                }
            }

            function _SentEmail() {
                var url = 'http://aviel.com';
                var data = vm.data;

                dataService.post(url, data)
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
                            "xrm": false,
                            "academy": false,
                            "hybridApp": false,
                            "responsiveApp": false,
                            "makeSense": false
                        };
                    }, function failure() {
                        console.log('failure');
                    });
            }

            vm.submitForm = _SentEmail;
            vm.setServices = _setServices;


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