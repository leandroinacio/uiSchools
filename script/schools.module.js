(function() {
	'use strict';
	angular.module('schools', ['ui.router']).config(schoolsConfig);
	
	// Configure application defaults
	function schoolsConfig($stateProvider, $urlRouterProvider) {
		
		// Routing...
		var states = ['topics', 'questions', 'students', 'classrooms'];
		
		function setState(state) {
			$stateProvider.state(state, {
	            url: '/' + state,
	            templateUrl: 'view/' + state + '.html'
	        });
		};
		
		$stateProvider.state('index', {
            url: '/index',
            templateUrl: 'index.html'
        });
		
		states.map(function(state) {
			setState(state);
		});

		// Set default and initial page
		$urlRouterProvider.otherwise('/index');
		
		
	};
	
})();