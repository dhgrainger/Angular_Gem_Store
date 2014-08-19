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
      canPurchase: true,
      image: 'https://cdn.tutsplus.com/net/uploads/legacy/966_essentialReading/images/rubylang.png'
    },

    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'A very spiky gem',
      canPurchase: false,
      image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/POV-Ray-Dodecahedron.svg/280px-POV-Ray-Dodecahedron.svg.png'
    }
  ];
})();
