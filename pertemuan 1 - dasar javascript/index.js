function sum(a,b) {
	return a+b
}

var i=0
while(i<3){
	// console.log(i)
	i=i+1
}

var me={
	name:{
		first: "Urip",
		last: "Yogantara"
	},
	alamat:"Jimbaran",
	umur: 18
}

var name= me.name
name.first="Bagus"

// delete me.name.first
// console.log(me)

/*
penggunaan for in
*/
// console.log("################################")
// console.log("PENGGUNAAN FOR IN")
// console.log("################################")
for(var value in me){
	// console.log(me[value])
	if (me[value]==me.name) {
		for(var name in me[value]){
			// console.log(`${name} adalah ${me[value][name]}`)
		}
	}else{
		// console.log(`${value} adalah ${me[value]}`)
	}
}

/*
penggunaan for of
*/
var array =[1,7,10]
for(var value of array){
	// console.log(value)
}

function incrementCounter(){
	var counter=0
	return ++counter
}

var c1=incrementCounter()
var c2=incrementCounter()
var c3=incrementCounter()

var mobil={
	type: "Bemo",
	harga: 1000000,
	banDepan: 10,
	banBelakang: 1,
	getHarga: function(){
		return 1000000;
	},
	getAllBan: function(){
		return this.banDepan+this.banBelakang;
	}
}

// console.log(mobil.getAllBan())


/*
#####################################
				OOP
#####################################
*/

Person = function(nama,umur){
	this.nama=nama;
	this.umur=umur;
}

var urip = new Person("Urip",19);

// console.log(urip.nama);

/*
########################################
				Kalkulator
########################################
*/
var calculator ={
	sum: function(a,b){
		return a+b;
	},
	min: function(a,b){
		return a-b;
	},
	multiple: function(a,b){
		return a*b;
	},
	div: function(a,b){
		return a/b;
	},
	mod: function(a,b){
		return a%b;
	},
	pow: function(a,b){
		return a^b
	},
	root:function(a,b){
		return null
	},
	median: function(a,b){
		return (a+b)/2;
	},
	total:function(a){
		let total=0;
		for (var i = 0; i < a.length; i++) {
			total+=a[i];
		}
		return total;
	},
	mean: function(a){
		let total=0;
		for (var i = 0; i < a.length; i++) {
			total+=a[i];
		}
		return total/a.length;
	}
}
a=[1,2,3,4,5,6,7,8]
console.log(calculator.pow(2,2));
console.log(calculator.total(a));
console.log(calculator.mean(a));