const sum = (a) => {
  return (b) => a + b;
};

// 3

console.log(sum(2)(1));

// Another Example
const multiply = (a) => {
  return (b) => a * b;
};

// Partial functions!
const multiplyBy2 = multiply(2);

console.log(multiplyBy2(2));

// DRAGONSSSSSSSSS

const makeDragon = (name) => (size) => (element) => (strength) => name + " is a " + size + " dragon " + " that breathes " + element + " and has a strength of " + strength;

console.log(makeDragon("fluffykins")("tiny")("fire")("57"));
// fluffykins is a tiny dragon  that breathes fire and has a strength of 57

const dave = makeDragon("dave");
console.log(dave("tiny")("rainbows")("11"));
// dave is a tiny dragon  that breathes rainbows and has a strength of 11
