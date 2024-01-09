const fsPromises = require('fs/promises');

console.log(fsPromises);

/*
const file = fs.readFileSync('./file.txt', {encoding: 'utf-8'});  // метод, який синхронно читає вміст файлу і при цьому БЛОКУЄ потік виконання

*/

// console.log(file);

const promise = fsPromises.readFile('./file.txt', 'utf-8');
promise.then(data => {
    console.log(data)
});


