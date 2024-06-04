const marvalHeros =  ["thor", "hulk", "ironman"]

const dcHeros = ["superman", "batman", "flash"]
// marvalHeros.push(dcHeros)

// console.log(marvalHeros);

// const allHeros = marvalHeros.concat(dcHeros)
// console.log(allHeros);
const allNewHeros = [...marvalHeros , ...dcHeros]

// console.log(allNewHeros);

const anotherArray = [1, 2, 3,[4, 5,[6, 7, [8, 9]]]]

const newaAotherArray = anotherArray.flat(Infinity)

console.log(newaAotherArray);

console.log(Array.isArray('Nilesh'));
console.log(Array.from('Nilesh'));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));