(function() {
	'use strict';
	angular.module('schools').controller('CreateTopicController', createTopicController);
	createTopicController.$inject = ['$scope', '$http'];
	
	// Setup controller
	function createTopicController($scope, $http) {
		
		// Scope trick
		var createTopicVm = this;
		
		// Setup object and method
		createTopicVm.topic = "";
		
		createTopicVm.createTopic = function($event) {
			$event.preventDefault();

			$http({
		        method : "POST",
		        url : "welcome.htm"
		    }).then(function mySucces(response) {
		        $scope.myWelcome = response.data;
		    }
		};
	
	};
	
})();