const sayHello = function() {
    console.log('Hello');
}

const sayHello = () => {
    console.log('Hello');
}


// one line function does not need braces
const sayHello = () => console.log('helloooooo');

const sayHello = () => 'Hello';

const sayHello = () => ({ msg: 'Hello' });

// single parameter does not need parenthesis
const sayHello = name => console.log(`Hello ${name}`);

const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map((name) => {
    return name.length;
})
sayHello('Josh');

