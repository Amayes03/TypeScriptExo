const nb: number = Number(process.argv[2]);
const pet: string = process.argv[3];
let string = "";
let i = 0
while(i < nb)
if (pet === 'dogs') {
string += 'bark ';
i++
}
else if (pet === 'cats') {
    string += 'meow ';
    i++
}
else if (pet === 'cows') {
        string += 'moo ';
        i++
 }

 console.log(`${string.trim()}!`);
