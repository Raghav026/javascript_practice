const obj = [
  { name: "a", age: 10 },
  { name: "b", age: 20 },
  { name: "c", age: 23 },
  { name: "d", age: 15 },
  { name: "e", age: 27 },
  { name: "f", age: 30 },
  { name: "g", age: 35 },
  { name: "h", age: 40 },
];

const evenAge = obj
  .filter((ob) => {
    return ob.age % 2 === 0;
  })
  .map((ob) => ob.name);
console.log(evenAge);
