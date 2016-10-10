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
        this.db = new PouchDB('heroes');
    };
    HeroService.prototype = {
        _getHeroes: function (fullDoc) {
            fullDoc = !!fullDoc;
            return this.db.allDocs({ include_docs: fullDoc })
                .then(hs => fullDoc ? hs.rows.map(h => h.doc) : hs.rows);
        },
        getHeroes: function () {
            return this._getHeroes(true);
            //return Promise.resolve(heroes);
        },
        getHeroesSlowly: function () {
            return new Promise(function (resolve) {
                setTimeout(resolve, 2 * 1000);
            }).then(() => this.getHeroes());
        },
        getHero: function (id) {
            return this.getHeroes()
                .then(heroes => heroes.find(hero => hero.id === id));
        },
        update: function (hero) {
            return this.db.put(hero);
        },
        create: function (name) {
            return this._getHeroes()
                .then(heroes => Math.max.apply(Math, heroes.map(h => Number(h.id))))
                .then(id => {
                    id++;
                    return this.db.put({ name: name, id: id, _id: id.toString() });
                }).then(hero => this.db.get(hero.id));

        },
        delete: function (id) {
            return this.db.get(id.toString())
                .then(hero => this.db.remove(hero));
        }
    };
})(window.app || (window.app = {}));