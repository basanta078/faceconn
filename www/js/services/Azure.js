angular.module('starter.services')
.service('Azure', function($cordovaFileTransfer) {
	
	var self = this;

	self.appUrl = "https://faceconn.azure-mobile.net/";
	self.appKey = "CJZHjmaoEZUBchviztuskuQmqHkLGT42";
	self.client = new WindowsAzure.MobileServiceClient(
	    self.appUrl,
	    self.appKey
	);

    self.client2 = new WindowsAzure.MobileServiceClient(
        self.appUrl,
        self.appKey
    );
	self.UserTable = self.client.getTable("Users");
    self.PersonTable = self.client2.getTable("Person");
    
        
    self.RetrievePerson = function(callback) {
        var query = self.PersonTable.select("Name", "Familiar", "__createdAt", "ImageUrl","Gender").read().done(function (results) {
          callback(results);
        }, function (err) {
          console.log("Error: " + err);
        });
    }
    self.AddPerson = function(callback) {
        PersonTable.insert(item);
    }
	self.GetProfiles = function (callback){
		var query = self.UserTable.select("id").read().done(function (results) {
		  console.log(results);
		}, function (err) {
		  console.log("Error: " + err);
		});
	};

	self.Insert = function(nameA, uri){
		var DemoTable = self.client.getTable("Demo");

		var item = { userName: nameA , containerName: "images"};
		DemoTable.insert(item).then(function (item) {
                if (item.sasQueryString !== undefined) {
                    console.debug("Query string: " + item.imageUri);
                    var uriWithAccess = item.imageUri + "?" + item.sasQueryString;

                    // Set the upload options.
                    var options = {}
                    options.httpMethod = "PUT";
                    options.mimeType = "image/jpeg";
                    options.chunkedMode = false;                            
                    options.headers = {
                        // We need to set this header.
                        'x-ms-blob-type': 'BlockBlob'
                    };
                    console.log(options)
                    console.log(uriWithAccess)
                    $cordovaFileTransfer.upload(uriWithAccess, uri, function (result) {
                        if (result.responseCode === 201)
                        {
                            alert("Upload complete (" + result.bytesSent + " bytes).");
                        }
                        else {
                            alert("Upload failed!");
                        }                                
                    }, handleError, options);
                }
            });
	};

});