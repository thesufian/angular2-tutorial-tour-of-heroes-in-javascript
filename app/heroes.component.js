(function (app) {
    app.HeroesComponent =
        ng.core.Component({
            selector: 'my-heroes',
            styleUrls: ['heroes.component.css'],
            templateUrl: 'heroes.component.html'
        })
            .Class({
                constructor: [app.HeroService, ng.router.Router,
                    function (heroService, router) {
                        //this.heroes = [];
                        this.heroService = heroService;
                        this.router = router;
                    }],
                ngOnInit: function () {
                    this.getHeroes();
                },
                onSelect: function (hero) {
                    //console.log(hero);
                    this.selectedHero = hero;
                },
                getHeroes: function () {
                    //this.heroes = this.heroService.getHeroes();
                    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
                },
                gotoDetail: function () {
                    this.router.navigate(['/detail', this.selectedHero.id]);
                },
                add: function (name) {
                    name = name.trim();
                    return this.heroService.create(name)
                        .then(hero => {
                            this.heroes.push(hero);
                            this.selectedHero = null;
                        });
                },
                delete: function (hero) {
                    this.heroService
                    .delete(hero.id)
                    .then(() => {
                        this.heroes = this.heroes.filter(h => h !== hero);
                        if (this.selectedHero === hero) { this.selectedHero = null; }
                    });
                }
            });
})(window.app || (window.app = {}));