let add = (a, b) => {
    return a + b;
}

let minus = (a, b) => {
    return a - b;
}

let funs = {
    add, minus
}

let f = funs['add'];
let params = [1, 2];
let result = f.call(this, 1, 2);

console.log('result', result)


let value = "{\r\n\t\"a\": \"1\",\r\n\t\"b\": \"2\"\r\n}"

let a = JSON.parse(value);
console.log(JSON.parse(value))
console.log(JSON.stringify(JSON.parse(value)));