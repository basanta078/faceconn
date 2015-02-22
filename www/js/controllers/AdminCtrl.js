angular.module('starter.controllers')

//.controller('AdminCtrl', function(function($scope, $cordovaPush, $cordovaDialogs, $cordovaMedia, $cordovaToast, ionPlatform, $http) {
.controller('AdminCtrl', function($scope) {
	$scope.notifications = [{type:"hello"}];
    $scope.good = [{name:"basanta", time: "3am", url:"https://scontent-iad.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/783_601173987174_1223438987_n.jpg?oh=2a5bbaaa38bec8dd65407c7c3a1dda72&oe=55536652"}, 
    {name:"Jeremy", time: "12am", url:"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/1925293_777667122243475_230505352_n.jpg?oh=bd766a7d899286e8d0342da078453a88&oe=55525F0D&__gda__=1434463468_f4c53efc3ab7a18696793e7db66bcfe5"}];
    $scope.bad = [{name:"buzzlightyear", time:"2pm", url:"http://upload.wikimedia.org/wikipedia/en/b/b4/Buzz_Lightyear.png"}];
    /*t = setTimeout(function(){
        alert('alert alert');
        window.location.reload();
    }, 1000);*/
    $scope.takePic = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#takepic").change(function(){
    readURL(this);
});
    
/*    function uploadFile() {
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.addEventListener("abort", uploadCanceled, false);
    xhr.open("PUT","oburl");
    xhr.send(document.getElementById('fileToUpload').files;
    }*/


/*	// call to register automatically upon device ready
	ionPlatform.ready.then(function (device) {
	    $scope.register();
	});
*/

	// Register
/*	$scope.register = function () {
	    var config = null;

	    if (ionic.Platform.isAndroid()) {
	        config = {
	            "senderID": "YOUR_GCM_PROJECT_ID" // REPLACE THIS WITH YOURS FROM GCM CONSOLE - also in the project URL like: https://console.developers.google.com/project/434205989073
	        };
	    }
	    else if (ionic.Platform.isIOS()) {
	        config = {
	            "badge": "true",
	            "sound": "true",
	            "alert": "true"
	        }
	    }

	    $cordovaPush.register(config).then(function (result) {
	        console.log("Register success " + result);

	        $cordovaToast.showShortCenter('Registered for push notifications');
	        $scope.registerDisabled=true;*/
	        // ** NOTE: Android regid result comes back in the pushNotificationReceived, only iOS returned here
	/*        if (ionic.Platform.isIOS()) {
	            $scope.regId = result;
	            storeDeviceToken("ios");
	        }
	    }, function (err) {
	        console.log("Register error " + err)
	    });
	};
*/
    // Notification Received
  /*  $scope.$on('$cordovaPush:notificationReceived', function (event, notification) {
        console.log(JSON.stringify([notification]));
        if (ionic.Platform.isAndroid()) {
            handleAndroid(notification);
        }
        else if (ionic.Platform.isIOS()) {
  */          /*handleIOS(notification);
            $scope.$apply(function () {
                $scope.notifications.push(JSON.stringify(notification.alert));
            })*/
/*    		console.log("suck it ios");
        }
    });

*/    // Android Notification Received Handler
/*    function handleAndroid(notification) {
*/        // ** NOTE: ** You could add code for when app is in foreground or not, or coming from coldstart here too
        //             via the console fields as shown.
  /*      console.log("In foreground " + notification.foreground  + " Coldstart " + notification.coldstart);
        if (notification.event == "registered") {
            $scope.regId = notification.regid;
            storeDeviceToken("android");
        }
        else if (notification.event == "message") {
            $cordovaDialogs.alert(notification.message, "Push Notification Received");
            $scope.$apply(function () {
                $scope.notifications.push(JSON.stringify(notification.message));
            })
        }
        else if (notification.event == "error")
            $cordovaDialogs.alert(notification.msg, "Push notification error event");
        else $cordovaDialogs.alert(notification.event, "Push notification handler - Unprocessed Event");
    }
*/

    // Stores the device token in a db using node-pushserver (running locally in this case)
    //
    // type:  Platform type (ios, android etc)
/*    function storeDeviceToken(type) {
        // Create a random userid to store with it
        var user = { user: 'user' + Math.floor((Math.random() * 10000000) + 1), type: type, token: $scope.regId };
        console.log("Post token for registered device with data " + JSON.stringify(user));
*/
        /*$http.post('http://192.168.1.16:8000/subscribe', JSON.stringify(user))
            .success(function (data, status) {
                console.log("Token stored, device is successfully subscribed to receive push notifications.");
            })
            .error(function (data, status) {
                console.log("Error storing device token." + data + " " + status)
            }
        );*/
 /*   }
*/

    // Unregister - Unregister your device token from APNS or GCM
    // Not recommended:  See http://developer.android.com/google/gcm/adv.html#unreg-why
    //                   and https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/index.html#//apple_ref/occ/instm/UIApplication/unregisterForRemoteNotifications
    //
    // ** Instead, just remove the device token from your db and stop sending notifications **
/*    $scope.unregister = function () {
        console.log("Unregister called");
        removeDeviceToken();
        $scope.registerDisabled=false;
*/        //need to define options here, not sure what that needs to be but this is not recommended anyway
//        $cordovaPush.unregister(options).then(function(result) {
//            console.log("Unregister success " + result);//
//        }, function(err) {
//            console.log("Unregister error " + err)
//        });
/*    }
*/
});
