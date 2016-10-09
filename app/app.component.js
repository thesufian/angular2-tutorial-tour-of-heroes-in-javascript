(function (app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            styleUrls: ['app.component.css'],
            template: `
                <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                </nav>
                <router-outlet></router-outlet>`
        })
            .Class({
                constructor: function () {
                    this.title = 'Tour of Heroes';
                }
            });
})(window.app || (window.app = {}));