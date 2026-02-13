const { encontrarIndicesMaiorEMenor } = require("./indices");

it("encontrarIndicesMaiorEMenor", () => {
    expect(encontrarIndicesMaiorEMenor([2, 3, 1, 10, 3, 4])).toEqual({ indiceMaior: 3, indiceMenor: 2 });
})
