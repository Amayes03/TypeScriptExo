export default function printArray(array: string[]){
console.log('List of destinations:');
array.forEach((element, index) => {
let list = `${index + 1} - ${element}`
        console.log(list);
});
}