const a = 5;
const b = a + 10;

console.log('hello node');

function sum (a, b) {
    return a + b
}

class User { 
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

const multyply = (a, b) => a*b;

module.exports = {
    multyply,
    User,
    b
}

//module.exports = User;

// module.exports.sum = function () {}


console.log(module);