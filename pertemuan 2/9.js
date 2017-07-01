var http=require("http");
// var bl=require("bl");
 http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    var raw1='';
    response.on('error',function(err){
        console.log(err);
    });
    response.on('data',function(data){
        raw1+=data;
    });
    response.on('end',function(){
        console.log(raw1);
        http.get(process.argv[3], function (response) {
            response.setEncoding('utf8')
            var raw2='';
            response.on('error',function(err){
                console.log(err);
            });
            response.on('data',function(data){
                raw2+=data;
            });
            response.on('end',function(){
                console.log(raw2);
                http.get(process.argv[4], function (response) {
                    response.setEncoding('utf8')
                    var raw3='';
                    response.on('error',function(err){
                        console.log(err);
                    });
                    response.on('data',function(data){
                        raw3+=data;
                    });
                    response.on('end',function(){
                        console.log(raw3);
                        
                    });
                }).on('error', console.error)
            });
        }).on('error', console.error)
                
    });
}).on('error', console.error)

// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0

//     function printResults () {
//       for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }

//           results[index] = data.toString()
//           count++

//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }

//     for (var i = 0; i < 3; i++) {
//       httpGet(i)
//     }
        
        