var fs= require('fs');
var path=require('path');

module.exports = function(dir,ext,callback){
    fs.readdir(dir,function(err,files){
        if(err){
            // console.log(err);
            return callback(err,null);
        }
        var filltered=[];
        files.forEach(function(file) {
            if(path.extname(file)==="."+ext){
                // callback(err,data);
                filltered.push(file);
            }
        }, this);
        return callback(null,filltered);
    });
}
