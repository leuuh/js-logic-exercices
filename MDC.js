function calcularMDS(a, b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(calcularMDS(48, 18)); // Output: 6