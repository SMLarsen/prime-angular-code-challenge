app.controller('HeroListingController', ['$http', function($http) {
    console.log('Hero Listing controller running');

    var self = this;
    self.heroes = [];

    getHeroes();

    // function: getHeroes - read only
    function getHeroes() {
        $http.get('/heroes')
            .then(function(response) {
                self.heroes = response.data;
                // console.log(self.heroes);
            });
    } // end function getHeroes



}]); // end Controller: Hero Listing
