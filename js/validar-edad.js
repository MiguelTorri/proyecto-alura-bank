export default function esMayorDeEdad(campo){
    const FechaDenacimiento = new Date(campo.value);
    //validarEdad(FechaDenacimiento); 
    //console.log( validarEdad(FechaDenacimiento));
    if(!validarEdad(FechaDenacimiento)){
        campo.setCustomValidity("Necesitas ser mayor de edad")
    }
}


function validarEdad(fecha){
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());

    return fechaActual >= fechaMas18;
}