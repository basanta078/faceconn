angular.module('starter.controllers')

.controller('FriendsCtrl', ['$scope', 'Friends', 'Camera', function($scope, Friends, Camera) {
  $scope.friends = Friends.all();
  
  $scope.getPhoto = function() {
    console.log('Getting camera');
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
	    }, function(err) {
	      console.err(err);
	    }, {
	      quality: 75,
	      targetWidth: 320,
	      targetHeight: 320,
	      saveToPhotoAlbum: false
    });
  };


}]);
