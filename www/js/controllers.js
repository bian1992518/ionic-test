angular.module('starter-controllers', [])
.controller('IndexController',['$ionicSlideBoxDelegate','ionic',function($ionicSlideBoxDelegate,ionic){
	var vm = this;
	vm.modal = 0
	vm.pageClick = function(index){
		vm.modal = index;
	}
}])
.controller('ClassifyController',[function(){

}])
.controller('CartController',[function(){

}])
.controller('PersonController',[function(){

}])