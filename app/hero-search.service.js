(function (app) {    
    var HeroSearchService = app.HeroSearchService = function () {
        this.db = new PouchDB('heroes');
    };
    HeroSearchService.prototype = {
        search: function (term) {
            return this.db.query(function (doc, emit) {
                emit(doc.name.substring(0, term.length).toLowerCase());
            }, { key: term.toLowerCase(), include_docs: true })
                .then(hs => hs.rows.map(h => h.doc));
        }
    };
})(window.app || (window.app = {}));