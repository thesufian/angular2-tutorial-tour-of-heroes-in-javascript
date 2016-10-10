(function (app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule,
      ng.http.HttpModule,
        ng.router.RouterModule.forRoot([
          {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
          },
          {
            path: 'heroes',
            component: app.HeroesComponent
          },
          {
            path: 'dashboard',
            component: app.DashboardComponent
          },
          {
            path: 'detail/:id',
            component: app.HeroDetailComponent
          }
        ])],
      providers: [app.HeroService],
      declarations: [
        app.AppComponent,
        app.HeroesComponent,
        app.DashboardComponent,
        app.HeroDetailComponent,
        app.HeroSearchComponent
      ],
      bootstrap: [app.AppComponent]
    })
      .Class({
        constructor: function () { }
      });
})(window.app || (window.app = {}));