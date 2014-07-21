angular.module('questions').controller('Submit',
    ['$scope',
        function ($scope) {

            $scope.answers.correctanswers = function() {
                var correctanswers = 0, key;
                for (key in $scope.answers) {
                    if ($scope.answers[key] == "right") {correctanswers++}
                }
                return correctanswers;
            };

            $scope.alerts = [];
            $scope.addAlert = function() {
                if ($scope.answers.correctanswers() >= Object.keys($scope.questions).length-1) {
                    $scope.alerts.pop();
                    $scope.alerts.push({ type: 'success', msg: "Great job! You did it! :-)" })
                } else {
                    $scope.alerts.pop();
                    $scope.alerts.push({ type: 'error', msg: "Sorry man! You got some questions wrong or did not answer all of them. :-(" })
                }
            };
        }]);