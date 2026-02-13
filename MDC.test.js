const { calcularMDS } = require("./MDC");

it("calcularMDS", () => {
    expect(calcularMDS(48, 18)).toBe(6);
})

it("calcularMDS", () => {
    expect(calcularMDS(101, 103)).toBe(1);
})
