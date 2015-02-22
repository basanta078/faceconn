angular.module('starter.services')
.service('Azure', function() {
	
	var self = this;

	self.appUrl = "https://faceconn.azure-mobile.net/";
	self.appKey = "CJZHjmaoEZUBchviztuskuQmqHkLGT42";
	self.client = new WindowsAzure.MobileServiceClient(
	    self.appUrl,
	    self.appKey
	);
	self.UserTable = self.client.getTable("Users");

	self.GetProfiles = function (callback){
		var query = self.UserTable.select("id").read().done(function (results) {
		  console.log(results);
		}, function (err) {
		  console.log("Error: " + err);
		});
	}

});