const original = {
  name: "Bob",
  age: 30,
};

const copyOriginal = Object.assign({}, original);
copyOriginal.name = "Charlie";

console.log(original);
console.log(copyOriginal);
