angular.module('newyoApp').controller('Detail',
    ['$scope',
        function ($scope) {
            $scope.onSelectAnswer = function (question, option) {
                question.answer = option;
                $scope.answers = {};

                // why dont I see the variables in chrome angular extension

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