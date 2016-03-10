describe('gulp-jasmine-browser', function () {
    var scope,
        controller;
    beforeEach(function () {
        module('apptraincsc');
    });
    describe('MyController', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('DetailNewsController', {
                '$scope': scope
            });
        }));
        it('check argument image', function () {
            expect(scope.image).toBe('');
        });
        it('check argument title', function () {
            expect(scope.title).toBe('');
        });
    });
});