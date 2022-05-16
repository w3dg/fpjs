const dragons = [
  { name: "fluffykins", strength: 8 },
  { name: "minikat", strength: 55 },
  { name: "floofybun2", strength: 89 },
  { name: "fluffykins2", strength: 80 },
  { name: "floofybun", strength: 39 },
  { name: "minikat2", strength: 75 },
];

// We are a team! We now want to add all the strengths!!!!

const combinedStrength = dragons.reduce((total, current) => {
  return total + current.strength;
}, 0);

console.log(combinedStrength); // 346
