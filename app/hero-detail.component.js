(function (app) {
    app.HeroDetailComponent =
        ng.core.Component({
            selector: 'my-hero-detail',
            inputs : ['hero'],
            template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    </div>
  `
        }).Class({
            constructor:function(){
               //this.hero= ng.core.Input("hero");
            }
         });
})(window.app || (window.app = {}));