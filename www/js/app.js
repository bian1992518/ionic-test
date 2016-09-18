// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter-controllers','starter-servers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider,$httpProvider){
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');

  $stateProvider
  .state('tabs',{
    url : '/tab',
    abstract : true,
    templateUrl : 'templates/tabs.html'
  })
  .state("tabs.index",{
    url : '/index',
    views : {
      'tab-index' : {
        templateUrl : 'templates/index.html',
        controller : 'IndexController as vm'
      }
    }
  })
  .state("tabs.classify",{
    url : '/classify',
    views : {
      'tab-classify' : {
        templateUrl : 'templates/classify.html',
        controller : 'ClassifyController as vm'
      }
    }
  })
  .state("tabs.cart",{
    url : '/cart',
    views : {
      'tab-cart' : {
        templateUrl : 'templates/cart.html',
        controller : 'CartController as vm',
        resolve : {
          'data' : [function(){
            return 1;
          }]
        }
      }
    }
  })
  .state("tabs.person",{
    url : '/person',
    views : {
      'tab-person' : {
        controller : 'PersonController as vm',
        templateUrl : 'templates/person.html'
      }
    }
  })

  $urlRouterProvider.otherwise("/tab/index");

  
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With']
 
})
