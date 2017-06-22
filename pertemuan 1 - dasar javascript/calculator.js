var calculator = {
    penambahan : function(a,b) {
        return a+b;
    },
    pengurangan : function(a,b) {
        return a-b; 
    },
    perkalian : function(a,b) {
        return a*b;
    },
    pembagian : function(a,b) {
        return a/b;
    },
    modulus : function(a,b) {
        return a%b;
    },
    kuadrat : function(a,b) {
        return Math.pow(a,b);
    },
    akar : function(a) {
        return Math.sqrt(a);
    },
    nilaiTengah : function(a,b) {
        return (a+b)/2
    },
    nilaiTotal: function(a) {
        let total =0;

        for (let i = 0; i < a.length; i++) {
            total+=a[i]
        }
        return total;
    },
    nilaiRataRata : function(a) {
        let total =0;

        for (let i = 0; i < a.length; i++) {
            total+=a[i]
        }
        return total/a.length;
    },    
}
var a=9,b=2;
array=[1,2,3,4,5,6,7,8]
console.log("Diketahui a = "+a+" dan b = "+b);
console.log("Penambahan : "+calculator.penambahan(a,b));
console.log("pengurangan : "+calculator.pengurangan(a,b));
console.log("perkalian : "+calculator.perkalian(a,b));
console.log("pembagian : "+calculator.pembagian(a,b));
console.log("modulus : "+calculator.modulus(a,b));
console.log("kuadrat : "+calculator.kuadrat(a,b));
console.log("akar dari a : "+calculator.akar(a));
console.log("nilaiTengah : "+calculator.nilaiTengah(a,b));

console.log("\n\nDiketahui array=[1,2,3,4,5,6,7,8]")
console.log("nilaiTotal : "+calculator.nilaiTotal(array));
console.log("nilaiRataRata : "+calculator.nilaiRataRata(array)); 