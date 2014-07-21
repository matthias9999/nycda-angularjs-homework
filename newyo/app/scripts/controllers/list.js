angular.module('newyoApp').controller('List',
    ['$scope', 'Data',
        function ($scope, data) {
            $scope.selectedQuestion = null;
            $scope.questions = data.questions;
            $scope.answers = {};
            $scope.questions.useranswer = {};

            $scope.onSelectQuestion = function (question) {
                $scope.selectedQuestion = question;
            };

            $scope.getRowClass = function (question) {
                if (question && question.answer && question.answer.correct) {
                    $scope.answers[question.question] = "right";
                    return 'green'
                } else if (question && question.answer) {
                    $scope.answers[question.question] = "wrong";
                    return 'red'
                } else {
                    return ''
                }
            };
        }]);