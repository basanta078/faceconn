angular.module('starter.controllers')

//.controller('AdminCtrl', function(function($scope, $cordovaPush, $cordovaDialogs, $cordovaMedia, $cordovaToast, ionPlatform, $http) {
.controller('AdminCtrl', function($scope, Azure) {
	
    var GOOD = 0;
    var BAD = 1;

    var people = [{Name:"Basanta", Time: "3am", Familiar: 0, Url:"https://faceconn.blob.core.windows.net/images/Basanta.jpg"}, 
    {Name:"Jeremy", Time: "12am", Familiar: 0, Url:"https://faceconn.blob.core.windows.net/images/Jeremy.jpg"},
    {Name:"Robert", Time:"10am", Familiar: 0, Url:"https://faceconn.blob.core.windows.net/images/Robert.jpg"},
    {Name:"Brian", Time:"11am", Familiar: 0, Url:"https://faceconn.blob.core.windows.net/images/Brian.jpg"},
    {Name:"buzzlightyear", Time:"2pm",  Familiar: 1, Url:"http://upload.wikimedia.org/wikipedia/en/b/b4/Buzz_Lightyear.png"}];
    
    $scope.good = []; 
    $scope.bad = [];

    function loadInit() {
        for(var i in people) {
            var p = people[i];
            if(p.Familiar == GOOD) {
                console.log(p.Familiar)
                 $scope.good.push(p);
            }else {
                 $scope.bad.push(p);
            }
        }
    }
    loadInit();
    
    var loadPeople = function() {
        Azure.RetrievePerson(function(data){
            console.log(data);
            var len = data.length;
            for(var i = 0; i < len; i++) {
                var p = data[i];
                p.Time = p["__createdAt"]; 
                p.Url = p["ImageUrl"];
                if(p["Familiar"] == GOOD) {
                    $scope.good.push(p);
                }else {
                    $scope.bad.push(p);
                }
            }
        });
               
    };
    loadPeople();
    
    setInterval(function(){
        window.location.reload();
        }, 20000);


});
