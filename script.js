var app = angular.module('Todo', []);

app.controller('TodoCtrl', function ($scope) {
    $scope.message = 'Message';

    $scope.emptyTodo = {
        name: '',
        normal: true,
        important: false,
        veryImportant: false
    };

    $scope.newTodo = angular.copy($scope.emptyTodo);

    $scope.todos = [
        {
            name: 'Task 1',
            normal: true,
            important: false,
            veryImportant: false
        },
        {
            name: 'Task 2',
            normal: true,
            important: false,
            veryImportant: false
        },
        {
            name: 'Task 3',
            normal: true,
            important: false,
            veryImportant: false
        }
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
            $scope.newTodo = angular.copy($scope.emptyTodo);
        }
    }

});