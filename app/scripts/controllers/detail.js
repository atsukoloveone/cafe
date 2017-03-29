'use strict';

/**
 * @ngdoc function
 * @name cafeApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the cafeApp
 */
angular.module('cafeApp')
  .controller('DetailCtrl', function (ModalService) {
    this.data =
    {'cafeId':'1','name':'Moomin House Cafe','category':'Cafe','web':'www.loveone.se','tel':'03-5610-3063','address':'Tokyo Skytree town Soramachi 1F, 1-1-2, Oshiage, Sumida-ku, Tokyo, 131-0045',
    'images': ['https://uds.gnst.jp/rest/img/cd3cvarg0000/s_0n5l.jpg?t=1484697471', 'https://uds.gnst.jp/rest/img/cd3cvarg0000/s_0n5x.jpg?t=1484697471'], 'station':"Oshiage Station", 'price':'Lunch 1,500 JPY Dinner 2,000 JPY', 'time':'8:00 - 22:30','rate': '74',
    'comments':[{'name': 'Janne E', 'content':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'}, {'name': 'Yuki A', 'content':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'},{'name': 'Martin E', 'content':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'}]}


  });
