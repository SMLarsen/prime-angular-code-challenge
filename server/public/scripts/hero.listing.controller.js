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

// function: deleteHero - delete
self.deleteHero = function(hero) {
    console.log('delete hero: ', hero);
    $http.delete('/heroes/' + hero.id)
        .then(function(response) {
            console.log('DELETE finished.');
            getHeroes();
        });
}; // end deleteHero

// function: editHero - edit
self.editHero = function(hero) {
    console.log('edit hero: ', hero);
    $http.put('/heroes/' + hero.id)
        .then(function(response) {
            console.log('UPDATE finished.');
            getHeroes();
        });
}; // end editHero



}]); // end Controller: Hero Listing
