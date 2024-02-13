let Csize : number = Number(process.argv[2]);
const Size : number = 348;
const pfee : number = 3;
const manquante: number = Math.ceil((348 - Csize) / pfee);

if (manquante < 10){
    console.log(`The Great Fairy is missing ${manquante} Stray Fairies.`);
    console.log("It's not too bad yet, it shouldn't take too much time to heal her.");
}
else if (manquante >= 10 && manquante < 40){
    console.log(`The Great Fairy is missing ${manquante} Stray Fairies.`);
    console.log("Whoever did this to her was clearly playing some mischievous prank!");
}
else if (manquante >= 40 && manquante <= 99){
    console.log(`The Great Fairy is missing ${manquante} Stray Fairies.`);
    console.log("She has been greatly damaged. We must save her as soon as possible!");
}
else if (manquante > 99){
    console.log(`The Great Fairy is missing ${manquante} Stray Fairies.`);
    console.log("What happened to her!? It's just awful!");
}
