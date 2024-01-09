const fsPromises = require('fs/promises');


const promise = fsPromises.readFile('./citadelle.txt', 'utf-8');
promise.then(data => {
   const strArray = data.split('\n');
   const filt = strArray.filter(el => el);
   const randomIndex = Math.floor(Math.random() * filt.length);
   const randomQuote = filt[randomIndex];
    fsPromises.writeFile('./file.txt', randomQuote, 'utf-8');
});

// const file = fs.readFileSync('./citadelle.txt', {encoding: 'utf-8'});  // метод, який синхронно читає вміст файлу і при цьому БЛОКУЄ потік виконання

// // console.log(file);
//  console.timeEnd('1');

// Таска: завантажити текстовий файл з книгою з репозиторія, прочитати файл модулем fs і вивести на консоль рандомний абзац книги