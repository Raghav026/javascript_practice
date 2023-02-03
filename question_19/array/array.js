const arr = [1, 2, 3, 4];

arr.push(5);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();

arr.unshift(0);

const a2 = arr.map((e) => e * 2);
console.log(a2);

const a3 = arr.filter((e) => e % 2 === 0);
console.log(a3);

arr.splice(1, 1, 10, 20);
console.log(arr);

console.log(arr.slice(1, 3));

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

const arr2 = ["Hello", "World"];
console.log(arr2.join(" "));
