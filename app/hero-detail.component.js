(function (app) {
    app.HeroDetailComponent =
        ng.core.Component({
            selector: 'my-hero-detail',
            //inputs: ['hero'],
            templateUrl: 'hero-detail.component.html',
            styleUrls: [ 'hero-detail.component.css' ]
        }).Class({
            constructor: [app.HeroService, ng.router.ActivatedRoute, ng.common.Location,
                function (heroService, route, loaction) {
                    this.heroService = heroService;
                    this.route = route;
                    this.location = loaction;
                }],
            ngOnInit: function () {
                this.route.params.forEach(params => {
                    let id = +params['id'];
                    this.heroService.getHero(id)
                        .then(hero => this.hero = hero);
                });
            },
            goBack: function () {
                this.location.back();
            }
        });
})(window.app || (window.app = {}));