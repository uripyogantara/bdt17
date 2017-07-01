var jumlah=0;

for(var i=2;i<process.argv.length;i++){
    jumlah+=Number(process.argv[i]);
}

console.log(jumlah);