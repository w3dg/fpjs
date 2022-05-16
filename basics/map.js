const dragons = [
  { name: "fluffykins", strength: 8 },
  { name: "minikat", strength: 55 },
  { name: "floofybun2", strength: 89 },
  { name: "fluffykins2", strength: 80 },
  { name: "floofybun", strength: 39 },
  { name: "minikat2", strength: 75 },
];

const dragonsnames = dragons.map((dragon) => dragon.name);

console.log(dragonsnames);

/*
[
  'fluffykins',
  'minikat',
  'floofybun2',
  'fluffykins2',
  'floofybun',
  'minikat2'
]*/
