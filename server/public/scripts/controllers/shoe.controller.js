console.log("Shoe.controller.js");

app.controller("ShoeController", ["$http", "ShoeService", function($http, ShoeService) {
    console.log("ShoeController is online");
    var self = this;
    self.message = "this"

    self.getShoe = ShoeService.getShoe;

    self.displayShoes = ShoeService.shoeGetList;

    self.postShoe = ShoeService.postShoe;
  }
]);
