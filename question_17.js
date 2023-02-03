const obj1 = [
  { name: "Karl", age: 20 },
  { name: "Karl", age: 23 },
  { name: "Marry", age: 20 },
  { name: "Aston", age: 20 },
];
const removeDup = (obj) => {
  const total = obj.reduce((acc, cv) => {
    acc[cv.name] = acc[cv.name] + 1 || 1;
    return acc;
  }, {});
  const res = obj.filter((ob) => {
    return total[ob.name] === 1;
  });
  console.log(res);
};
removeDup(obj1);
