(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    }
  });

  var gems = [
    {
      name: "Ruby",
      price: "3.95",
      description: "A really shiny gem",
      canPurchase: true,
      image: 'https://cdn.tutsplus.com/net/uploads/legacy/966_essentialReading/images/rubylang.png',
      reviews: [
        {
          stars: 5,
          body: 'coolest looking gem',
          author: 'nick@gmail.com'
        }
      ]
    },

    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'A very spiky gem',
      canPurchase: false,
      image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/POV-Ray-Dodecahedron.svg/280px-POV-Ray-Dodecahedron.svg.png',
      reviews: [
        {
          stars: 1,
          body: 'thought it would be bluer .. its not',
          author: 'doug@gmail.com'
        }
      ]
    }
  ];
})();
