console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

const a = 10
const b = 20
const c = 30
const myFunc = ()=>{
    console.log('Hello');
}

const myFunc2 = () => {
    console.log('Hello2');
}

const myFunc3 = () => {
    console.log('Hello3');
}

module.exports = {
    a,
    b,
    c,
    myFunc,
    myFunc2,
    myFunc3
}