export default function createObject(name: string, description: string, hp: number) {
  const object = {
    name: name,
    description: description,
    hp: hp,
  };
  return object;
}