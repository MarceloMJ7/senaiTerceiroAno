// Debug um erro em um script usando o --inspect.

function multiplicar(a, b) {

    debugger;

    return a * b;
}

const resultado = multiplicar(5, 3);

console.log(resultado);