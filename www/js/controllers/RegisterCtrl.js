angular.module('starter.controllers')

.controller('RegisterCtrl', function($scope, Chats, Azure, Camera) {
  $scope.lastPhot = ''

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

  $scope.register = function(name) {

    Azure.Insert(name, $scope.lastPhoto);
	};

	
});
