
(function () {
    var db = new PouchDB('heroes');
    var heroes = [{ id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }];
    heroes.forEach(h => h._id = h.id.toString());
    heroes.forEach(h => db.put(h).catch(x=>x));
})();

// db.info().then(function (info) {
//   console.log('We have a local database: ' + JSON.stringify(info));
// });

// var db = new PouchDB('http://localhost:5984/kittens');
// db.info().then(function (info) {
//     console.log('We have a remote database: ' + JSON.stringify(info));
// });

// var doc = {
//     "_id": "mittens",
//     "name": "Mittens",
//     "occupation": "kitten",
//     "age": 3,
//     "hobbies": [
//         "playing with balls of yarn",
//         "chasing laser pointers",
//         "lookin' hella cute"
//     ]
// };
// db.put(doc).catch(function (err) {
//     console.log(err);
// }).then(function () {
//     db.get('mittens').then(function (doc) {
//         console.log(doc);
//     });
// });