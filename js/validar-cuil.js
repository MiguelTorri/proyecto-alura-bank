export default function esUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g,"");
    tieneNumerosRepetidos(cuil)

    //console.log(cuil);
    //console.log(tieneNumerosRepetidos(cuil));

    //validarPrimerosDigitos(cuil)
    //console.log(validarPrimerosDigitos(cuil));
    validarDigitoVerificador(cuil)
    console.log(validarDigitoVerificador(cuil));
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

function validarDigitoVerificador(cuil){
    let acumulado = 0;
    const factores = [5,4,3,2,7,6,5,4,3,2];

    for(let i=0; i<10; i++){
        acumulado += parseInt(cuil[i],10) * factores[i];
    }

    let ValidadorTeorico = 11 - (acumulado % 11)

    if(ValidadorTeorico==11){
        ValidadorTeorico = 0
    }else if(ValidadorTeorico == 10){
        ValidadorTeorico = 9
    }

    const digitoVerificador = parseInt(cuil[10],10)

    return digitoVerificador === ValidadorTeorico;
}