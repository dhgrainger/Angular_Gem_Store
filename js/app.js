(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [

    {
      name: "Ruby",
      price: "3.95",
      description: "A really shiny gem",
      canPurchase: true
    },

    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'A very spiky gem',
      canPurchase: false,
    }
  ];
})();
