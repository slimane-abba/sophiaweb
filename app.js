// JavaScript source code
// D�finit les contraintes pour le flux vid�o 
var contraintes = { video: { rev�tementMode: "utilisateur" }, audio: false };
// D�finissez les constantes 
const cameraView = document.querySelector("# camera - view"),
    cameraOutput = document.querySelector("# camera - output"),
    cameraSensor = document.querySelector("# camera - sensor"),
    cameraTrigger = document.querySelector("# camera - trigger")
// Acc�dez � la cam�ra de l'appareil et 
diffusez vers la fonction cameraView cameraStart() {
    navigator.mediaDevices
        .getUserMedia(contraintes)
        .then(function (stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .
        console.error("Oups. Quelque chose est cass�.", erreur);
}); 
}
// Prenez une photo lorsque cameraTrigger est tap� 
cameraTrigger.onclick = function () {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image / webp");
    cameraOutput.classList.add("pris");
};
// 
D�marre le flux vid�o lorsque la fen�tre charge window.addEventListener("load", cameraStart, false);