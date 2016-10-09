(function (app) {
    var heroes = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];
    var HeroService = app.HeroService = function () {

    };
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(heroes);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            setTimeout(resolve, 2*1000);
        }).then(() => this.getHeroes());
    };
})(window.app || (window.app = {}));