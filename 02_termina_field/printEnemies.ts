export default function printEnemies(array: string[]) {
  const evilwords= ["evil", "bad", "mean", "rotten", "cruel"];
  for (let name of array){ 
      const minname = name.toLowerCase();
      const simplewords = minname.split(" ");
      const devilwords = simplewords.some((word) => evilwords.includes(word));

      if(devilwords){
          const intrus = simplewords.join("_")
          console.log(intrus);
      }
  }
}