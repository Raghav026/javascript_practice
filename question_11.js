const evaluate = (arg) => {
  arg = arg.trim();
  let op = "";

  for (const i of arg) {
    if (i === "+" || i === "-" || i === "*" || i === "/") {
      op = i;
      break;
    }
  }

  if (op === "") return "invalid";

  const arr = arg.split(op);
  const x = Number.parseInt(arr[0]);
  const y = Number.parseInt(arr[1]);

  if (!x || !y) return "invalid";

  switch (op) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      return "invalid";
  }
};

console.log(evaluate("24 *2"));
console.log(evaluate("a + 2"));
console.log(evaluate("  48 + 2"));
console.log(evaluate("2*2"));
console.log(evaluate("8-8"));
console.log(evaluate("9+9"));
console.log(evaluate("a*a"));
console.log(evaluate("2 "));
console.log(evaluate("9/2"));
