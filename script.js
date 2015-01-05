var app = angular.module('Todo', []);

app.controller('TodoCtrl', function ($scope) {
    $scope.message = 'Message';
    $scope.newTodo = "";
    $scope.todos = [
        'Task 1',
        'Task 2',
        'Task 3'
    ];

    $scope.done = function (todo) {
        var indexOf = $scope.todos.indexOf(todo);
        if (indexOf !== -1) {
            $scope.todos.splice(indexOf, 1);
        }
    };

    $scope.add = function (e) {
        if (e.which && e.which === 13) {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = "";
        }
    }

});