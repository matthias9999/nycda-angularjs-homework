angular.module('questions').controller('Detail',
    ['$scope',
        function ($scope) {
            $scope.onSelectAnswer = function (question, option) {
                question.answer = option;
                $scope.answers = {};

                if (option.correct) {
                    $scope.answers = { question: question.question, useranswer: "right"};
                    $scope.answers.message = "Dude, that is so right!";
                }
                else {
                    $scope.answers = {question: question.question, useranswer: "wrong"};
                    $scope.answers.message = "Nope, sry - that's wrong!";
                }
            };
        }]);