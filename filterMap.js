
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(value); //foreach koi value return nhi karta hai

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=>num >4)
// const newNums = myNums.filter((num)=>num <8)
// const newNums = myNums.filter((num)=>num <10)
// const newNums = myNums.filter((num)=>num >1)
// console.log(newNums);

// const newNums = myNums.filter((num)=>{
//     return num<9
// })
// const newNums = []
// myNums.forEach((num) =>{
//     if ( num <10 ){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title: 'book 1', genre: 'social science', publish: 1991, edition: 2014 },
    {   title: 'book 2', genre: 'science', publish: 1995, edition: 2007 },
    {   title: 'book 3', genre: 'history', publish: 1998, edition: 2009 },
    {   title: 'book 4', genre: 'mathematics', publish: 1988, edition: 2005 },
    {   title: 'book 5', genre: 'science', publish: 1993, edition: 2004 },
    {   title: 'book 6', genre: 'social science', publish: 1992, edition: 2011 },
    {   title: 'book 7', genre: 'history', publish: 1992, edition: 2012 },

];

let userBooks = books.filter((bk) => bk.genre === 'history' )
 
 userBooks = books.filter((bk) => bk.genre === 'science')

 userBooks = books.filter((bk) => bk.publish >= 1989 && bk.genre === 'history')

console.log(userBooks);
