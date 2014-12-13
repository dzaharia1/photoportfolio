var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'albumController',
        templateUrl: '/partials/albums.html'
    });
})

albumController = function($scope){
//    controller logic
    $scope.albums = albumList;
    $scope.photos = photoList;
}

portfolio.controller('albumController', albumController);
