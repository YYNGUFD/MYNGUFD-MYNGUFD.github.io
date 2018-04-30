
var blog = angular.module('blog', ['ngRoute', 'Controllers', 'Directives']);
//这个是页面跳转
blog.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/today', {
		templateUrl: './views/today.html',
		controller: 'TodayController'
	})
	.when('/older', {
		templateUrl: './views/older.html',
		controller: 'OlderController'
	})
	.when('/author', {
		templateUrl: './views/author.html',
		controller: 'Authorcontroller'
	})
	.when('/category', {
		templateUrl: './views/category.html',
		controller: 'AategoryController'
	})
	.when('/favourite', {
		templateUrl: './views/favourite.html',
		controller: 'FavouriteController'
	})
	.when('/settings', {
		templateUrl: './views/settings.html',
		controller: 'SettingsController'
	})
	.otherwise({
		redirectTo: '/today'
	});

}]);
