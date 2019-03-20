// function declaration vantagem:funciona antes da declaração
function soma(params) {
    return params    
}

//--(function expression desvantagem: não funciona antes
const sub = function(x, y){
    return x - y
}

//--(named function) expression desvantagem: não funciona antes
const mult = function mult(x,y){
    return x * y
}
