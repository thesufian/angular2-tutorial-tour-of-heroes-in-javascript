(function (app) {
    app.DashboardComponent =
        ng.core.Component({
            selector: 'my-dashboard',
            //template: `<h3>My Dashboard</h3>`
            templateUrl: 'dashboard.component.html',
            styleUrls: [ 'dashboard.component.css' ]
        })
            .Class({
                constructor: [app.HeroService, ng.router.Router, function (heroService, router) {
                    this.heroService = heroService;
                    this.router = router;
                }],
                ngOnInit: function () {
                    this.heroService.getHeroes()
                        .then(heroes => this.heroes = heroes.slice(1, 5));
                },
                gotoDetail: function (hero) {
                    let link = ['/detail', hero.id];
                    this.router.navigate(link);
                }
            });
})(window.app || (window.app = {}));