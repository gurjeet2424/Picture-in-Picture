const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    }catch(error){
        //catch error here
        console.log("whoops error:", error);

   }
}
button.addEventListener('click', async () => {
    // Diasable button
    button.disabled = true;
    // Start Picture-in-Picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
})
// On load
selectMediaStream();