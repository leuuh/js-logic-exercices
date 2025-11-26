function encontrarIndicesMaiorEMenor(Array) {
let indiceMaior = 0;
let indiceMenor = 0;

for (let i = 0 ; i <Array.length ; i++) {
    if (Array[i] > Array[indiceMaior]) indiceMaior = i;
    if (Array[i] < Array[indiceMenor]) indiceMenor = i;
}
return {indiceMaior, indiceMenor};
}

console.log(encontrarIndicesMaiorEMenor([2, 3, 1, 10, 3, 4]));      
