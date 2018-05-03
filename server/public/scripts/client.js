console.log('client.js');

var app = angular.module("ShoeApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
    }).when('/shoe', {
        templateUrl: 'views/shoe.html',
        controller: 'ShoeController as vm'
    })
    .otherwise({
        templateUrl: '<h2>404<h2>'
    });
});