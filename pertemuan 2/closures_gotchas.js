var a={};
// undefined

// undefined
for(var i=0; i<3;i++){
	a[i]=function(){
        alert(i)
    }
}
for(var i=0; i<3;i++){
    (function(j){
        a[j]=function(){
            alert(j);
        }
    })(i);
}
a[1]();