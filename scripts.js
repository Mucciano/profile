console.log('loaded');

angular
    .module('profileApp', [])
    .controller('profileController', ['$scope',
    function($scope){

      $scope.showApps   = false
      $scope.techVar    = false
      $scope.textVar    = true
      $scope.contactVar = false



      $scope.show = function(){
        $scope.showApps = !$scope.showApps
        $scope.textVar  = !$scope.textVar
      }

      $scope.showTech = function(){
        $scope.techVar  = !$scope.techVar
      }

      $scope.showContact = function(){
        $scope.contactVar = !$scope.contactVar
        $scope.textVar  = !$scope.textVar

      }





    }])











//
// $(function(){
//
//
// // var text = $('.text')
// // var appCard =$('.appCard')
// //
// // $('.appButton').click(function(){
// //     text.addClass('animated fadeOut')
// //         .css('display', 'none')
// //     setTimeout(function(){appCard.addClass('animated fadeIn')
// //                                  .css('display', 'block') }, 1000)
//
// })
//
//
//
// })
