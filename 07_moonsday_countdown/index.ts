const distance : number = Number(process.argv[2]);
const vitesse : number = 3600;
let temps : number = distance / vitesse;
let tempsR : number = Math.floor(temps);

let i = tempsR
while (i >= 0) {
    console.log(`${i}`);
    i--;
 }
