export default function esUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g,"");
    tieneNumerosRepetidos(cuil)

    //console.log(cuil);
    //console.log(tieneNumerosRepetidos(cuil));

    validarPrimerosDigitos(cuil)
    console.log(validarPrimerosDigitos(cuil));
}

//evitar numeros repetidos
function tieneNumerosRepetidos(cuil){
    const numeroRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];
    
    return numeroRepetidos.includes(cuil);
}

function validarPrimerosDigitos(cuil){  //extrae los primeros 2 caracteres del campo cuil
    let primerosDigitos = cuil.substr(0,2);
    let digitosValidos = ["20", "23", "24", "27", "30", "33", "34"];
    return digitosValidos.includes(primerosDigitos); //retornara un true si es que contiene los digitos y false si no los contine
}