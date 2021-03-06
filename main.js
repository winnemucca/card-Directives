(function() {
'use strict';

angular
	.module('app', [])
	.controller('mainCtrl', function($scope){
		$scope.person1 = {
			name: "luke skywalker",
			address: {
				street: 'po box 123',
				city: 'secret rebel base',
				planet: 'Yavin4'
			},
			friends: [
				'leia',
				'han',
				'chewbacca'
			],
			level: 0
		}

		$scope.person2 = {
			name: "Han Solo",
			address: {
				street: 'po box 123',
				city: 'Mos Eisley',
				planet: 'Tattoine'
			},
			friends: [
				'leia',
				'han',
				'chewbacca'
			],
			level: 1
		}

		$scope.droid1 = {
			name: 'R2-D2',
			specifications: {
				manufacturer: 'industrial automation',
				type: 'Astromech',
				productLine: 'r2 series'
			},
			level: 2
		}

	})

	// .factory('jediPolicy', function(){
	// 	return advanceToKnight: function() {
	// 		if(candidate.hasForce &&

	// 			)	
	// 	}
	// })
	.directive('stateDisplay', function() {
		return {
			restrict: 'A',
			link: function(scope, el, attrs) {
				var parms = attrs['stateDisplay'].split(' ');
				var linkVar = parms[0];
				var classes = parms.slice(1);
				scope.$watch(linkVar['stateDisplay'], function(newVal) {
					console.log(newVal)
					el.removeClass(classes.join(' '));
					el.addClass(classes[newVal]);

				});
			}
		}
	})
	.directive('userPanel', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'userPanel.html',
			scope: {
				// dont expect one way binding to change
				name: '@',
				level: '=',
				initialCollapsed: '@collapsed'
			},
			controller: function($scope) {
				$scope.collapsed = ($scope.initialCollapsed === 'true');

				$scope.nextState = function(evt) {
					console.log('evt', evt);
					evt.stopPropagation();
					evt.preventDefault();
					console.log('state', $scope.level)
					$scope.level++;
					$scope.level = $scope.level %4;
				}
				

				$scope.collapse = function() {
					$scope.collapsed = !$scope.collapsed;
				}
			}
		}
	})
	.directive('personInfoCard', function() {
		return {
			restrict: 'E',
			templateUrl: "personInfoCard.html",
			scope: {
				person: '=',
				initialCollapsed: '@collapsed'
				// a simple data value
			},
			
			controller: function($scope){
				
				$scope.knightMe = function(person) {
					console.log('clicked knight')
					person.rank = 'knight';
				}
					// **** moved from remove friend directive
				$scope.removeFriend = function(friend) {
					console.log('remove')
					var idx = $scope.person.friends.indexOf(friend);
					if(idx > -1) {
						$scope.person.friends.splice(idx,1);
					}
				}

			}
		}
	})
	.directive('droidInfoCard', function() {
		return {
			restrict: 'E',
			templateUrl: "droidInfoCard.html",
			scope: {
				droid: '=',
				initialCollapsed: '@collapsed'
				// a simple data value
			},
			
			controller: function($scope){
				
					// **** moved from remove friend directive
				

			}
		}
	})
	.directive('address', function() {
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'address.html',
			controller: function($scope) {
				$scope.collapsed = false;

				$scope.collapsedAddress = function() {
					console.log('collapsed');
					$scope.collapsed = true;
				}

				$scope.expandAddress = function() {
					console.log('expand');
					$scope.collapsed = false;
				}
			}
		}
	})

	.directive('removeFriend', function() {
		return {
			restrict: 'E',
			templateUrl: 'removeFriend.html',
			scope: {
				notifyParent: '&method'
			},
			controller: function($scope) {
				$scope.removing = false;
				$scope.startRemove = function() {
					$scope.removing = true;
				}

				$scope.cancelRemove = function() {
					console.log('cancelRemove')
					$scope.removing = false;
				}

				$scope.confirmRemove = function() {
					console.log('confirmRemove')
					// $scope.notifyParent({friend: 'Han'});
					$scope.notifyParent();

				}

				
			}  // end of controller

		}
	})
	

})();