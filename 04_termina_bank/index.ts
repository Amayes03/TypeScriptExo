const somme : number = Number(process.argv[2]);
const jours : number = Number(process.argv[3]);
let sommeAc = somme
let i = jours
let gain : number
while (i > 0){
    sommeAc = sommeAc * 1.04
    i--;
}
gain = sommeAc - somme;
    if (jours >= 2) {
        console.log(`You will earn ${(gain).toFixed(2)} rupees after ${jours} days.`);
      } else {
        console.log(`You will earn ${(gain).toFixed(2)} rupees after ${jours} day.`);
      }
