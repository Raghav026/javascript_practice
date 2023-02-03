const obj = { firstName: "Raghav", lastName: "Sekhri" };

console.log(Object.keys(obj));
console.log(Object.values(obj));

const obj2 = { age: 21 };
const obj3 = Object.assign(obj, obj2);
console.log(obj3);

console.log(obj3.hasOwnProperty("age"));
console.log(obj3.hasOwnProperty("name"));
