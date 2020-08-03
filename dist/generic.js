"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Veronica' }, { age: 30 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
console.log(merged);
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символом`
    };
}
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford', 'Audi'];
const ford = {
    model: 'Ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map