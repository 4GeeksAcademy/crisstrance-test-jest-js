
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(3.5);

    // Si 1 euro son 156.5 Yen, entonces 3.5 Dollars debe ser (3.5 * 156.5 / 1.07 )
    const expected = (3.5 * 156.5) / 1.07;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBeCloseTo(511.91, 1); 
})

test("One yen should be 0,0055 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromYenToPound(3.5);

    // Si 1 euro son 0.87 Pounds, entonces 3.5 yen debe ser (3.5 * 0.87 / 156.5 )
    const expected = (3.5 * 0.87) / 156.5;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBeCloseTo(0.019, 1);
})