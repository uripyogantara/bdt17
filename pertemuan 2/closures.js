var counter = function(){
    var count=0;
    return function(){
        return ++count;
    }
}

c1= counter();
console.log(c1());
c1=counter();
console.log(c1());
c2=counter();
console.log(c2());

