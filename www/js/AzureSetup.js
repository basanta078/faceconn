/* When the device is ready for calls, begin running essential parts of the app
 */
document.addEventListener('deviceready', function () { 
    /*
    	PUT YOUR CODE HERE

    */

	var appUrl = "https://faceconn.azure-mobile.net/";
	var appKey = "CJZHjmaoEZUBchviztuskuQmqHkLGT42";
	/* Connecting to the Azure Mobile Service client */
	var client = new WindowsAzure.MobileServiceClient(
	    appUrl,
	    appKey
	);
	
	console.log("Connected to: " + client);
	var query = todoItemTable.take(3).read().done(function (results) {
	   alert(JSON.stringify(results));
	}, function (err) {
	   alert("Error: " + err);
	});

	/* Creating a new item */
	/* Sample
	var item = { name: "Brian Lee" };
	client.getTable("Users").insert(item);
	console.log("I just inserted :" + item);
	*/

});
