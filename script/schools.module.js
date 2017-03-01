(function() {
	'use strict';
	angular.module('schools', ['ui.router']).config(schoolsConfig);
	
	// Configure application defaults
	function schoolsConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		
		// Routing...
		$locationProvider.hashPrefix('');
		
		// Set default and initial page
		$urlRouterProvider.otherwise('/');
		
		// Setup states
		$stateProvider.state('index', {
            url: '/',
            templateUrl: 'view/topics/topics.list.html'
        })
        .state('topics', {
        	url: '/topics',
            templateUrl: 'view/topics/topics.list.html'
        })
        .state('createTopic', {
        	url: '/createTopic',
            templateUrl: 'view/topics/topics.create.html'
        });
	
	};
	
})();