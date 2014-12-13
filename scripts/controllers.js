var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'albumController',
            templateUrl: '/partials/albums.html'
        })
        .when('/album:label', {
            controller: 'galleryController',
            templateUrl: '/partials/gallery.html'
        });
});

albumController = function ($scope) {
    //    controller logic
    $scope.albums = albumList;
    console.log('album');
};

galleryController = function ($scope, $routeParams) {
    $scope.albums = albumList;
    var albumLabel = $routeParams.label.substr(1);
    for (var i = 0; i < albumList.length; i++){
        if (albumList[i].displayName == albumLabel){
            $scope.currAlbum = albumList[i];
        }
    }
};

portfolio.controller('galleryController', galleryController);
portfolio.controller('albumController', albumController);
