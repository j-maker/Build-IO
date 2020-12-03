export const  priceWithIva = ( value : number ) => {
    const redondear = (numero : number, digitos : number) => {
        let base = Math.pow(10, digitos);
        let entero = Math.round(numero * base);
        return entero / base;
    }
    let newValue = redondear(((value * 0.12) + value), 2);

    newValue = newValue.toString().endsWith('.89') ? 
    newValue + 0.01  : 
    newValue.toString().endsWith('.91') ? newValue - 0.01 : newValue;
    

    return newValue ;
}