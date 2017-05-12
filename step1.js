var rp = require('request-promise');
var Rx = require('rxjs/Rx');


// rp('http://www.google.com')
//     .then(function (htmlString) {
//         // Process html...
//         console.log(htmlString);
//     })
//     .catch(function (err) {
//         // Crawling failed...
//     });

Rx.Observable.http({url:'http://www.google.com'}).subscribe(result=>console.log(result));
