// string

const name1 = 'Josh';
const name2 = new String('Josh');

name2.foot = 'right';
console.log(name2);

console.log(typeof name2);


if (name1 === 'Josh') {
    console.log('YES');
} else {
    console.log('NO');
}

// number

const num1 = 5;
const num2 = new Number(10);

// bool

const bool1 = true;
const bool2 = new Boolean(true);

// func

const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 43');
console.log(getSum1(1,43));
console.log(getSum2);

// obj

const josh1 = { name: 'Josh' };
const josh2 = new Object({ name: 'Josh' });
console.log(josh2);

// arrays

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr2);

// regular expressions

const reg1 = /\w+/;
const reg2 = new RegExp('\\w+');
console.log(reg1);
console.log(reg2);