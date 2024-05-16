const camposDeFormulario = document.querySelectorAll("[required]");

camposDeFormulario.forEach((campo)=>{
campo.addEventListener("blur", ()=> verificarCampo(campo))
});

function verificarCampo(campo){
    console.log("Cambio", campo.name);
}