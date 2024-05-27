//função compor que recebe duas funções f e g e retorna uma 
//nova função que é a composição de f e g (ou seja, f(g(x))).

function compor(f, g) {
    // Retorna uma nova função que é a composição de f e g
    return function(x) {
        return f(g(x));
    };
}

function somar1(x) {
    return x + 1;
}

function multiplicar2(x) {
    return x * 2;
}

let funcaoComposta = compor(somar1, multiplicar2);
console.log(funcaoComposta(5)); // Output: 11 (multiplicar2(5) = 10, somar1(10) = 11)