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
    $scope.photos = photoList;
    console.log('album');
};

galleryController = function ($scope, $routeParams) {
    $scope.albums = albumList;
    $scope.photos = photoList;
    $scope.currAlbum = $routeParams.label.substr(1);
    for (var i = 0; i < albumList.length; i++){
        if (albumList[i].displayName == $scope.currAlbum){
            $scope.albumLocation = albumList[i].location;
            $scope.albumCover = albumList[i].cover;
            console.log(albumList[i].cover);
        }
    }
};

portfolio.controller('galleryController', galleryController);
portfolio.controller('albumController', albumController);
