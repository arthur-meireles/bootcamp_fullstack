
const percentageFrom = (salary, value) => {
    let y = value * 100;
    let x = salary;
    x = y/x;
    let arredondado = parseFloat(x.toFixed(2));
    return arredondado;
};
export { percentageFrom };
