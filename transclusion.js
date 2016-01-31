// (function() {
// 	'use strict';

// 	angular
// 		.module('app',[])
// 		.controller('mainCtrl', function($scope) {
// 			$scope.message = "what up playa"
// 		})

// 		.directive('displayBox', function() {
// 			return {
// 				restrict: 'E',
// 				templateUrl: 'displayBox.html',
// 				controller: function($scope) {
// 					$scope.hidden = false;
// 					$scope.close = function() {
// 						$scope.hidden = true;
// 					}
// 				},
// 				transclude: true,
// 				scope: true
// 			}
// 		})
// })();