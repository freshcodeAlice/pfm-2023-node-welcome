const MathFn = require('./kdlfjlksjdlfksd');
const second = require('./second');

console.log(MathFn)

/*
require() - функція для імпорту модуля

1. Resolving - розв'язування шляхів
    1.1 - core modules - вбудовані модулі ноди
    1.2 - node_modules - всі підключені за допомогою npm сторонні бібліотеки
    1.3 - В папці проєкту
        - file
            *.js
            *.json
        - directory
            - package.json
                "main" -> entrypoint (файл-стартова точка проєкту)
            - index.js | *.json
    1.4. throw new Error
2. Loading - завантаження (і парсинг)
3. Wrapping - обгортка об'єкта в оточення (контекст виконання)
4. Evaluation - виконання коду
5. Caching - кешування результату


*/