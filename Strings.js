const gameName = new String('nilesh')

console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log('charAct',gameName.charAt(3));

console.log('position of l ',gameName.indexOf('l'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = ("    nilesh     ")
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.nilesh%20kumar"
console.log(url.replace('%20', '_'));
console.log(url.includes('nilesh'));

console.log(url.includes('rohan'));