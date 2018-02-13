'use strict';

angular.module('Transformer')
    .directive('stats',function() {
    	return {
  		templateUrl:'js/directives/stats/stats.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'comments': '@',
        'number': '@',
        'name': '@',
        'colour': '@',
        'details':'@',
        'type':'@',
        'goto':'@'
  		}
  	}
  });
