describe("List", function () {
    var $scope, controller, data;
    beforeEach(module('questions'));
    beforeEach(inject(function ($rootScope, $controller, Data) {
        $scope = $rootScope.$new();
        controller = $controller('List', {$scope: $scope});
        data = Data;
    }));

    describe("Controller Initialization", function () {
        it("Should start out with the $scope.selectedQuestion as a null value", function () {
            expect($scope.selectedQuestion).toBeNull();
        });

        it("Should throw the questions from the Data on the $scope", function () {
            expect($scope.questions).toEqual(data.questions);
        });
    });

    describe("DOM Action Handlers", function () {
        describe("onSelectQuestion", function () {
            it("Should set the $scope.selectedQuestion to the value passed in", function () {
                $scope.onSelectQuestion({question: "What is your name?"});
                expect($scope.selectedQuestion).toEqual({question: "What is your name?"});
            });
        });
    });

    describe("DOM Getters", function () {
        describe("getRowClass", function () {

            it("Should return an empty string when passed undefined", function () {
                expect($scope.getRowClass(undefined)).toEqual('');
            });

            it("Should return an empty string when passed null", function () {
                expect($scope.getRowClass(null)).toEqual('');
            });

            it("Should return an empty string when passed a question without an answer property", function () {
                expect($scope.getRowClass({question: 'In what place were you born?'})).toEqual('');
            });

            it("Should return red when passed a question with a wrong answer property", function () {
                expect($scope.getRowClass({answer: 'Burrito'})).toEqual('red');
            });

        });
    });
});