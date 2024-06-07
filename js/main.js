import esUnCuil from "./validar-cuil.js";
import esMayorDeEdad from "./validar-edad.js";



const camposDeFormulario = document.querySelectorAll("[required]");

camposDeFormulario.forEach((campo)=>{
campo.addEventListener("blur", ()=> verificarCampo(campo))
campo.addEventListener("invalid", evento => evento.preventDefault())
});

function verificarCampo(campo){
    if(campo.name == "cuil" && campo.value.length >= 11){
        esUnCuil(campo)
    }

    if(campo.name == "fecha_nacimiento" && campo.value != ""){
        esMayorDeEdad(campo)
    }
    console.log(campo.validity);

}