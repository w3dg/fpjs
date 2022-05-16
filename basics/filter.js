const dragons = [
  { name: "fluffykins", strength: 8 },
  { name: "minikat", strength: 55 },
  { name: "floofybun2", strength: 89 },
  { name: "fluffykins2", strength: 80 },
  { name: "floofybun", strength: 39 },
  { name: "minikat2", strength: 75 },
];

// we only want dragons with strength greater than 50!  After all, they have
// to fight your inner demons!

const powerfulDragons = dragons.filter((dragon) => {
  return dragon.strength > 50;
});

console.log(powerfulDragons);

/*
[
  { name: 'minikat', strength: 55 },
  { name: 'floofybun2', strength: 89 },
  { name: 'fluffykins2', strength: 80 },
  { name: 'minikat2', strength: 75 }
]
*/
