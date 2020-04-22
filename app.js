// JavaScript source code
// Définit les contraintes pour le flux vidéo 
var contraintes = { video: { revêtementMode: "utilisateur" }, audio: false };
// Définissez les constantes 
const cameraView = document.querySelector("# camera - view"),
    cameraOutput = document.querySelector("# camera - output"),
    cameraSensor = document.querySelector("# camera - sensor"),
    cameraTrigger = document.querySelector("# camera - trigger")
// Accédez à la caméra de l'appareil et 
diffusez vers la fonction cameraView cameraStart() {
    navigator.mediaDevices
        .getUserMedia(contraintes)
        .then(function (stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .
        console.error("Oups. Quelque chose est cassé.", erreur);
}); 
}
// Prenez une photo lorsque cameraTrigger est tapé 
cameraTrigger.onclick = function () {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image / webp");
    cameraOutput.classList.add("pris");
};
// 
Démarre le flux vidéo lorsque la fenêtre charge window.addEventListener("load", cameraStart, false);