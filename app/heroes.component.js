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
                }
            });
})(window.app || (window.app = {}));