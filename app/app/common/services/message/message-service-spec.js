(function () {
    'use strict';

    describe('messageService', function () {

        var service;

        beforeEach(function () {
            module('common');

            inject(function (messageService) {
                service = messageService;
            });
        });

        it('should have clear() method', function () {

            expect(service.clear).toBeDefined();

        });

    });

})();
