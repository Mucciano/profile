console.log('loaded');

angular
    .module('profileApp', [])
    .controller('profileController', ['$scope',
    function($scope){

      $scope.showApps        = false
      $scope.techVar         = false
      $scope.techButtonVar   = true
      $scope.textVar         = true
      $scope.skyVar          = true
      $scope.contactVar      = false



      $scope.show = function(){
        $scope.showApps = !$scope.showApps
        $scope.textVar  = !$scope.textVar
        $scope.skyVar   = !$scope.skyVar
        $scope.techButtonVar = !$scope.techButtonVar
      }

      $scope.showHome = function(){
        $scope.showApps         = false
        $scope.techVar          = false
        $scope.techButtonVar    = true
        $scope.textVar          = true
        $scope.skyVar           = true
        $scope.contactVar       = false
      }


      $scope.showTech = function(){
        $scope.techVar        = !$scope.techVar
        $scope.techButtonVar  = !$scope.techButtonVar



      }

      $scope.showContact = function(){
        $scope.showHome()
        $scope.contactVar = !$scope.contactVar
        $scope.textVar  = !$scope.textVar

      }

      $scope.hidePattern = function(){
        $('.testpic').css('opacity', '0')
        $('.homeText').css('opacity', '1')
      }

      $scope.showPattern = function(){
        $('.testpic').css('opacity', '1')
        $('.homeText').css('opacity', '0')

      }



    }])
