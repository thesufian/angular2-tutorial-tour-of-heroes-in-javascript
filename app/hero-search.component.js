(function (app) {
    app.HeroSearchComponent =
        ng.core.Component({
            selector: 'hero-search',
            providers: [app.HeroSearchService],
            templateUrl: 'hero-search.component.html',
            styleUrls: ['hero-search.component.css']
        }).Class({
            constructor: [app.HeroSearchService, ng.router.Router,
                function (heroSearchService, router) {
                    this.heroSearchService = heroSearchService;
                    this.router = router;
                    this.heroes = new Rx.Observable();
                    this.searchTerms = new Rx.Subject();
                }],
            ngOnInit: function () {
                this.heroes = this.searchTerms
                    .debounceTime(300)        // wait for 300ms pause in events
                    .distinctUntilChanged()   // ignore if next search term is same as previous
                    .switchMap(term => term   // switch to new observable each time
                        // return the http search observable
                        ? this.heroSearchService.search(term)
                        // or the observable of empty heroes if no search term
                        : Rx.Observable.of([]))
                    .catch(error => {
                        // TODO: real error handling
                        console.log(error);
                        return Rx.Observable.of([]);
                    });
            },
            search: function (term) {
                this.searchTerms.next(term);
            },
            gotoDetail: function (hero) {
                let link = ['/detail', hero.id];
                this.router.navigate(link);
            }
        });
})(window.app || (window.app = {}));