// (function() {
// 	'use strict';
// 	angular
// 		.module('app', [])
// 		.controller('mainCtrl', function($scope) {
// 			$scope.messages = [];
// 			$scope.handlePause = function(e) {
// 				console.log('e', e);
// 				$scope.messages.push({text: 'paused!'})
// 			}
// 		})

// 		.directive('eventPause', function($parse) {
// 			return {
// 				restrict: 'A',
				
// 				link: function(scope, el, attrs) {
// 					var fn = $parse(attrs['eventPause']);
// 					el.on('pause', function(event) {
// 						scope.$apply(function() {
// 							fn(scope, {evt: event})
// 						})
// 					})
// 				}
// 			}
// 		})

// 		.directive('spaceBarSupport',function() {
// 			return {
// 				restrict: 'A',
// 				link: function(scope, el, attrs) {
// 					// element the attribute is on
// 					// an array of all the attributes on that element
// 					$('body').on('keypress', function(evt) {
// 						var vidEl = el[0];
// 						if(evt.keyCode === 32) {
// 							vidEl.play()
// 						} else {
// 							vidEl.pause();
// 						}
// 					})
// 				}
// 			}
// 		})
// })()