'use strict';

/**
 * @ngdoc directive
 * @name cafeApp.directive:googleMap
 * @description
 * # googleMap
 */
angular.module('cafeApp')
  .directive('mapView', function (ModalService) {
          var link = function (scope, element) {

              // init the map
              function initMap() {
                  var address = scope.mapAddress;
                  var geocoder = new google.maps.Geocoder();
                  geocoder.geocode({ 'address': address},
                      function (results, status) {
                          if (status == google.maps.GeocoderStatus.OK) {
                              console.log(results[0].geometry.location);
                              var map = new google.maps.Map((element[0]), {
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
                              map.addListener('click', function() {
                                ModalService.showModal({
                                  templateUrl: "modal/modalGoogleMap.html",
                                  controller: "GoogleMapController",
                                  inputs: {
                                    modalAdress: address
                                  }
                                }).then(function(modal) {
                                  modal.element.modal();
                                  modal.close.then(function(result) {
                                    this.complexResult  = "Name: " + result.name + ", age: " + result.age;
                                  });
                                });
                              });
                          }
                          else {
                              console.log("Geocode was not successful for the following reason: " + status);
                          }
                      }
                  );
              }

              // show the map and place some markers
              initMap();
          };

          return {
              restrict: 'A',
              template: '<div id="gmaps"></div>',
              replace: true,
              scope: {
                  mapAddress: '='
              },
              link: link
          };
  });
