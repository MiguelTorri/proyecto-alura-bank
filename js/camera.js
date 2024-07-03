const botonAbrirCamara = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const CampoCamara = document.querySelector("[data-camera]");

botonAbrirCamara.addEventListener("click", async ()=>{
    const IniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false})

    botonAbrirCamara.style.display = "none";
    CampoCamara.style.display = "block";
    video.srcObject = IniciarVideo;
})