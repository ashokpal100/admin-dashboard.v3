"use strict";angular.module("adminApp").controller("MainCtrl",["$scope","$mdSidenav",function(e,o){console.log("came here MainCtrl"),e.toggleSidenav=function(){console.log("----"),o("left").toggle()}}]);