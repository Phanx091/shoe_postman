app.service("ShoeService", ["$http", function($http) {
  console.log("ShoeService is loaded");

  var self = this;
  self.shoeGetList = {
      inventory: []
  };
  self.message = "oh hey";



  self.getShoe = function() {
      console.log('getshoe');
    $http({
      method: "GET",
      url: "/shoes"
    })
      .then(function(response) {
        console.log("get shoe click button working");
        self.shoeGetList.inventory = response.data;
        console.log(self.shoeGetList.inventory);
      })
      .catch(function(error) {
        console.log("error on self.getShoe", error);
      });
    };

    self.postShoe = function(data) {
      $http({
        method: "POST",
        url: "/shoes",
        data: data
      })
        .then(function(response) {
          console.log("post new shoe");
          console.log(response);
        })
        .catch(function(error) {
          console.log("error on self.getShoe", error);
        });
        self.getShoe();
      };



    

}]);






