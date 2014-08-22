(function (){
  var app = angular.module('product-directives', []);

  app.directive("productPanels", function() {
    return{
      restrict: 'E',
      templateUrl: '/product-panels.html',
      controller:function(){
        this.tab = 1;

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };


      },
      controllerAs: 'panel'
    };
  });

  app.directive("productPrice", function(){
    return{
      restrict: 'E',
      templateUrl: '/product-price.html'
    };
  });
})();
