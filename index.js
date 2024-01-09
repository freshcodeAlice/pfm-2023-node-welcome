const fsPromises = require('fs/promises');


console.time('1');

const promise = fsPromises.readFile('./citadelle.txt', 'utf-8');
promise.then(data => {
    // console.log(data)
    console.log(data.length)
});

console.timeEnd('1');

// const file = fs.readFileSync('./citadelle.txt', {encoding: 'utf-8'});  // метод, який синхронно читає вміст файлу і при цьому БЛОКУЄ потік виконання

// // console.log(file);
//  console.timeEnd('1');



 /*
const promise = fsPromises.readFile('./file.txt', 'utf-8');
promise.then(data => {
    console.log(data)
});

*/
