(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CostumerForm Object/function
     */

    function CostumerForm() {


        function CostumerFormController(dataService, $timeout, $scope, $log) {

            var vm = this;
            var services = [];
            vm.name = 'CostumerFormController';
            vm.data = {
                sitename: "prodware conference",
                sitelocale: "he",
                siteurl: "http://xrm.prodware.co.il",
                siteip: "http://xrm.prodware.co.il",
                firstname: null,
                lastname: null,
                company: null,
                role: null,
                phone: null,
                email: null,
                selectionService: [],
                otherservice: null,
                promo: null,
                approvemailing: 'true'
            };

            vm.thanksMsg = "תודה!";
            vm.showMsg = false;
            vm.validNumber = true;
            vm.showother = false;
            vm.showAgree = false;


            // services
            vm.services = ['מערכת פניות ציבור',
                'מערכת פניות חירום',
                'ניהול וועדות/החלטות',
                'ניהול פרויקטים',
                'ניהול משאבי אנוש',
                'אחר'];



            function _toggleService(service) {
                var idx = vm.data.selectionService.indexOf(service);
                // is currently selected
                if (idx > -1) {
                    vm.data.selectionService.splice(idx, 1);
                }
                // is newly selected
                else {
                    vm.data.selectionService.push(service);
                }
                if (vm.data.selectionService.length === 0) {
                    vm.showother = false;
                }
                for (var i = 0; i < vm.data.selectionService.length; i++) {
                    if (vm.data.selectionService[i] === 'אחר' && vm.data.selectionService.length !== 0) {
                        vm.showother = true;
                        break;
                    }

                    else {
                        vm.showother = false;
                    }
                }
            }
            function _cleanModel() {
                vm.data = {
                    sitename: "prodware conference",
                    sitelocale: "he",
                    siteurl: "http://xrm.prodware.co.il",
                    siteip: "http://xrm.prodware.co.il",
                    firstname: null,
                    lastname: null,
                    company: null,
                    role: null,
                    phone: null,
                    email: null,
                    selectionService: [],
                    otherservice: null,
                    promo: null,
                    approvemailing: 'true'
                };

                vm.showother = false;

            }


            function buildMessage(selectionService) {

                var message = "Hello my name is " + vm.data.firstname + " I am " + vm.data.role + " from " + vm.data.company;
                if (vm.data.promo && vm.data.promo !== "") {
                    message += "I would like promotion form your organization: " + vm.data.promo;
                }
                if (selectionService.length > 0) {
                    message += "I am interested in ";
                    message += selectionService.join();
                    if (vm.data.otherservice !== null) {
                        message += vm.data.otherservice;
                    }
                }
                else {
                    message += "I want some advice for my organization.";
                }

                return message;
            }

function _agree(){
    vm.showAgree = ! vm.showAgree;
}

            function _sendToBackend(props) {

                var message = buildMessage(vm.data.selectionService);
                var data = vm.data;
                var requestData = {
                    sitename: data.sitename.toString(),
                    sitelocale: data.sitelocale.toString(),
                    siteurl: data.siteurl.toString(),
                    siteip: data.siteip.toString(),
                    firstname: data.firstname.toString(),
                    lastname: data.lastname.toString(),
                    email: data.email.toString(),
                    phone: data.phone.toString(),
                    message: message.toString(),
                    approvemailing: data.approvemailing.toString()
                };

                dataService.post('http://notify365.azurewebsites.net/forms', requestData).then(function (response) {
                    $log.debug("response", response);
                    vm.showMsg = true;
                    $timeout(function () {
                        vm.showMsg = false;
                    }, 3000);

                    _cleanModel();

                }, function failure(err) {
                    $log.debug("error", err);
                    vm.showMsg = true;
                    vm.thanksMsg = "הודעתך לא נשלחה, אנא נסה שוב";
                    $timeout(function () {
                        vm.showMsg = false;
                    }, 3000);
                });
            }

            vm.submitForm = _sendToBackend;


            function _init() {

            }


            _init();


            vm.toggleService = _toggleService;
            vm.agree = _agree;

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

