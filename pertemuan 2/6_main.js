var filter=require('./6.js');

filter(process.argv[2],process.argv[3],function(err,data){
    if(err){
        console.log(err);
    }

    data.forEach(function(file) {
        console.log(file);
    }, this);
});
