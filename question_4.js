const str = "Danny is dancing";
const arr = str.split("");
const res = arr
  .sort((a, b) => a.localeCompare(b))
  .join("")
  .trim();
console.log(res);
