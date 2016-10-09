
// var db = new PouchDB('heroes');
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