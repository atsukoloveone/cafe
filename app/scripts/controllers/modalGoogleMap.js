'use strict';

angular.module('cafeApp')
.controller('GoogleMapController', [
  '$scope', '$element', 'modalAdress', 'close',
  function($scope, $element, modalAdress, close) {

  $scope.name = null;
  $scope.age = null;
  $scope.modalAdress = modalAdress;

  var address = $scope.modalAdress;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': address},
    function (results, status) {
       if (status == google.maps.GeocoderStatus.OK) {
           console.log(results[0].geometry.location);
          var mapDiv = document.getElementById("gmodalmaps");
          var map = new google.maps.Map((mapDiv), {
               center: results[0].geometry.location,
               zoom: 16
           });

           var marker = new google.maps.Marker({
               position: results[0].geometry.location,
               map: map,
               animation: google.maps.Animation.DROP
           });
           var styles = [
             {
               stylers: [
                 { hue: "#00ffe6" },
                 { saturation: -20 }
               ]
             },{
               featureType: "road",
               elementType: "geometry",
               stylers: [
                 { lightness: 100 },
                 { visibility: "simplified" }
               ]
             },{
               featureType: "road",
               elementType: "labels",
               stylers: [
                 { visibility: "off" }
               ]
             }
           ];
           map.setOptions({styles: styles});
           setTimeout(function () {
             google.maps.event.trigger(map, 'resize')
           }, 100);

       }
       else {
           console.log("Geocode was not successful for the following reason: " + status);
       }
    }
  );


  //  This close function doesn't need to use jQuery or bootstrap, because
  //  the button has the 'data-dismiss' attribute.
  $scope.close = function() {
 	  close({
      name: $scope.name,
      age: $scope.age
    }, 500); // close, but give 500ms for bootstrap to animate
  };

  //  This cancel function must use the bootstrap, 'modal' function because
  //  the doesn't have the 'data-dismiss' attribute.
  $scope.cancel = function() {

    //  Manually hide the modal.
    $element.modal('hide');

    //  Now call close, returning control to the caller.
    close({
      name: $scope.name,
      age: $scope.age
    }, 500); // close, but give 500ms for bootstrap to animate
  };

}]);
