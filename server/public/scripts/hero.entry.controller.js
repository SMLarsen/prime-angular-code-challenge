app.controller('HeroEntryController', ['$http', function($http) {
    console.log('Hero Entry controller running');

    var self = this;
    self.powers = [];
    self.newHero = {};
    self.powerID = '';

    getPowers();

    // function: getPowers - read only
    function getPowers() {
        $http.get('/powers')
            .then(function(response) {
                self.powers = response.data;
                console.log(self.powers);
            });
    } // end function getPowers


    // function addHero - insert
    self.addHero = function() {
      self.newHero.power_id = self.newHero.power_id.id;
      console.log(self.newHero);
        $http.post('/heroes', self.newHero)
            .then(function(response) {
                console.log('POST finished adding hero.');
            });
    }; // end addHero

}]); // end Controller: Hero Entry
