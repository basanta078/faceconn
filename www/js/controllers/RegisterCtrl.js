angular.module('starter.controllers')

.controller('RegisterCtrl', function($scope, Chats, Azure) {

  $scope.getPhoto = function(name) {
  	Azure.GetProfiles();
  	Azure.Insert(name);
    /*console.log('Getting camera');
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
    	});*/
	};
});
