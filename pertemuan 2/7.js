var http=require("http");
// http.get(process.argv[2], function(res) {
// //   console.log("Got response: " + res.statusCode);
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//         console.log(chunk);
//     });
// });

 http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)