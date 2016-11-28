var app = angular.module('HeroApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/hero-entry', {
            templateUrl: '/views/template/hero-entry.html',
            controller: 'HeroEntryController',
            controllerAs: 'he'
        })
        .when('/hero-listing', {
            templateUrl: '/views/template/hero-listing.html',
            controller: 'HeroListingController',
            controllerAs: 'hl'
        })
        .otherwise({
            redirectTo: 'hero-entry'
        });
}]);
