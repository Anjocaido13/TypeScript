var a = 12;
var b = 13;
function soma(a: number, b: number): number {
    return a + b;
}

// Arrow function equivalente
const soma2 = (a: number, b: number): number => {
    return a + b;
};

// Arrow function ainda mais concisa (quando o corpo da função tem uma única expressão)
const soma3 = (a: number, b: number): number => a + b;


function getMensage(){
    console.log("hi there");
}
