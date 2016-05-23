'use strict';

var app = angular.module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('');

  $stateProvider
    .state('base', {
      abstract: true,
      templateUrl: 'index.html'
    })
    .state('home', {
      url: '',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl',
      controllerAs: 'signup'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .state('signup-success', {
      url: '/signup-success',
      templateUrl: 'views/signup-success.html',
      controller: 'SignupSuccessCtrl',
      controllerAs: 'signupSuccess'
    })
    .state('login-success', {
      url: '/login-success',
      templateUrl: 'views/login-success.html',
      controller: 'LoginSuccessCtrl',
      controllerAs: 'loginSuccess'
    })
    .state('create-bucketlist', {
      url: '/create-bucketlist',
      templateUrl: 'views/create-bucketlist.html',
      controller: 'CreateBucketlistCtrl',
      controllerAs: 'createBucketlist'
    })
    .state('create-goal', {
      url: '/create-goal',
      templateUrl: 'views/create-goal.html',
      controller: 'CreateGoalCtrl',
      controllerAs: 'createGoal'
    })
    .state('user-dashboard', {
      url: '/user-dashboard',
      templateUrl: 'views/user-dashboard.html',
      controller: 'UserDashboardCtrl',
      controllerAs: 'userDashboard'
    })
    .state('view-all-bucketlists', {
      url: '/view-all-bucketlists',
      templateUrl: 'views/view-all-bucketlists.html',
      controller: 'ViewAllBucketlistsCtrl',
      controllerAs: 'viewAllBucketlists'
    })
    .state('view-bucketlist', {
      url: '/view-bucketlist',
      templateUrl: 'views/view-bucketlist.html',
      controller: 'ViewBucketlistCtrl',
      controllerAs: 'viewBucketlist'
    })
    .state('edit-profile', {
      url: '/edit-profile',
      templateUrl: 'views/edit-profile.html',
      controller: 'EditProfileCtrl',
      controllerAs: 'editProfile'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl',
      controllerAs: 'profileGoal'
    })
    .state('goal-completed', {
      url: '/goal-completed',
      templateUrl: 'views/goal-completed.html',
      controller: 'GoalCompletedCtrl',
      controllerAs: 'goalCompleted'
    })
    .state('browse-bucketlists', {
      url: '/browse-bucketlists',
      templateUrl: 'views/browse-bucketlists.html',
      controller: 'BrowseBucketlistsCtrl',
      controllerAs: 'browseBucketlists'
    })
    .state('edit-bucketlist', {
      url: '/edit-bucketlist',
      templateUrl: 'views/edit-bucketlist.html',
      controller: 'EditBucketlistCtrl',
      controllerAs: 'editBucketlist'
    })
    .state('create-memory', {
      url: '/create-memory',
      templateUrl: 'views/create-memory.html',
      controller: 'CreateMemoryCtrl',
      controllerAs: 'createMemory'
    })
    .state('edit-goal', {
      url: '/edit-goal',
      templateUrl: 'views/edit-goal.html',
      controller: 'EditGoalCtrl',
      controllerAs: 'editGoal'
    })
    .state('edit-memory', {
      url: '/edit-memory',
      templateUrl: 'views/edit-memory.html',
      controller: 'EditMemoryCtrl',
      controllerAs: 'editMemory'
    })
    .state('memory-album', {
      url: '/memory-album',
      templateUrl: 'views/memory-album.html',
      controller: 'MemoryAlbumCtrl',
      controllerAs: 'memoryAlbum'
    })
    .state('achievements', {
      url: '/achievements',
      templateUrl: 'views/achievements.html',
      controller: 'AchievementsCtrl',
      controllerAs: 'achievemente'
    })
});

app.run(function($state, $rootScope, $window) {
  $rootScope.$state = $state;
  $rootScope.currBucketlist = '';
  $rootScope.currGoal = '';
});
